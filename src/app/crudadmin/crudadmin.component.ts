import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { RegistrationService } from '../registration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-crudadmin',
  templateUrl: './crudadmin.component.html',
  styleUrls: ['./crudadmin.component.css']
})
export class CrudadminComponent implements OnInit {
  user=new User;
  use=new User;
  id:number;
  id1:number;
  id2:number;
  em:String;
  msg="";
  mes="";
  constructor(private _service:RegistrationService,private _router : Router,private _activatedRoute:ActivatedRoute) { }
  users:any;
  ngOnInit(): void {
    let id= this._activatedRoute.snapshot.paramMap.get('id');
    this.mes=id;
    this.getUser();
  }
  delUser(){
    this._service.deleteUserFromRemote(this.id).subscribe(
      data=>{console.log("response received");
    this.msg="response received";
    },
      error=>{console.log("exception occured");
      this.msg="some error occured";},
    )
    }
    gotoregister(){
      this._router.navigate(['/registration'])
    }
    upUser(){
      
      this._service.updateUserFromRemote(this.id1,this.user).subscribe(
        data=>{console.log("response received");
      this.msg="response received";
      },
        error=>{console.log("exception occured");
        this.msg="some error occured";},
      )
      }
      gotouserdata(){
        this._router.navigate(['/userdata'])
      }
      gotomodify(){
        this._router.navigate(['/updateprofile',this.mes])
      }
      gotoview(){
        this._router.navigate(['/viewuser',this.mes])
      }
      gotomain(){
        this._router.navigate(['/main'])
      }
      gotochat()
      {
        this._router.navigate(['/chat'])
      }
      gotooffers()
      {
        this._router.navigate(['/offers'])
      }
    
  
      getUser(){
        this._service.getByIdFromRemote(this.em).subscribe(
          data=>this.use=data
        )
      }
      getAll(){
        let resp = this._service.getUsersFromRemote();
    resp.subscribe((data)=>this.users=data);        
      }
}
