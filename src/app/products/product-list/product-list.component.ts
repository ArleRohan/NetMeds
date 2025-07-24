import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

export interface Products {
  id: number;
  name: string;
  brand : string;
  price: string;
  disc_price: number;
  disc: number;
  category: [];
  image: string,

}
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //  public productsList: Products[] = []
  public key: any;
  public products: any[] = [];
  public bannerImg: any = '';

  constructor(
    private prodServ: ProductService,
    private actRoute: ActivatedRoute,
    private router:Router
  ) {
    
    
  }

  ngOnInit() {
    
    
    this.actRoute.params.subscribe(params => {
      this.key = params['keyName'];
      console.log("keyName :", this.key);
      this.getAllProducts(this.key);
    });
  }
 
  


  getAllProducts(key: any) {
    // debugger
    this.prodServ.getAllProducts(key).subscribe((res: any) => {
      this.products = res.items;
      this.bannerImg = res.banner;
      console.log(res.items);
      
    })

  }

  addToCart(prod: any) {

  }
  goToDetail(productId: string) {
    this.router.navigate(['/products/product-details', this.key, productId]);
  }

}