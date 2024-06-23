import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent implements OnInit{

  listaPensamentos: Pensamento[] = [];

  constructor() {}
  
  ngOnInit(): void {
    
  }

}
