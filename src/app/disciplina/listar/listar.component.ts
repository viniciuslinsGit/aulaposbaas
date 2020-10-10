import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

declare const Parse: any;

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listaDisciplinas: any[] = [];


  constructor() {
    Parse.initialize(environment.PARSE_APP_ID, environment.PARSE_JS_KEY);
    Parse.serverURL = environment.serverURL;
  }

  ngOnInit(): void {
    this.listar();
  }

  
  listar() {
    this.listaDisciplinas = [];
    const Disciplina = Parse.Object.extend('Disciplina');
    const query = new Parse.Query(Disciplina);
    query.find().then((results) => {
      if (typeof document !== 'undefined') {
        const disciplinaObj: any[] = Array.of(JSON.parse(JSON.stringify(results)))[0];
        for (let index = 0; index < disciplinaObj.length; index++) {
          this.listaDisciplinas.push(disciplinaObj[index]);
          
        }
      }
    }, (error) => {
      if (typeof document !== 'undefined') document.write(`Error while fetching Disciplina: ${JSON.stringify(error)}`);
      console.error('Error while fetching Disciplina', error);
    });
  }

  deletar(disciplina: any) {
    const Disciplina = Parse.Object.extend('Disciplina');
    const query = new Parse.Query(Disciplina);
    query.get(disciplina.objectId).then((object) => {
      object.destroy().then((response) => {
        if (typeof document !== 'undefined') {
          this.listar();
        }        
      }, (error) => {
        if (typeof document !== 'undefined') document.write(`Error while deleting Disciplina: ${JSON.stringify(error)}`);
        console.error('Error while deleting Disciplina', error);
      });
    });
  }

}
