import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

declare const Parse: any;

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  nome: string = "";
  professor = '';
  ano: number;

  constructor() {
    Parse.initialize(environment.PARSE_APP_ID, environment.PARSE_JS_KEY);
    Parse.serverURL = environment.serverURL;
  }

  ngOnInit(): void {
  }

  handleSubmit = () => {
    const Disciplina = Parse.Object.extend('Disciplina');
    const disciplina = new Disciplina();
    disciplina.set("nome", this.nome);
    disciplina.set("professor", this.professor);
    disciplina.set("ano", this.ano);

    disciplina.save().then(
      (result) => {
        if (typeof document !== 'undefined') document.write(`Disciplina created: ${JSON.stringify(result)}`);
        console.log('Disciplina criada', result);
      },
      (error) => {
        if (typeof document !== 'undefined') document.write(`Erro ao criar a disciplina: ${JSON.stringify(error)}`);
        console.error('Erro ao criar a disciplina: ', error);
      }
    );
  };

  handleNomeChange = (event: KeyboardEvent) => {
      this.nome = (<HTMLInputElement>event.target).value;
  };

  handleProfessorChange = (event: KeyboardEvent) => {
      this.professor = (<HTMLInputElement>event.target).value;
  };

  handleAnoChange = (event: KeyboardEvent) => {
      this.ano = Number((<HTMLInputElement>event.target).value);
  };

  keyPress(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
