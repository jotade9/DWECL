import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos = [
    { nombre: 'Móvil', precio: 299, descripcion: 'Smartphone moderno', imagen: 'movil.png' },
    { nombre: 'Coche', precio: 15000, descripcion: 'Vehículo de alta gama', imagen: 'coche.png' },
    { nombre: 'Bolso', precio: 49, descripcion: 'Bolso de cuero', imagen: 'bolso.png' },
    { nombre: 'Calzado', precio: 79, descripcion: 'Zapatillas deportivas', imagen: 'zapatillas.png' },
    { nombre: 'Bici', precio: 499, descripcion: 'Bicicleta de montaña', imagen: 'bici.png' },
    { nombre: 'Pupitre', precio: 99, descripcion: 'Mesa de estudio', imagen: 'pupitre.png' }
  ];
}
