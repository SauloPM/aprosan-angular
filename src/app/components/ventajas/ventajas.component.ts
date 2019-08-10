import { Component } from '@angular/core';

// Interfaces
import { Ventaja } from 'src/app/interfaces/ventaja';

@Component({
  selector: 'app-ventajas',
  templateUrl: './ventajas.component.html',
  styles: []
})
export class VentajasComponent {

  ventajas: Ventaja[] = [
    {
      icono: 'cube',
      titulo: 'Ahorro de espacio',
      texto: 'La documentación no ocupa un espacio físico innecesario al estar digitalizada, almacenado de forma segura en nuestra base de datos',
    },
    {
      icono: 'shopping-basket',
      titulo: 'Mejores precios',
      texto: 'Al ser una asesoría online nos ahorramos gastos de mantenimiento en espacios físicos, y tú lo notas en tu bolsillo',
    },
    {
      icono: 'clock-o',
      titulo: 'Ahorro de tiempo',
      texto: 'Realiza el trabajo desde donde quieras, sin necesidad de desplazarte físicametne ni perder tiempo en reuniones innecesarias',
    },
    {
      icono: 'magic',
      titulo: 'Cómodo y práctico',
      texto: 'Para contactar con tu asesor solo necesitas tener conexión a Internet. Bastará con una videollamada para celebrar una reunión',
    }
  ];

  constructor() { }

}
