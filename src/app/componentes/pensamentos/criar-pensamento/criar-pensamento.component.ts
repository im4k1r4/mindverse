import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {
  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo:''
  }

  constructor() { }

  ngOnInit(): void {  
  }

  criarPensamento() {
    alert("Novo pensamento criado")
  }

  cancelarPensamento() {
    alert("Pensamento cancelado")
  }
}
