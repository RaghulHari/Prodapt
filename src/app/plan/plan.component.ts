import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { offers } from '../offers';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  plan;
  off:any;

  msg="";

  constructor( private _service:RegistrationService,private _router:Router) { }

  ngOnInit(): void {
    this.plan=new FormGroup({
      offers:new FormControl("",Validators.compose(
        [
          Validators.required
         
        ]
      )),
      data:new FormControl("",Validators.compose(
        [
          Validators.required
         
        ]
      )),
      calls:new FormControl("",Validators.compose(
        [
          Validators.required
         
        ]
      ))
      
      
    });
    
  }
  plans(obj)
  {
    console.log("ReactiveForms Module");
    console.log(obj);
    this._service.plansFromRemote( this.off).subscribe(
      data=>{console.log("response received");
    this.msg="offer created  Successful";
    }
    ,
    error=>{console.log("exception occured");
    this.msg="Error";},
  
    )

  }

}
