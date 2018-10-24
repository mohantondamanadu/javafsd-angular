import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: Object;

  constructor(private registerService : RegisterService) { }

  ngOnInit() {
  }

  registerUser(){
    console.log(this.user);
    alert(" register user clicked");
    this.registerService.registerUser(this.user).subscribe(res => {
      
       alert("User Registered Successfully.....");
     });
  }

}
