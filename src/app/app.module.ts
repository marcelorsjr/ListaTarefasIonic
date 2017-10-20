import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProjetosPage } from '../pages/projetos/projetos';
import { ProjetoPage } from '../pages/projeto/projeto';
import { TabsPage } from '../pages/tabs/tabs';
import { TarefasPage, Filtro } from '../pages/tarefas/tarefas';
import { TarefaPage } from '../pages/tarefa/tarefa';
import { PerfilPage } from '../pages/perfil/perfil';


import { ProjetosService } from '../providers/projetos-service';
import { TarefasService } from '../providers/tarefas-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ProjetosPage,
    ProjetoPage,
    TabsPage,
    TarefasPage,
    TarefaPage,
    Filtro,
    PerfilPage
  ],
  imports: [
      BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProjetosPage,
    ProjetoPage,
    TabsPage,
    TarefasPage,
    TarefaPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProjetosService,
    TarefasService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
