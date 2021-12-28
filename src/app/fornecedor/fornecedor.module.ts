import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoComponent } from './novo/novo.component';
import { DetalhesComponent } from './detalhes/detalhes.component';



@NgModule({
  declarations: [NovoComponent, DetalhesComponent],
  imports: [
    CommonModule
  ]
})
export class FornecedorModule { }
