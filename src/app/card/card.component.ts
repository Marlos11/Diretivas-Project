import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  produtos:string[] = []

  constructor() { 
    this.produtos = [
      'mouse',
      'teclado',
      'monitor',
      'font'
    ]
  }  

  adcionar(){
    this.produtos.push("SDDnvme2")
  } 

  remove(index:number){
    this.produtos.splice(index,1)
 


  }
  ngOnInit(): void {
  }

}
