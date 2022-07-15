import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderProductComponent } from './order-product/order-product.component';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  { path: '', component: PrivateComponent, children: [
    { path: 'order-products', component: OrderProductComponent},
    { path: '**', redirectTo: 'order-products', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
