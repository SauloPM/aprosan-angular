import { Component } from '@angular/core';

// Interfaces
import { Razon } from 'src/app/interfaces/razon';

@Component({
  selector: 'app-razones',
  templateUrl: './razones.component.html',
  styles: []
})
export class RazonesComponent {

  razones: Razon[] = [
    {
      texto: 'Gracias a las herramientas tecnologías con las que contamos hoy en día, una asesoría online puede ofrecer un servicio mucho más eficiente',
      icono: 'gear'
    },
    {
      texto: 'Cada vez se hacen más trámites administrativos telemáticamente. De esta misma manera, nosotros podemos trasladar ese avance a nuestra gestión',
      icono: 'cloud'
    },
    {
      texto: 'Muchas administraciones solo admiten interacción telemática: el trabajo que realizan las asesorías es virtual casi al 100% en su funcionamiento',
      icono: 'database'
    },
    {
      texto: 'La capacidad de anticiparte cualquier cambio es una de las claves del éxito. Utilizamos las últimas tecnologías para que siempre vayas un paso por delante',
      icono: 'plug'
    },
    {
      texto: 'Olvídate de los trámites burocráticos de última hora. Libera tiempo para enfocarte en tu negocio y ganar dinero, de lo demás nos encargamos nosotros',
      icono: 'life-ring'
    }
  ];

  constructor() { }

}