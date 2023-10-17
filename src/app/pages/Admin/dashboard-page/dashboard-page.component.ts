import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Iproduct } from 'src/app/interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {
  constructor(private proService: ProductService, private nav: Router) {}

  products!: Iproduct[];
  searchValue: string = '';
  async ngOnInit() {
    const accessToken = JSON.parse(localStorage.getItem('user_role')!);
    if(!accessToken) {
      this.nav.navigate(['/auth/login']);
    }

    if(accessToken === '1') {
      this.nav.navigate(['/home']);
    }

    try {
      this.products = await lastValueFrom(this.proService.getAll());
    } catch (error) {
      console.log(error);
    }
  }

  showPopup(message: string) {
    const cartPopup = document.getElementById('cartPopup') as HTMLDivElement;
    cartPopup.style.display = 'block';
    cartPopup.innerHTML = message;
    setTimeout(() => cartPopup.style.display = 'none', 2000);
  }

  async handleClick(id: number) {
    if(!window.confirm('Are you sure you want to')) return;
    try {
      await lastValueFrom(this.proService.deleteProduct(id));
      this.products = this.products.filter(item => item.id !== id);
      this.showPopup("Deleted successfully!");
    } catch (error) {
      console.log(error);
    }
  }

}
