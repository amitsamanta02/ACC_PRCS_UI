import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import { OrderHomeComponent } from './order-home/order-home.component';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MultiSelectModule} from 'primeng/multiselect';
import {ButtonModule} from 'primeng/button';
import {ProgressBarModule} from 'primeng/progressbar';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {SplitButtonModule} from 'primeng/splitbutton';
import { CustomerComponent } from './customer/customer.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {TabViewModule} from 'primeng/tabview';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AccregistrationComponent } from './accregistration/accregistration.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    OrderHomeComponent,
    CustomerComponent,
    AccregistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StepsModule,
    TabMenuModule,
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    ButtonModule,
    ProgressBarModule,
    HttpClientModule,
    TableModule,
    SplitButtonModule,
    AutoCompleteModule,
    TabViewModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
