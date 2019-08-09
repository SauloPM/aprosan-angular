import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent       } from './app.component';
import { HeaderComponent    } from './components/header/header.component';
import { AboutComponent     } from './components/about/about.component';
import { Callout1Component  } from './components/callout1/callout1.component';
import { Callout2Component  } from './components/callout2/callout2.component';
import { RazonesComponent   } from './components/razones/razones.component';
import { VentajasComponent  } from './components/ventajas/ventajas.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { TarifasComponent   } from './components/tarifas/tarifas.component';
import { ContactoComponent  } from './components/contacto/contacto.component';
import { FooterComponent    } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    Callout1Component,
    Callout2Component,
    RazonesComponent,
    VentajasComponent,
    ServiciosComponent,
    TarifasComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
