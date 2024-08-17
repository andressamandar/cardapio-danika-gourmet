import { Component } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [
    MatPaginatorModule, 
  ],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.css'
})
export class CardapioComponent {

}
