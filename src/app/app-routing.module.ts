import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinlistComponent} from './pinlist/pinlist.component';

const routes: Routes = [
  {path:'', component: PinlistComponent},
  {path:'newpins', component: PinlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
