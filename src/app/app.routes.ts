import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component'; // Import the HomeComponent
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ProduitComponent } from './produit/produit.component';
import { DevisComponent } from './devis/devis.component';


export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' }, // Redirect to home as default
  { path: 'home', component: HomeComponent }, // Render HomeComponent on /home
  { path: 'contact', component: ContactComponent }, // Route for Contact
  { path: 'produit', component: ProduitComponent } ,
  { path: 'devis', component: DevisComponent } ,
  { path: 'about', component: AboutComponent } ,
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }