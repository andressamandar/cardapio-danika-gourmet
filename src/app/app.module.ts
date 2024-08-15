import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { appRoutes } from './app.routes';  // Certifique-se de que isso está correto

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,  // Verifique se o MenuComponent está declarado aqui
    CardapioComponent,
    ContatosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)  // Verifique se está usando appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
