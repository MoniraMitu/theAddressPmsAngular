import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/Properties';

  getAllProperty(){
  return this.http.get(this.url);
  }

  add (adding:any){
    return this.http.post(this.url, adding);
   }

   deleteProperty(id: any){
    return this.http.delete(this.url + '/' + id);
  }

  updateProperty(fo:any, id:any){
    return this.http.put(this.url + "/" + id, fo)
    }
   

uri='http://localhost:3000/Bookings';

getAll(){
  return this.http.get(this.uri);
  }

  adding (adding:any){
    return this.http.post(this.uri, adding);
   }

   delete(id: any){
    return this.http.delete(this.uri + '/' + id);
  }

  update(fo:any, id:any){
    return this.http.put(this.uri + "/" + id, fo)
    }
}
