import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CheckoutComponent, ConfirmComponent,AuthComponent],
  exports: [CheckoutComponent, ConfirmComponent,AuthComponent],
})
export class PaymentModule {}
