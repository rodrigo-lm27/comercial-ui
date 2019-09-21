import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OportunidadeService {

  apiUrl = 'https://comercialapi.herokuapp.com/oportunidades';

  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient.get(this.apiUrl);
  }
  adicionar(oportunidade: any){
    return this.httpClient.post(this.apiUrl, oportunidade);
  }

}
