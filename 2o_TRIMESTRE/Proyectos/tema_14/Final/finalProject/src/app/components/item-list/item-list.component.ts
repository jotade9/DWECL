import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../core/firebase.service';

@Component({
  selector: 'app-item-list',
  standalone: false,
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: any[] = [];
  newItem = { name: '', price: 0, url: '' };

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    // Escuchar cambios en la colección
    this.firebaseService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  addItem() {
    if (this.newItem.name.trim() && this.newItem.price > 0 && this.newItem.url.trim()) {
      this.firebaseService.addItem(this.newItem).then(() => {
        this.newItem = { name: '', price: 0, url: '' }; // Limpiar los campos
      });
    } else {
      alert('Todos los campos son obligatorios');
    }
  }
}