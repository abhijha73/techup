import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getData(url: string, options?: any) {
    return this.http.get(url, options).pipe();
  }
  postData(url: string, body: any, header?: any) {
    if (header) {
      return this.http.post(url, body, header).pipe(
        tap(
          (data) => {
            data;
          },
          (errorData) => {
            console.error(errorData);
          }
        )
      );
    } else {
      return this.http.post(url, body).pipe(
        tap(
          (data) => {},
          (errorData) => {
            console.error(errorData);
            if (errorData.error && errorData.error.stacktrace) {
              // this.snackBar.open(errorData.error.stacktrace.detail,undefined,{duration:3000})
            } else if (errorData.status !== 0) {
              // this.snackBar.open("An error occurred. Please try again.",undefined,{duration:3000})
            }
          }
        )
      );
    }
  }
  putData(url: string, body: any) {
    return this.http.put(url, body);
  }
  deleteData(url: string, body: any) {
    return this.http.delete(url, body);
  }
}
