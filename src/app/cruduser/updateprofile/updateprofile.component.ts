import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
 mes:string;
  use=new User;
  user=new User;

 id:number;
 id1:number;
// id2:string;
 msg="";

 
  constructor(private _service:RegistrationService,private _data:DataService,private _router : Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    //  let id= this._activatedRoute.snapshot.paramMap.get('id');
    //  this.mes=id;
    //  this.getUser();
    
  }
  gotoview(){
    this._router.navigate(['/viewuser',this.mes])
  }
  gotomanage(id:string){
    this._router.navigate(['/manage',id])
  }

    upUser(id2:string,pas:string){
      
      this._service.updateUserPasswordFromRemote(id2,pas).subscribe(
        data=>{console.log("response received");
      this.msg="response received";
      },
        error=>{console.log("exception occured");
        this.msg="some error occured";},
      )
      }
      getUser(){
        this._service.getByIdFromRemote(this.mes).subscribe(
          data=>this.use=data
        )
      }
     
      
    
}
