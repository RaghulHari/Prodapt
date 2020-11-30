import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Services } from '../services';
import { Subject } from 'rxjs';
import { User } from '../user';
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  user=new User;
  use=new User;
  usek=new User;
  id:number;
  id1:number;
  id2:number;
  em:String;
  msg="";
  mes="";
servs =  new Services;
dtTrigger: Subject<any>= new Subject();  
  constructor(private _service:RegistrationService,private _router : Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id= this._activatedRoute.snapshot.paramMap.get('id');
      this.mes=id;
      this.getUser();
    let resp = this._service.getservByEmailFromRemote(this.mes);
    resp.subscribe((data)=>this.servs=data);
   this._service.getUsersFromRemote().subscribe(
     data=>{this.servs=data;
      console.log("response occured");
      this.dtTrigger.next();
    },
    error=>{console.log("exception occured");
    this.msg="some error occured";}
   )
  }
  getUser(){
    this._service.getByIdFromRemote(this.mes).subscribe(
      data=>this.use=data
    )
  }
  gotomain(){
    this._router.navigate(['/main'])
  }
}
