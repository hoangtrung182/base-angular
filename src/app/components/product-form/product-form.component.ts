import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Iproduct } from 'src/app/interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  constructor(private form: FormBuilder, private proService: ProductService, private router: ActivatedRoute, private nav: Router) {}

  mode: "create" | "update" = "create";

  currentProduct!: Iproduct;
  productForm = this.form.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0, [Validators.required, Validators.minLength(1)]],
    quantity: [0, [Validators.required, Validators.minLength(1)]],
    description: [''],
    image: ['', [Validators.required]]
  });

  async ngOnInit() {
    const { id } = this.router.snapshot.params;
    if(id) {
      this.mode = "update";
      this.currentProduct = await lastValueFrom(this.proService.getProduct(id));
      this.productForm.patchValue(this.currentProduct);
    }
  };

  async handleSubmit() {
    if(this.productForm.invalid) {
      console.log('Oops! Sản phẩm không được chấp nhận');
      return;
    }
    
    if(this.mode === 'create') {
      try {
        await lastValueFrom(this.proService.addProduct(this.productForm.value as Iproduct));
        this.nav.navigate(['/admin']);
        alert("Added product successfully");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await lastValueFrom(this.proService.updateProduct({...this.currentProduct, ...this.productForm.value} as Iproduct));
        this.nav.navigate(['/admin']);
        alert("Updated product successfully");
      } catch (error) {
        console.log(error);
      }
    }
  };


}
