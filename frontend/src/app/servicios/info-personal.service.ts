import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoPersonalService {

  constructor(private http:HttpClient) { 
    console.log("el servicio info-personal esta corriendo");
  }

  obtenerDatosPersona():Observable<any>{
    return this.http.get('assets/data/persona.json');
    }
}
