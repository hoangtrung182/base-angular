import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Iproduct } from 'src/app/interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {
  constructor(private proService: ProductService) {}

  products!: Iproduct[];
  async ngOnInit() {
    try {
      this.products = await lastValueFrom(this.proService.getAll());
    } catch (error) {
      console.log(error);
    }
  }

  async handleClick(id: number) {
    if(!window.confirm('Are you sure you want to')) return;
    try {
      await lastValueFrom(this.proService.deleteProduct(id));
      this.products = this.products.filter(item => item.id !== id);
      alert("Deleted successfully!");
    } catch (error) {
      console.log(error);
    }
  }

}
