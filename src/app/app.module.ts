
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SessionComponent } from './session/session.component';
import { SessionService  } from './session/session.service';
import { RegisterService  } from './register/register.service';
import { RegisterComponent } from './register/register.component';
import { AlarmComponent } from './alarm/alarm.component';
import { AlarmService } from './alarm/alarm.service';

@NgModule({
  declarations: [
    AppComponent,
    SessionComponent,
    RegisterComponent,
    AlarmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    
  ],

  providers: [

  SessionService,
  RegisterService,
  AlarmService,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
