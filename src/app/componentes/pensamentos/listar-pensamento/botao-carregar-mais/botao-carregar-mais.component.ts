import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  templateUrl: './botao-carregar-mais.component.html',
  styleUrl: './botao-carregar-mais.component.css'
})
export class BotaoCarregarMaisComponent implements OnInit {

  constructor(){ }

  @Input() haMaisPensamentos: boolean = false;

  ngOnInit(): void {
    
  }

}
