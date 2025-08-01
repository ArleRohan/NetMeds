import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  selectedImage: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const type = this.route.snapshot.paramMap.get('type')!;
    const id = this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(type, id).subscribe(data => {
      this.product = data;
      if (this.product?.images?.length > 0) {
        this.selectedImage = this.product.images[0];
      }
    });
  }

  onThumbnailClick(imgUrl: string) {
    this.selectedImage = imgUrl;
  }
}
