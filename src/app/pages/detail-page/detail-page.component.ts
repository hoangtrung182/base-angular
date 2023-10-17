import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Iproduct } from 'src/app/interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent {
  constructor(private proService: ProductService, private router: ActivatedRoute) {}

  productDetail!: Iproduct;
  async ngOnInit() {
    const { id } = this.router.snapshot.params;
    try {
      this.productDetail = await lastValueFrom(this.proService.getProduct(id));
    } catch (error) {
      console.log(error);
    }
  }
}
