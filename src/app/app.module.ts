import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
// import { AuthButtonComponent } from './components/autbutton/autbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent,
    // AuthButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'khalaharia.eu.auth0.com',
      clientId: 'PRXmteWEIXwKz4fXSlOtveB9W8xleSwE',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
