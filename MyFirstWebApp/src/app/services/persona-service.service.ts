import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {
// Define API
apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch Personas list
  getPersonas(): Observable<Persona> {
    return this.http.get<Persona>(this.apiURL + '/Personas')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch Persona
  getPersona(id): Observable<Persona> {
    return this.http.get<Persona>(this.apiURL + '/Personas/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create Persona
  createPersona(Persona): Observable<Persona> {
    return this.http.post<Persona>(this.apiURL + '/Personas', JSON.stringify(Persona), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update Persona
  updatePersona(id, Persona): Observable<Persona> {
    return this.http.put<Persona>(this.apiURL + '/Personas/' + id, JSON.stringify(Persona), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete Persona
  deletePersona(id){
    return this.http.delete<Persona>(this.apiURL + '/Personas/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }
}
