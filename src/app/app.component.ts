import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxCountrySelectModule} from "../../projects/ngx-country-select/src/lib/ngx-country-select.module";
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgxCountrySelectModule, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}

