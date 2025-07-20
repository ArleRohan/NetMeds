import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { EyesComponent } from '../shared/components/Beauty/make-up/eyes/eyes.component';

const routes: Routes = [
  { path: "productList/:keyName", component: ProductListComponent },
  { path: "productDetails", component: ProductDetailsComponent },
  {path:"productList/:eyes",component:EyesComponent}
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ProductsModule { }
