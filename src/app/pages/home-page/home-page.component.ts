import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Iproduct, IproductCart } from 'src/app/interface';
import { PopupService } from 'src/app/services/popup.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private proService: ProductService, private popup: PopupService, private nav: Router) {}
  products!: Iproduct[];
  searchValue: string = '';
  carts: Iproduct[] = [];

  LOCAL_CART: string = 'local_cart';

  
  
  async ngOnInit() {
    const allProducts = JSON.parse(localStorage.getItem(this.LOCAL_CART)!);
    const accessToken = JSON.parse(localStorage.getItem('user_role')!);

    if(allProducts) {
      this.carts = allProducts
    } else {
      this.carts = [];
    }

    try {
      this.products = await lastValueFrom(this.proService.getAll());
    } catch (error) {
      console.log(error);
    }

    if(!accessToken) {
      this.nav.navigate(['/auth/login']);
    }    

  }

  // showCartPopup(message:string) {
  //   var cartPopup = document.getElementById("cartPopup") as HTMLDivElement;
  //   cartPopup.innerHTML = message;
  //   cartPopup.style.display = "block";
  //   setTimeout(() => { cartPopup.style.display = "none"; }, 2000);
  // }

  addToCart(product: Iproduct) {
    const cartItem = this.carts.find(item => item.id === product.id);
    if(cartItem) {
      cartItem.quantity!++;
      this.popup.showCartPopup(` ${cartItem.name} +1`);
    } else {
      const newProduct = {...product, quantity: 1};
      this.carts.push(newProduct);
      this.popup.showCartPopup(` ${newProduct.name} +1`);
    }
    console.log(this.carts);
    localStorage.setItem(this.LOCAL_CART, JSON.stringify(this.carts));
  }

  handleChange(value: string) {
    switch(value) {
      case 'high': 
        this.products = [...this.products].sort((a, b) => b.price! - a.price!);
        break;
      case 'low': 
        this.products = [...this.products].sort((a, b) => a.price! - b.price!);
        break;
      case 'ascending': 
        this.products = [...this.products].sort((a, b) => a.name!.localeCompare(b.name!));
        break;
      case 'descending':
        this.products = [...this.products].sort((a, b) => b.name!.localeCompare(a.name!));
        break;
      default: 
        console.log('Wrong option! Please choose again.');
    }
  }

  handleSubmit() {
    
  } 
}
