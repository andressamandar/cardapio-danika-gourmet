import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { ContatosComponent } from './components/contatos/contatos.component';

const routes: Routes = [
  { path: 'cardapio', component: CardapioComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: '', redirectTo: '/cardapio', pathMatch: 'full' } // Redireciona para o cardápio como padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


