import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion:any;
  constructor(private servicioEducacion:EducacionService) { }

  ngOnInit(): void {
    this.servicioEducacion.obtenerDatosEducacion().subscribe(data_educacion =>{
      console.log(data_educacion);
      this.educacion=data_educacion["educacion"];
    });
  }

}
