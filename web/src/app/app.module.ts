import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './_servicios/login.service';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { NivelComponent } from './nivel/nivel.component';
import { UnidadComponent } from './unidad/unidad.component';
import { VisorComponent } from './visor/visor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NivelComponent,
    UnidadComponent,
    VisorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
