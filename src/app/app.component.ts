import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarContentComponent} from "./public/toolbar-content/toolbar-content.component";
import {FooterContentComponent} from "./public/footer-content/footer-content.component";
import {CocktailTableComponent} from "./cocktails/components/cocktail-table/cocktail-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarContentComponent, FooterContentComponent, CocktailTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cocktails';
}
