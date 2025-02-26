import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos = [
    { nombre: 'Móvil', precio: 299, descripcion: 'Smartphone moderno', imagen: '/public/movil.png' },
    { nombre: 'Coche', precio: 15000, descripcion: 'Vehículo de alta gama', imagen: '/public/coche.png' },
    { nombre: 'Bolso', precio: 49, descripcion: 'Bolso de cuero', imagen: '/public/bolso.png' },
    { nombre: 'Calzado', precio: 79, descripcion: 'Zapatillas deportivas', imagen: '/public/zapatillas.png' },
    { nombre: 'Bici', precio: 499, descripcion: 'Bicicleta de montaña', imagen: '/public/bici.png' },
    { nombre: 'Pupitre', precio: 99, descripcion: 'Mesa de estudio', imagen: '/public/pupitre.png' }
  ];
}
