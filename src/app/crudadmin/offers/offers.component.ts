import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { offers } from 'src/app/offers';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  off = new offers();
  msg="";
  // off:any;
  constructor(private _service:RegistrationService,private _data:DataService,private _router : Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  gotoadd()
  {
    this._router.navigate(['/plan'])
  }
  gotomain()
  {

  }

}
