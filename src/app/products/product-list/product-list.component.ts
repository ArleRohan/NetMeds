import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private prodServ: ProductService,
    private actRoute: ActivatedRoute
  ) {
    // this.getAllProducts(this.key)
    // this.key = "unaniProducts"
  }

  ngOnInit() {
    // this.key = this.actRoute.snapshot.params['keyName']
    // console.log("keyName :", this.key)

    // this.getAllProducts(this.key);
    this.actRoute.params.subscribe(params => {
      this.key = params['keyName'];
      console.log("keyName :", this.key);
      this.getAllProducts(this.key);
    });
  }
  // ngOnChanges(){
  //   this.key = this.actRoute.snapshot.params['keyName']
  //   console.log("keyName :",this.key)

  //   this.getAllProducts(this.key);
  // }

  ngAfterViewCheck() {
    // this.key = this.actRoute.snapshot.params['keyName']
    // console.log("keyName :",this.key)

    // this.getAllProducts(this.key);
  }

  getAllProducts(key: any) {
    // debugger
    this.prodServ.getAllAyurvedicProducts(key).subscribe((res: any) => {
      // this.productsList = res
      this.products = res.items;
      this.bannerImg = res.banner;
      console.log(res.items);
      
    })

  }

  addToCart(prod: any) {

  }

}
