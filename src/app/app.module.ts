import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
<<<<<<< HEAD
import { SharedModule } from 'src/app/shared/shared.module';

=======
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ProductsModule } from './products/products.module';
>>>>>>> 6a32f3265dc42175cac77cad295b2efaf1cb4065

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
