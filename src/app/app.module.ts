import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';

import { MenuComponent } from './components/menu/menu.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProductService } from './services/product/product.service';
import { UserService } from './services/user/user.service';
import { AlluserService } from './services/alluser.service';
import { OrdersService } from './services/orders/orders.service';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { MainComponent } from './admin/main/main.component';
import { UserAdminComponent } from './admin/user-admin/user-admin.component';
import { OrderAdminComponent } from './admin/order-admin/order-admin.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AddStoreComponent } from './admin/add-store/add-store.component';
import { UpdateStoreComponent } from './admin/update-store/update-store.component';
import { StoresComponent } from './admin/stores/stores.component';
import { DisplayStoresComponent } from './components/display-stores/display-stores.component';
import { ReversePipe } from '../app/pipe/reverse.pipe';
import { UpdateUserProfileComponent } from './components/update-user-profile/update-user-profile.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MenuComponent,
    UserProfileComponent,
    RegisterComponent,
    HomeComponent,
    ContactComponent,
    CheckoutComponent,
    CartComponent,
    MainComponent,
    UserAdminComponent,
    OrderAdminComponent,
    AdminComponent,
    StoresComponent,
    AddStoreComponent,
    UpdateStoreComponent,
    DisplayStoresComponent,
    ReversePipe,
    UpdateUserProfileComponent,
    ThankyouComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  entryComponents: [StoresComponent],
  providers: [HttpClient, ProductService, UserService, OrdersService, AlluserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
