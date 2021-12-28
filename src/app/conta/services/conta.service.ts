import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "src/app/services/base.service";
import { Usuario } from "../models/usuario";


@Injectable()
export class ContaService extends BaseService {

    constructor(private http: HttpClient) { super(); }

    registrarUsuario(usuario: Usuario): void {

    }

    login(usuario: Usuario) {

    }
}   