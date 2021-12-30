import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fornecedor } from '../models/fornecedor';
import { FornecedorService } from '../services/fornecedor.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html'
})
export class ExcluirComponent {

  fornecedor: Fornecedor = new Fornecedor();
  enderecoMap;
  errors: any[] = [];

  constructor(private forncedorService: FornecedorService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer) {

     this.fornecedor = this.route.snapshot.data['fornecedor'];
     this.enderecoMap = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed/v1/place?q=" + + this.EnderecoCompleto() + "&key=AIzaSyAP0WKpL7uTRHGKWyakgQXbW6FUhrrA5pE");
    }

    public EnderecoCompleto(): string {
      return this.fornecedor.endereco.logradouro + ", " + this.fornecedor.endereco.numero + " - " + this.fornecedor.endereco.bairro + ", " + this.fornecedor.endereco.cidade + " - " + this.fornecedor.endereco.estado;
    }

    excluirEvento() {
      this.forncedorService.excluirFornecedor(this.fornecedor.id)
        .subscribe(
          evento => { this.sucessoExclusao(evento) },
          error => { this.falha(error) }
        );
    }

    sucessoExclusao(evento: any) {

      const toast = this.toastr.success('Fornecedor excluido com sucesso!', 'Good bye :D');
      if(toast) {
        toast.onHidden.subscribe(() => {
          this.router.navigate(['/fornecedores/listar-todos']);
        });
      }
    }

    falha(fail) {
      this.errors = fail.error.errors;
      this.toastr.error('Houve um erro no processamento!', 'Ops! :(');
    }

}
