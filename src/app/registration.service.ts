import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import{HttpClient} from '@angular/common/http';
import { Admin } from './admin';
import { Services } from './services';
import { offers } from './offers';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  
  constructor( private _http:HttpClient) { }
  

  

 

  public loginUserFromRemote(user:User):Observable<any>{
return this._http.post<any>("http://localhost:4322/login", user)
  }
  public loginAdminFromRemote(admin:Admin):Observable<any>{
    return this._http.post<any>("http://localhost:4322/loginadmin", admin)
      }

  public registerUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:4322/registeruser", user)
      }
      public payFromRemote(serv:Services):Observable<any>{
        return this._http.post<any>("http://localhost:4322/pay", serv)
          }

      public deleteUserFromRemote(id:number):Observable<any>{
        return this._http.delete<any>("http://localhost:4322/removeuser/"+id)
          }

          public updateUserFromRemote(id2:number,user:User):Observable<any>{
            return this._http.put<any>("http://localhost:4322/update/"+id2, user)
              }
              public updateUserProfFromRemote(id3:number,user:User):Observable<any>{
                return this._http.put<any>("http://localhost:4322/updateprofile/"+id3, user)
                  }
                  public updateUserPasswordFromRemote(id4:string,pass:string):Observable<any>{
                    return this._http.put<any>("http://localhost:4322/updatepassword/"+id4, pass)
                      }
                      public updateAdminPasswordFromRemote(id5:string,pass1:string):Observable<any>{
                        return this._http.put<any>("http://localhost:4322/updateadminpassword/"+id5, pass1)
                          }
              public getByIdFromRemote(em:String):Observable<any>{
                return this._http.get<any>("http://localhost:4322/users/"+em)
                  }

                  public getUsersFromRemote():Observable<any>{
                    return this._http.get<any>("http://localhost:4322/users")
                      }
                      public getservByEmailFromRemote(em1:string):Observable<any>{
                        return this._http.get<any>("http://localhost:4322/serusers")
                          }
                          public plansFromRemote(off:offers):Observable<any>{
                            return this._http.post<any>("http://localhost:4322/plan", offers)
                              }
    
}
