import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [
    MatPaginatorModule, 
    MatButtonModule, 
    CommonModule,
    MatTabsModule,
  ],
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
})
export class CardapioComponent {
  mostrarProdutos: boolean = true;  // Controla a exibição das abas (Bolos e Tortas, Pães)
  mostrarIngredientes: boolean = false;  // Controla a exibição das marcas usadas

  // Alterna para mostrar apenas as marcas usadas
  alternarMarcas(): void {
    this.mostrarIngredientes = true;  // Exibe as marcas
    this.mostrarProdutos = false;     // Oculta o cardápio (abas)
  }

  // Alterna para mostrar o cardápio (abas Bolos e Tortas, Pães)
  alternarProdutos(): void {
    this.mostrarProdutos = true;      // Exibe o cardápio (abas)
    this.mostrarIngredientes = false; // Oculta as marcas
  }

  openWhatsApp() {
    window.open('https://wa.me/5511958701463', '_blank');
  }
}
