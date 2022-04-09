import { Component, OnInit } from '@angular/core';
import { InfoPersonalService } from 'src/app/servicios/info-personal.service';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.css']
})
export class InfoPersonalComponent implements OnInit {
  persona:any;
  constructor(private miServicio:InfoPersonalService) { }

  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona().subscribe(data_personal =>{
      console.log(data_personal);
      this.persona=data_personal["persona"];
    })
  }

}
