import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public title: string = "To poio omorfo menu tou kosmou";
  public num: number = 666;
  // Array<string>
  // (menu : any  > gia otidipote metablites )
  public menu: string[] = ["Home","About","Products","Contact"];

}
