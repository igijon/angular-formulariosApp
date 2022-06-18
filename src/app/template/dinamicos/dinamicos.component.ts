import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: 'Inma',
    favoritos: [
      { id: 1, nombre: 'Metal Gear'},
      { id: 2, nombre: 'DeathStranding'},
    ]
  };
  nuevoJuego: string = '';

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      nombre: this.nuevoJuego,
      id: this.persona.favoritos.length + 1
      //Los id vienen de BDD por lo qu estoy es sólo un ejemplo
    }
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego='';
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  guardar() {
    console.log('Formulario posteado');
  }
}
