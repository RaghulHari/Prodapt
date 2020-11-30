import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { RegistrationService } from 'src/app/registration.service';
import { Services } from 'src/app/services';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
plan:string
services= new Services;
msg="";
  constructor(private _service:RegistrationService,private _data:DataService,private _router : Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id= this._activatedRoute.snapshot.paramMap.get('id');
    this.plan=id;
  }
  gotomain(){
    this._router.navigate(['/main'])
  }
paynow(){
  this._service.payFromRemote( this.services).subscribe(
    data=>{console.log("response received");
  this.msg="Payment Successful";
  }
  ,
  error=>{console.log("exception occured");
  this.msg="Error";},

  )
}
}
