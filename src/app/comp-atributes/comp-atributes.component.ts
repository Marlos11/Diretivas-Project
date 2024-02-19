import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributes',
  templateUrl: './comp-atributes.component.html',
  styleUrls: ['./comp-atributes.component.css']
})
export class CompAtributesComponent implements OnInit {

  estilo:string="disable"

  corFundo:string='blue'
  cordeFundo:string = 'red'
  item:string=""
lista:string[]=[]

  constructor(){}
  
  adcionarLista(){
    this.lista.push(this.item)
  }
trocarDeCor(){
    if(this.estilo ==="enable"){
      this.estilo = "disable"
    }else{
      this.estilo = "enable"
    }
  }

  ngOnInit(): void {
  }

}
