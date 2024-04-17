import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatIconButton
  ],
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css'
})
export class ToolbarContentComponent {

}
