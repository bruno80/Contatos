import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  contatos = [
    {
      "nome": "bruno",
      "url": "https://i.pinimg.com/originals/de/f6/96/def69643889ee29e232637646e839064.jpg"
    },
    {
      "nome": "muller",
      "url": "http://www.aranhahomem.com/images/pictures/fantastico-homem-aranha.jpg"
    }
  ];

  delete(contato){
    var i = this.contatos.indexOf(contato);
    this.contatos.splice(i, 1);
  }

}
