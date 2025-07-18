import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllMedicineComponent } from './components/Medicine/all-medicine/all-medicine.component';
import { BuyAgainComponent } from './components/Medicine/buy-again/buy-again.component';
import { OrderOnlineComponent } from './components/Medicine/order-online/order-online.component';
import { AyushComponent } from './components/Wellness/ayush/ayush.component';
import { DiabetesSupportComponent } from './components/Wellness/diabetes-support/diabetes-support.component';
import { HealthConditionComponent } from './components/Wellness/health-condition/health-condition.component';
import { PersonalCareComponent } from './components/Wellness/personal-care/personal-care.component';
import { FragranceComponent } from './components/Beauty/fragrance/fragrance.component';
import { MakeUpComponent } from './components/Beauty/make-up/make-up.component';
import { SkinCareComponent } from './components/Beauty/skin-care/skin-care.component';
import { HealthLibraryComponent } from './components/Health-Center/health-library/health-library.component';
import { CancerComponent } from './components/Health-Center/cancer/cancer.component';
import { CoronaAwarenessComponent } from './components/Health-Center/corona-awareness/corona-awareness.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AllMedicineComponent,
    BuyAgainComponent,
    OrderOnlineComponent,
    AyushComponent,
    DiabetesSupportComponent,
    HealthConditionComponent,
    PersonalCareComponent,
    FragranceComponent,
    MakeUpComponent,
    SkinCareComponent,
    HealthLibraryComponent,
    CancerComponent,
    CoronaAwarenessComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class SharedModule { }
