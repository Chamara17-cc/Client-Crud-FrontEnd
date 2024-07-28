import { SidePanalComponent } from './Components/side-panal/side-panal.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { DetailsViewComponent } from './Components/details-view/details-view.component';

const routes: Routes = [
  {path: 'Home', component:HomeComponent,
      children: [
        { path: 'details/:id', component: DetailsViewComponent}
      ]

},
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
