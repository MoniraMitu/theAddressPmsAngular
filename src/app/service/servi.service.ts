import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/api/properties';

  getAllProperty(page: any){
  return this.http.get(this.url+ '/' +"approved?page="+page);
  }

  getAllUnApprovedProperty(){
    return this.http.get(this.url+ '/' +"unApproved");
    }

  getPropertyById(id:any){
    return this.http.get(this.url + '/'+id);
    }

  add (adding:any){
    return this.http.post(this.url, adding);
   }

   deleteProperty(id: any){
    return this.http.delete(this.url + '/' + id);
  }

  updateProperty(fo:any, id:any){
    console.log('Foooooooooooo',fo);
    
    return this.http.put(this.url , fo);
    }
   

uri='http://localhost:8080/api/bookings/';

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
    return this.http.put(this.uri , fo)
    }

    getPropertyBySearch(area: string, category: string, type: string){
      return this.http.get('http://localhost:8080/api/propertiesBySearch'+ '/'+ area+ '/'+ category + "/" + type);
    }


    getPropertyBySearchByArea(area: string, category: string, type: string){
      return this.http.get('http://localhost:8080/api/propertiesBySearchByArea'+ '/'+ area);
    }


    urs='http://localhost:8080/api/signUps/';

getAllSignUp(){
  return this.http.get(this.urs);
  }

  addingSignUp (addingSignUp:any){
    return this.http.post(this.urs, addingSignUp);
   }

   deleteSignUp(id: any){
    return this.http.delete(this.urs + '/' + id);
  }

  updateSignUp(fo:any, id:any){
    return this.http.put(this.urs , fo)
    }

    getSignUpsById(id:any){
      return this.http.get(this.urs + '/'+id);
      }
}
