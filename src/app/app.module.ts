import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CardComponent } from './card/card.component';
import { PortfolioPlantComponent } from './portfolio-plant/portfolio-plant.component';
import { ModalComponent } from './modal/modal.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AllYearModalComponent } from './custom-modals/all-year-modal/all-year-modal.component';
import { CactusProductModalComponent } from './custom-modals/cactus-product-modal/cactus-product-modal.component';
import { PortfolioPlantStoreComponent } from './portfolio-plant/portfolio-plant-store/portfolio-plant-store.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { BerryNurseryComponent } from './berry-nursery/berry-nursery.component';
import { LoginComponent } from './berry-nursery/login/login.component';
import { RegisterComponent } from './berry-nursery/register/register.component';
import { ForgotPasswordComponent } from './berry-nursery/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './berry-nursery/verify-email/verify-email.component';
import { BerryHomeComponent } from './berry-nursery/berry-home/berry-home.component';
import { MyAccountComponent } from './berry-nursery/my-account/my-account.component';
import { NewOrderComponent } from './berry-nursery/new-order/new-order.component';
import { ViewOrdersComponent } from './berry-nursery/view-orders/view-orders.component';
import { CatalogComponent } from './berry-nursery/catalog/catalog.component';
import { SettingsComponent } from './berry-nursery/settings/settings.component';
import { BerryAboutComponent } from './berry-nursery/berry-about/berry-about.component';
import { BerryContactComponent } from './berry-nursery/berry-contact/berry-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BerryHeaderComponent } from './berry-nursery/berry-header/berry-header.component';
import { RegisterDirective } from './berry-nursery/register/register.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    PortfolioComponent,
    CardComponent,
    PortfolioPlantComponent,
    ModalComponent,
    ModalContentComponent,
    AllYearModalComponent,
    CactusProductModalComponent,
    PortfolioPlantStoreComponent,
    BerryHomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    BerryNurseryComponent,
    MyAccountComponent,
    NewOrderComponent,
    ViewOrdersComponent,
    CatalogComponent,
    SettingsComponent,
    BerryAboutComponent,
    BerryContactComponent,
    BerryHeaderComponent,
    RegisterDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AllYearModalComponent,
    CactusProductModalComponent
  ],
  providers: [AngularFireModule, AngularFirestoreModule, AngularFireAuthModule, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
