import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionComponent } from './session/session.component';
import { RouterModule,Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AlarmComponent } from './alarm/alarm.component';



const routes: Routes = [




{
path :'register',
component : RegisterComponent
},

{
path :'login',
component : SessionComponent
}





]



@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
