import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartserviceService } from 'src/app/carts/servicecart/cartservice.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService:CartserviceService
  ) {}

  ngOnInit() {
    const type = this.route.snapshot.paramMap.get('type')!;
    const id = this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(type, id).subscribe(data => {
      this.product = data;
      console.log(this.product);
      
    });
  }

   addToCart(product: any) {
    this.cartService.addToCart(product).subscribe({
      next: () => {
        alert(`${product.name} added to cart!`);
        this.cartService.updateCartCount();
      },
      error: err => {
        alert(err.message);
      }
    });
  }
}
