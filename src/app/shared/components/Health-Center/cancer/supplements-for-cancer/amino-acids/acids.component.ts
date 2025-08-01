import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-acids',
  templateUrl: './acids.component.html',
  styleUrls: ['./acids.component.css']
})
export class AcidsComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts('aminoAcidProducts').subscribe((data: any) => {
      console.log("API Response =>", data);
      this.products = data?.items || [];
    });
  }
}
