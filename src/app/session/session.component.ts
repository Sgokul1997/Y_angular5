import { Component, OnInit } from '@angular/core';
//import { SessionComponent } from './session.component';
import { SessionService } from './session.service';

import { Router,Routes,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

login: any = {};

  constructor(private logins: SessionService,private router: Router) { }

  ngOnInit() {
  }

save(){
this.logins.authenticate(this.login).subscribe(res =>
{
	//console.log('response' res.message );
 if(res.message == 'Login Successful'){
 this.router.navigate(['register']);
 }
});

alert('haii');



}




}
