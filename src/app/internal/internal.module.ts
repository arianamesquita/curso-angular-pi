import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalRoutingModule } from './internal-routing.module';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { CardsComponent } from './pagina-principal/cards/cards.component';
import { LabelsComponent } from './pagina-principal/labels/labels.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    TopnavbarComponent,
    PaginaPrincipalComponent,
    CardsComponent,
    LabelsComponent,
  ],
  imports: [
    CommonModule,
    InternalRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    PaginaPrincipalComponent,
  ]
})
export class InternalModule { }
