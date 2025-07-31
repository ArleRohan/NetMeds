import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderReviewComponent } from './shared/components/order-review/order-review.component';
import { UploadComponent } from './shared/components/upload/upload.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
  { path: 'order', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'carts', loadChildren: () => import('./carts/carts.module').then(m => m.CartsModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
 
 { path: 'upload', component: UploadComponent },
  { path: 'review', component: OrderReviewComponent },

  // Default route
  { path: '', redirectTo: 'upload', pathMatch: 'full' },
  // Default route
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
