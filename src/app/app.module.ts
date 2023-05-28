import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { PaymentModule } from './payment/payment.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [CommonModule, BrowserModule, PaymentModule,FormsModule],
  declarations: [LoginComponent],
  bootstrap: [LoginComponent],
})
export class AppModule {}
