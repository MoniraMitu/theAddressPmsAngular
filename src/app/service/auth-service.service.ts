import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }


  USER_KEY = 'user_key';

  saveUser(data: any): void {
    sessionStorage.removeItem(this.USER_KEY);
    sessionStorage.setItem(this.USER_KEY, JSON.stringify(data));
  }
  getUser() {
    return sessionStorage.getItem(this.USER_KEY);
  }

  getUseriid() {
    const userData = sessionStorage.getItem(this.USER_KEY);
    if (userData) {
      const parsedData = JSON.parse(userData);
      return parsedData.id;
    }
    return null; // or any other default value you prefer
  }
  
  getUserId() {
    const data = sessionStorage.getItem(this.USER_KEY);
    if (data) {
      return JSON.parse(data).id;
    } else {
      // handle case where data is null
      return null;
    }
  }
}
