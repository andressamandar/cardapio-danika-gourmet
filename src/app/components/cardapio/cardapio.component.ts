import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [
    MatPaginatorModule, 
    MatButtonModule, 
    CommonModule
  ],
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
})
export class CardapioComponent {
  mostrarProdutos: boolean = true;
  mostrarIngredientes: boolean = false;

  alternarMarcas(): void {
    this.mostrarIngredientes = !this.mostrarIngredientes;
    if (this.mostrarIngredientes) {
      this.mostrarProdutos = false;
    }
  }

  alternarProdutos(): void {
    this.mostrarProdutos = !this.mostrarProdutos;
    if (this.mostrarProdutos) {
      this.mostrarIngredientes = false;
    }
  }

  openWhatsApp() {
    window.open('https://wa.me/5511958701463', '_blank');
  }
}
