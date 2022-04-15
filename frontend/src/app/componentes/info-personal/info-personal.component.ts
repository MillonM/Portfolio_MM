import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { info_personal} from 'src/app/entidades/info_personal';
import { InfoPersonalService } from 'src/app/servicios/info-personal.service';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.css']
})
export class InfoPersonalComponent implements OnInit {
  info_personal:any;
  usuarioAutenticado:boolean=true;
  form:FormGroup;
  constructor(private ServicioInfo_personal:InfoPersonalService,private miFormBuilder:FormBuilder) {
    this.form=this.miFormBuilder.group({
      front_end:['', [Validators.required, Validators.maxLength(100)]],
      data_science:['', [Validators.required,]],
      google_cloud_platforms:['', [Validators.required,]],
      parrafo_presentacion:['', [Validators.required,]],
    })
   }

   get front_end(){
      return this.form.get("front_end");     
   }
   

  ngOnInit(): void {
    this.ServicioInfo_personal.obtenerDatosPersona().subscribe(data_personal =>{
      console.log(data_personal);
      this. info_personal =data_personal["info_personal"];
    })  
  }

  guardarInfoPersonal(){
    if (this.form.valid){

      let front_end=this.form.get("front_end")?.value;
      let data_science=this.form.get("data_science")?.value;
      let google_cloud_platforms=this.form.get("google_cloud_platforms")?.value;
      let parrafo_presentacion=this.form.get("parrafo_presentacion")?.value;

      let info_personalEditar = new info_personal(front_end,data_science,google_cloud_platforms,parrafo_presentacion);
      this.ServicioInfo_personal.editarInfoPersonal(info_personalEditar).subscribe({
          next: (data) => {
            this.form.reset();
            document.getElementById("cerrar_modalInfoPersonal")?.click();
            this.info_personal=info_personalEditar;
          },
          error: (error) => {
            alert ("Ouch! No se pudieron actualizar los datos. ¡Por favor volvé a intentar!");
          },
      })
    }
    else{
        alert("hay errores");
        this.form.markAllAsTouched();        
        }
  }

  mostrarInfoPersonalActual(){
    this.form.get("front_end")?.setValue(this.info_personal.front_end);
    this.form.get("data_science")?.setValue(this.info_personal.data_science);
    this.form.get("google_cloud_platforms")?.setValue(this.info_personal.google_cloud_platforms);
    this.form.get("parrafo_presentacion")?.setValue(this.info_personal.parrafo_presentacion);
  }

}
