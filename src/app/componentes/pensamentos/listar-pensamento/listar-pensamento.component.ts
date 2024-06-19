import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent implements OnInit{

  listaPensamentos = [
    {
      conteudo: 'TESTE TESTE',
      autoria: 'Autor',
      modelo: 'modelo2'
    },
    {
      conteudo: 'TESTE TESTE',
      autoria: 'Autor',
      modelo: 'modelo2'
    },
    {
      conteudo: 'TESTE TES laksdgfdas as d4a56s4 654as65d4 65as465d4 a65s4 65as4d65a4s 654as6 54d65as4 56d465as 456as4d65as4 654d6 5a4s65d4 6as54d 65as4654d a6s54 6d5as46 5d4as65d4 as65ksdhg ahjfgsadhjkfgjks hdghjksdgfjkh sagjhkf gsdjkhag jkhsdg jhsgdjh gsadjkgfjkhsdagjhkfsdgfhsdgfhjksdgjkfhgsdjkgshjd gjkfsadTE',
      autoria: 'Autor',
      modelo: 'modelo3'
    }
  ];

  constructor() {}
  
  ngOnInit(): void {
    
  }

}
