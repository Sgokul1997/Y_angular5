import { Component, OnInit } from '@angular/core';
import { RegisterService  } from './register.service';
//import { RegisterComponent } from './register.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  tenant: any = {};
  user : any = [];

  
  constructor() { }

  ngOnInit() {
 // this.tenant={tentant:{tan }}
  }



register(){
//console.log(this.user);

this.tenant.user = this.user
console.log(this.tenant);
}
}
