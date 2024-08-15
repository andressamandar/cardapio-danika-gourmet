import { Routes } from '@angular/router';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { ContatosComponent } from './components/contatos/contatos.component';

export const appRoutes: Routes = [
  { path: 'cardapio', component: CardapioComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: '', redirectTo: '/cardapio', pathMatch: 'full' }
];
