import { CursosService } from './../cursos.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Curso } from '../curso';


@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  cursos: Curso[];

  // cursos$: Observable<Curso[]>;
  constructor(private service: CursosService) { }

  ngOnInit() {
    // this.service.list().subscribe(dados => this.cursos = dados);
   this.listar();

  }

  listar() {
    this.service.list()
   .then(dados => {
     this.cursos = dados;
   });
  }

  adicionar(nome: string) {
    this.service.adicionar({ nome })
    .then( curso => {
      alert(`Curso ${curso.nome} adicionado com sucesso!!! Aleluia...`);
      this.listar();
    });
  }

  deletar(id: number) {
    this.service.deletar(id)
    .then(() => {
      alert(`Curso deletado com sucesso.`);
      this.listar();
    });
  }

  atualizar(curso: any) {
    this.service.atualizar(curso)
    .then(() => {
      alert(`Curso alterada com sucesso`);
      // this.listar();
    });
  }

}
