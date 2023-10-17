import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/interface';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  constructor(private popup: PopupService, private nav: Router) { }
  allProductCarts!: Iproduct[];
  LOCAL_CART: string = 'local_cart';


  async ngOnInit() {
    try {
      const allProducts = JSON.parse(localStorage.getItem(this.LOCAL_CART)!);
      if(allProducts) {
        this.allProductCarts = allProducts
      } else {
        this.allProductCarts = [];
      }
    } catch (error) {
      console.log(error);
    }
  }
  totalPrice() {
    const total = this.allProductCarts.reduce((total,product) => {
      return total + product.price! * product.quantity!} ,0);
    return total;
  }

  clearCart() {
    if(this.allProductCarts.length > 0) {
      this.allProductCarts = [];
      this.popup.showCartPopup('Done! Invoice is completed')
      localStorage.setItem(this.LOCAL_CART, JSON.stringify(this.allProductCarts));
    }
  }
  
  async handleRemove(product: Iproduct) {
    try {
      const index = this.allProductCarts.findIndex(item => item.id === product.id);
      if(index !== -1) {
        const cartItem = this.allProductCarts[index];
        if(cartItem.quantity! > 1) {
          cartItem.quantity!--;
          this.popup.showCartPopup(`${cartItem.name} -1`);
        } else {
          this.allProductCarts.splice(index, 1);;
          this.popup.showCartPopup(`${cartItem.name} -1`);
        }
      }
      localStorage.setItem(this.LOCAL_CART, JSON.stringify(this.allProductCarts));
    } catch (error) {
      console.log(error);
    }
  }
}
