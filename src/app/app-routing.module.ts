import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ProductsComponent} from './products/products.component';
import {ContactComponent} from './contact/contact.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {PortfolioPlantComponent} from './portfolio-plant/portfolio-plant.component';
import {BerryNurseryComponent} from './berry-nursery/berry-nursery.component';
import {LoginComponent} from './berry-nursery/login/login.component';
import {RegisterComponent} from './berry-nursery/register/register.component';
import {ForgotPasswordComponent} from './berry-nursery/forgot-password/forgot-password.component';
import {VerifyEmailComponent} from './berry-nursery/verify-email/verify-email.component';
import {BerryAboutComponent} from './berry-nursery/berry-about/berry-about.component';
import {BerryContactComponent} from './berry-nursery/berry-contact/berry-contact.component';
import {CatalogComponent} from './berry-nursery/catalog/catalog.component';
import {MyAccountComponent} from './berry-nursery/my-account/my-account.component';
import {SettingsComponent} from './berry-nursery/settings/settings.component';
import {NewOrderComponent} from './berry-nursery/new-order/new-order.component';
import {ViewOrdersComponent} from './berry-nursery/view-orders/view-orders.component';
import {AdminGuard} from './berry-nursery/admin.guard';
import {BerryHomeComponent} from './berry-nursery/berry-home/berry-home.component';



const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'portfolio_plants',
    component: PortfolioPlantComponent
  },
  {
    path: 'berry-nursery',
    component: BerryNurseryComponent,
    children: [
      { path:  'berry-home', component:  BerryHomeComponent},
      { path:  'login', component:  LoginComponent},
      { path:  'register', component:  RegisterComponent },
      { path:  'forgot-password', component:  ForgotPasswordComponent },
      { path:  'verify-email', component:  VerifyEmailComponent },
      { path:  'about', component:  BerryAboutComponent },
      { path:  'berry-contact', component:  BerryContactComponent },
      { path:  'catalog', component:  CatalogComponent },
      { path:  'my-account', component:  MyAccountComponent, canActivate: [AdminGuard] },
      { path:  'settings', component:  SettingsComponent, canActivate: [AdminGuard] },
      { path:  'new-order', component:  NewOrderComponent, canActivate: [AdminGuard] },
      { path:  'view-orders', component:  ViewOrdersComponent, canActivate: [AdminGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
