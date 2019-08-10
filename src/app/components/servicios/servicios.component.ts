import { Component } from '@angular/core';

// Interfaces
import { Servicio } from 'src/app/interfaces/servicio';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styles: []
})
export class ServiciosComponent {

  servicios: Servicio[] = [
    {
      icono: 'calendar-check-o',
      texto: 'Contabilidad<br>de tus facturas',
      delay: '0s',
    },
    {
      icono: 'university',
      texto: 'Presentación de<br>modelos a Hacienda y SS',
      delay: '.25s',
    },
    {
      icono: 'balance-scale',
      texto: 'Declaración<br>de la renta',
      delay: '.5s',
    },
    {
      icono: 'coffee',
      texto: 'Asesoramiento<br>personalizado',
      delay: '.75s',
    }
  ];

  constructor() { }

}
