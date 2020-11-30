import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './main/main.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CruduserComponent } from './cruduser/cruduser.component';
import { CrudadminComponent } from './crudadmin/crudadmin.component';
import { UpdateprofileComponent } from './cruduser/updateprofile/updateprofile.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ServicemainComponent } from './servicemain/servicemain.component';
import { NameheadComponent } from './namehead/namehead.component';
import { ViewuserComponent } from './cruduser/viewuser/viewuser.component';
import { ForgetComponent } from './cruduser/forget/forget.component';
import { UserdataComponent } from './crudadmin/userdata/userdata.component';
import { UpdateuseradminComponent } from './crudadmin/updateuseradmin/updateuseradmin.component';
import { ServComponent } from './serv/serv.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PostpaidComponent } from './serv/postpaid/postpaid.component';
import { PrepaidComponent } from './serv/prepaid/prepaid.component';
import { DongleComponent } from './serv/dongle/dongle.component';
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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,

    MainComponent,

     AdminloginComponent,

    CruduserComponent,

    CrudadminComponent,

    UpdateprofileComponent,

    HeaderComponent,

    ContactComponent,

    ServicemainComponent,

    NameheadComponent,

    ViewuserComponent,

    ForgetComponent,

    UserdataComponent,

    UpdateuseradminComponent,

    ServComponent,

    AboutusComponent,

    PostpaidComponent,

    PrepaidComponent,

    DongleComponent,

    PaymentComponent,

    ForgotadminComponent,

    ManageComponent,

    RechargeComponent,

    ChatComponent,

    DongleaddComponent,

    PrepaidaddComponent,

    PostpaidaddComponent,

    BillComponent,

    OffersComponent,

    PlanComponent

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
