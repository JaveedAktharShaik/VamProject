import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JavacompComponent } from '../javacomp/javacomp.component';
import { WebcompComponent } from '../webcomp/webcomp.component';
const routes:Routes = [
  {path:'web', component:WebcompComponent},
  {path:'java', component:JavacompComponent }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class TechRoutingModule { }
export const routingComponents = [WebcompComponent,JavacompComponent]
