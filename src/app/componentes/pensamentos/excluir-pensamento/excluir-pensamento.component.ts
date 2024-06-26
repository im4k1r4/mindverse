import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento: Pensamento) => {
      this.pensamento = pensamento
  })
  }

  excluirPensamento() {
    if(this.pensamento.id) {
        this.service.excluir(this.pensamento.id).subscribe(() => {
            this.router.navigate(['/listarPensamento'])
        })
    }
  } 

    cancelar() {
      this.router.navigate(['/listarPensamento'])
    }
}
