import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ProfileLoginComponent } from './profile-login/profile-login.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'services', component : ServicesComponent },
  { path : 'gallery', component : GalleryComponent },
  { path : 'contact', component : ContactComponent },
  { path : 'profile', component : ProfileLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
}
