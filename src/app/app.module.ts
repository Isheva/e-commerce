import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DressesComponent } from './components/items/dresses/dresses.component';
import { CostumesComponent } from './components/items/costumes/costumes.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccountsService } from './services/accounts.service';
import { SelectionComponent } from './components/selection/selection.component';
import { ProductsMenComponent } from './components/products-men/products-men.component';
import { SuitsComponent } from './components/items/suits/suits.component';
import { HoodiesComponent } from './components/items/hoodies/hoodies.component';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { ImageCropperModule } from 'ngx-image-cropper';
import { LoginService } from './services/login.service';
import { ShirtsComponent } from './components/items/shirts/shirts.component';
import { KnitwearsComponent } from './components/items/knitwears/knitwears.component';
import { AccessoriesComponent } from './components/items/accessories/accessories.component';
import { SkirtsComponent } from './components/items/skirts/skirts.component';
import { BlazersComponent } from './components/items/blazers/blazers.component';
import { WomensAccessoriesComponent } from './components/items/womens-accessories/womens-accessories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';


const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products-men', component: ProductsMenComponent},
  {path: 'dresses', component: DressesComponent},
  {path: 'costumes', component: CostumesComponent},
  {path: 'cart', component: CartComponent},
  {path: 'selection', component: SelectionComponent},
  {path: 'profile', component: MyProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    HomePageComponent,
    DressesComponent,
    CostumesComponent,
    CartComponent,
    CartItemComponent,
    SelectionComponent,
    ProductsMenComponent,
    SuitsComponent,
    HoodiesComponent,
    CustomerInfoComponent,
    MyProfileComponent,
    ShirtsComponent,
    KnitwearsComponent,
    AccessoriesComponent,
    SkirtsComponent,
    BlazersComponent,
    WomensAccessoriesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true, anchorScrolling: 'enabled'}),
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    AngularFileUploaderModule,
    ImageCropperModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [AccountsService, ProductsComponent, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
