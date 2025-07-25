import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, map } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public key: any;
  public products: any[] = [];
  public bannerImg: any = '';
  public categories: any[] = [];
  public sectionBannerImg: any = '';
  public sectionKeys: any[] = [];

  constructor(
    private prodServ: ProductService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {


  }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.key = params['keyName'];
      console.log("keyName :", this.key);
      this.getAllProducts(this.key)
      this.getSectionKeys(this.key);
    });
  }

  getSectionKeys(key: any) {
    if (key === "ayush") {
      this.sectionKeys = ['ayurvedic', 'homeopathy', 'unani', 'siddha',]
    } else if (key === "diabetes") {
      this.sectionKeys = ['glucometers', 'sugar-substitutes', 'diabetes-management-supplement', 'diabetes_care_ayurveda',]
    } else if (key === "healthCondition") {
      this.sectionKeys = ['ayurvedic', 'homeopathy', 'unani', 'siddha',]
    } else if (key === "personalCare") {
      this.sectionKeys = ['ayurvedic', 'homeopathy', 'unani', 'siddha',]
    } else if (key === "makeUp") {
      this.sectionKeys = ['eyesProducts', 'FaceMakeupProduct', 'LipsProduct', 'NailsProduct',]
    } else if (key === "skinCare") {
      this.sectionKeys = ['ayurvedic', 'homeopathy', 'unani', 'siddha',]
    } else if (key === "fragrance") {
      this.sectionKeys = ['ayurvedic', 'homeopathy', 'unani', 'siddha',]
    }

    if (this.sectionKeys.length != 0) {
      this.getAllCategoryProducts(this.sectionKeys)

    }
  }

  getAllCategoryProducts(sectionKeys: any) {
    const requests = sectionKeys.map((key: any) => this.prodServ.getAllProducts(key));

    forkJoin(requests).pipe(
      map((sections: any) => {
        return sections.flatMap((section: any) => section.items);
      })
    ).subscribe({
      next: (mergedProducts) => {
        this.products = mergedProducts;
        console.log('Merged products (forkJoin):', this.products);
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }

  getAllProducts(key: any) {
    // debugger
    this.prodServ.getAllProducts(key).subscribe((res: any) => {
      this.products = res.items;
      this.categories = res.categories;
      this.sectionBannerImg = res.bannerImage
      console.log(res.items);

    })

  }

  navigateToCategory(categoryName: any) {
    this.router.navigate([`/products/productList/${categoryName}`]);
  }

  goToDetail(productId: string) {
    this.router.navigate(['/products/product-details', this.key, productId]);
  }
}
