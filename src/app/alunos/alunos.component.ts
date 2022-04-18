import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno'; //Importação da classe Aluno.


@Component({
  selector: 'app-alunos', //app-alunos representa o componente alunos.component em outro lugar do projeto
  templateUrl: './alunos.component.html', //Este é o template html do componente
  styleUrls: ['./alunos.component.css'] //Estilo css do template 
})

export class AlunosComponent implements OnInit {
  
  listaAlunos: Aluno[] = []; //Declaração da lista de objetos do tipo Aluno
  
  constructor() { }

  ngOnInit(): void {
    //Logo que o componente é inicializado em algum ponto do projeto, este método é chamado.
    //Sua função é passar o vetor "alunos", criado logo abaixo desta página, para o vetor listaAlunos
    //que é o único atributo desta classe.
    this.listaAlunos = alunos; 
  }

}


//Como este projeto não contempla persistência de dados ou busca em base de dados externa,
//foi criado este vetor para armazenar os alunos que serão listados no template deste componente.

var alunos: Aluno[] = [
  {
    ru: 1515935,
    nome: 'João Ferreira de Almeida',
    nomeCurso: 'Ciência de Dados',
    dataNascimento!: '08/05/2005'
  },
  {
    ru: 1675823,
    nome: 'Beatriz Novaes Cruz',
    nomeCurso: 'Engenharia de Software',
    dataNascimento!: '27/10/1996'
  },
  {
    ru: 5298476,
    nome: 'Lucas Vinícius Moura',
    nomeCurso: 'Segurança da Informação',
    dataNascimento!: '13/12/1998'
  },
  {
    //Este sou eu, conforme exigido no enunciado do exercício.
    //Todos os dados aqui são verídicos.
    ru: 3519557,
    nome: 'Bruno Pereira Martins',
    nomeCurso: 'Análise e Desenvolvimento de Sistema',
    dataNascimento!: '05/03/1991'
  },
  {
    ru: 3519551,
    nome: 'Amanda Ferreira Rodrigues',
    nomeCurso: 'Análise e Desenvolvimento de Sistema',
    dataNascimento!: '02/03/1992'
  },
];