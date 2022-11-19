import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooblarComponent } from './components/template/tooblar/tooblar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MenuComponent } from './components/template/menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import { FormularioComponent } from './components/template/formulario/formulario.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SliderComponent } from './components/template/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    TooblarComponent,
    MenuComponent,
    FormularioComponent,
    SliderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
   
    
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
