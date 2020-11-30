import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ContactComponent } from './contact/contact.component';
import { CrudadminComponent } from './crudadmin/crudadmin.component';
import { CruduserComponent } from './cruduser/cruduser.component';
import { UpdateprofileComponent } from './cruduser/updateprofile/updateprofile.component';
import { ViewuserComponent } from './cruduser/viewuser/viewuser.component';
import { ForgetComponent } from './cruduser/forget/forget.component';

import { LoginComponent } from './login/login.component';

import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './registration/registration.component';
import { User } from './user';
import { UserdataComponent } from './crudadmin/userdata/userdata.component';
import { UpdateuseradminComponent } from './crudadmin/updateuseradmin/updateuseradmin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServComponent } from './serv/serv.component';
import { DongleComponent } from './serv/dongle/dongle.component';
import { PostpaidComponent } from './serv/postpaid/postpaid.component';
import { PrepaidComponent } from './serv/prepaid/prepaid.component';
import { PaymentComponent } from './serv/payment/payment.component';
import { ForgotadminComponent } from './adminlogin/forgotadmin/forgotadmin.component';
import { ManageComponent } from './manage/manage.component';
import { RechargeComponent } from './recharge/recharge.component';
import { ChatComponent } from './chat/chat.component';
import { DongleaddComponent } from './recharge/dongleadd/dongleadd.component';
import { PrepaidaddComponent } from './recharge/prepaidadd/prepaidadd.component';
import { PostpaidaddComponent } from './recharge/postpaidadd/postpaidadd.component';
import { BillComponent } from './bill/bill.component';
import { OffersComponent } from './crudadmin/offers/offers.component';
import { PlanComponent } from './plan/plan.component';



const routes: Routes = [
  {
    path:'',component:MainComponent
  },
  {
    path:'login',component:LoginComponent
  },
  
  {
    path:'registration',component:RegistrationComponent
  },
  {
    path:'main',component:MainComponent
  },
  {
    path:'adminlogin',component:AdminloginComponent
  },
  {
    path:'cruduser/:id' , component:CruduserComponent
  },
  {
    path:'cruduser' , component:CruduserComponent
  },
  {
    path:'crudadmin/:id' , component:CrudadminComponent 
  },
  {
    path:'userdata' , component:UserdataComponent
  },
  {
    path:'crudadmin' , component:CrudadminComponent 
  },
  {
    path:'updateprofile/:id' , component:UpdateprofileComponent
  },
  {
    path:'updateprofile' , component:UpdateprofileComponent
  },
  {
    path:'contact' , component:ContactComponent
  },
  {
    path:'serv' , component:ServComponent
  },
  {
    path:'viewuser/:id' , component:ViewuserComponent
  },
  {
    path:'viewuser' , component:ViewuserComponent
  },
  {
    path:'aboutus' , component:AboutusComponent
  },
  {
    path:'forget/:id' , component:ForgetComponent
  },
  {
    path:'forget' , component:ForgetComponent
  },
  {
    path:'updateuseradmin' , component:UpdateuseradminComponent
  },
  {
    path:'updateuseradmin/:id' , component:UpdateuseradminComponent
  },
  {
    path:'serv/:id' , component:ServComponent
  },
  {
    path:'dongle' , component:DongleComponent
  },
  {
    path:'postpaid' , component:PostpaidComponent
  },
  {
    path:'prepaid' , component:PrepaidComponent
  },
  {
    path:'payment' , component:PaymentComponent
  },
  {
    path:'payment/:id' , component:PaymentComponent
  },
  {
    path:'dongle/:id' , component:DongleComponent
  },
  {
    path:'postpaid/:id' , component:PostpaidComponent
  },
  {
    path:'prepaid/:id' , component:PrepaidComponent
  },
  {
    path:'forgotadmin' , component:ForgotadminComponent
  },
  {
    path:'manage' , component:ManageComponent
  },
  {
    path:'manage/:id' , component:ManageComponent
  },
  {
    path:'recharge' ,component:RechargeComponent
  },
  {
    path:'chat' ,component:ChatComponent
  },
  {
    path:'dongleadd' ,component:DongleaddComponent
  },
  {
    path:'prepaidadd' ,component:PrepaidaddComponent
  },
  {
    path:'postpaidadd' ,component:PostpaidaddComponent
  },
  {
    path:'chat',component:ChatComponent
  },
  {
    path:'bill',component:BillComponent
  },
  {
    path:'offers',component:OffersComponent
  },
  {
    path:'plan',component:PlanComponent
  }
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
