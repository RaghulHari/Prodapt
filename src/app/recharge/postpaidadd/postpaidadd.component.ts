import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-postpaidadd',
  templateUrl: './postpaidadd.component.html',
  styleUrls: ['./postpaidadd.component.css']
})
export class PostpaidaddComponent implements OnInit {
  user=new User;
  use=new User;
  users=new User;
  id:number;
  id1:number;
  id2:number;
  em:String;
  msg="";
  mes="";


  constructor(private _service:RegistrationService,private _data:DataService,private _router : Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id= this._activatedRoute.snapshot.paramMap.get('id');
    this.mes=id;
    this.getUser();
  }
  gotoview(){
    this._router.navigate(['/viewuser',this.mes])
  }
  getUser(){
    this._service.getByIdFromRemote(this.mes).subscribe(
      data=>this.use=data
    )
  }
gotoplan(plan:string){
  this._router.navigate(['/payment',plan])
}
gotomain(){
  this._router.navigate(['/main'])
}
gotoserv(id:string){
  this._router.navigate(['/serv',id])
}

}
