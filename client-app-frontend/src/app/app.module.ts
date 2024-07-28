import { Client, ClientService } from './Services/client.service';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './Pages/home/home.component';
import { SidePanalComponent } from './Components/side-panal/side-panal.component';
import { DetailsViewComponent } from './Components/details-view/details-view.component';
import { PopupFormComponent } from './Components/popup-form/popup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateFormComponent } from './Components/update-form/update-form.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './Pages/welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidePanalComponent,
    DetailsViewComponent,
    PopupFormComponent,
    UpdateFormComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    ClientService,
    provideClientHydration(),
    provideAnimationsAsync(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
