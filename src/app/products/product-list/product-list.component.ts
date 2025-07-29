// import { Component } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router'; // ✅ Add Router here
// import { CartserviceService } from 'src/app/carts/servicecart/cartservice.service';
// import { ProductService } from 'src/app/core/services/product.service';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent {
//   public key: any;
//   public products: any[] = [];
//   public bannerImg: any = '';

//   constructor(
//     private prodServ: ProductService,
//     private actRoute: ActivatedRoute,
//     private cartService: CartserviceService,
//     private router: Router // ✅ Inject router
//   ) {}

//   ngOnInit() {
//     this.actRoute.params.subscribe(params => {
//       this.key = params['keyName'];
//       console.log("keyName:", this.key);
//       this.getAllProducts(this.key);
//     });
//   }

//   getAllProducts(key: any) {
//     this.prodServ.getAllProducts(key).subscribe((res: any) => {
//       this.products = res.items;
//       this.bannerImg = res.banner;
//     });
//   }

//   addToCart(product: any) {
//     this.cartService.addToCart(product).subscribe({
//       next: () => {
//         alert(`${product.name} added to cart!`);
//         this.cartService.updateCartCount();
//       },
//       error: err => {
//         alert(err.message);
//       }
//     });
//   }
//   goToDetail(productId: string): void {
//     this.router.navigate(['/product-detail', productId]);
//   }
// }

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartserviceService } from 'src/app/carts/servicecart/cartservice.service';
import { ProductService } from 'src/app/core/services/product.service';

export interface Products {
  id: string;
  name: string;
  MRP: number;
  saleProce: number;
  discount: string;
  description: [];
  category: string,
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
  public bannerText: any = '';

  constructor(
    private prodServ: ProductService,
    private actRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartserviceService
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
      this.bannerText = res.bannerTxt
      console.log(res.items);

    })

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

  goToDetail(productId: string) {
    this.router.navigate(['/products/product-details', this.key, productId]);
  }

}
