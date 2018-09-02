import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';





@Injectable({
  providedIn: 'root'
})
export class CursosService {

  // Parametrizado
  private readonly API = `${environment.API}cursos`;


  constructor(private http: Http) { }

  list(): Promise<any> {
    return this.http.get(this.API)
      .toPromise()
      .then(response => response.json());
  }

  adicionar(curso: any): Promise<any> {
    return this.http.post(`${this.API}`, curso)
      .toPromise()
      .then(response => response.json());
  }

  deletar(id: number): Promise<void> {
    return this.http.delete(`${this.API}/${id}`)
    .toPromise()
    .then(() => null);
  }

  atualizar(curso: any): Promise<any> {
    return this.http.put(`${this.API}/${curso.id}`, curso)
    .toPromise()
    .then(response => response.json());
  }


}
