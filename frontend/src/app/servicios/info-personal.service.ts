import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { info_personal } from '../entidades/info_personal';

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

    editarInfoPersonal(info_personal:info_personal):Observable<any>{
      return this.http.post('http://localhost:3000/posts',info_personal);
    }

}
