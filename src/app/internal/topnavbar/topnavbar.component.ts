import { Component } from '@angular/core';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent {

  ifinclusivo = "/assets/imagens/Group 73.svg";
  usuario = "Usuário X";
  buttons = [
    { text: "Fórum" },
    { text: "Tópicos" },
    { text: "Libras" },
    { text: "Chat" },
  ];

}
