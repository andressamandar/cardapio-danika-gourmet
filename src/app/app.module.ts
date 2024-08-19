import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { appRoutes } from './app.routes'; 


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,  // 
    CardapioComponent,
    ContatosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
