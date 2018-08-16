import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductComponent } from './product/product.component';
import {RouterModule,Routes} from '@angular/router'
// import {Data} from './data'
const routes:Routes=[
  {
    path:'',
    component:AppComponent
    },
  {
  path:'mainpage',
  component:MainpageComponent
},
{
  path:'product',
  component:ProductComponent
}


// },
// {
//   path:'**',
//   component:PageNotFoundComponent
// }

]

@NgModule({
  declarations: [
    // Data,
    AppComponent,
    HeaderComponent,
    MainpageComponent,
    CartComponent,
    CheckoutComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
