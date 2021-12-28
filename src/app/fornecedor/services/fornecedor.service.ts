import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { BaseService } from 'src/app/services/base.service';
import { Fornecedor } from '../models/fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService extends BaseService {

  fornecedor: Fornecedor = new Fornecedor();

  constructor(private http: HttpClient) { super() 
  
    this.fornecedor.nome = "Teste Fake"
    this.fornecedor.documento = "32165498754"
    this.fornecedor.ativo = true
    this.fornecedor.tipoFornecedor = 1
  }

  obterTodos(): Observable<Fornecedor[]> {
    return this.http
      .get<Fornecedor[]>(this.UrlServiceV1 + "fornecedores")
      .pipe(catchError(super.serviceError));
  }

  obterPorId(id: string): Observable<Fornecedor> {
    return new Observable<Fornecedor>();
  }

  novoFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
    return new Observable<Fornecedor>();
  }

  autualizarFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
    return new Observable<Fornecedor>();
  }
  
  excluirFornecedor(id: string): Observable<Fornecedor> {
    return new Observable<Fornecedor>();
  }
}
