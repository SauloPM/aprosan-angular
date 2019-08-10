import { Component } from '@angular/core';

// Interfaces
import { Tarifa } from 'src/app/interfaces/tarifa';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styles: []
})
export class TarifasComponent {

  tarifas: Tarifa[] = [
    {
      precio: '26',
      titulo: 'Tarifa básica',
      texto: 'Asesoría fisca y contable para autónomos del sector sanitario*',
      aclaracion: '* Profesionales autónomos sin obligación de IVA',
      delay: '0s'
    },
    {
      precio: '40',
      titulo: 'Tarifa premium',
      texto: 'Asesoría fisca y contable para autónomos del sector sanitario*',
      aclaracion: '* Profesionales autónomos con o sin obligación de IVA',
      delay: '.25s'
    },
    {
      precio: '54',
      titulo: 'Tarifa Básica Sociedade',
      texto: 'Asesoría fisca y contable para sociedades del sector sanitario*',
      aclaracion: '* Sociedades sin obligación de IVA',
      delay: '.5s'
    },
    {
      precio: '76',
      titulo: 'Tarifa Premium Sociedade',
      texto: 'Asesoría fisca y contable para sociedades del sector sanitario*',
      aclaracion: '* Sociedades con o sin obligación de IVA',
      delay: '.75s'
    }
  ];

  constructor() { }

}
