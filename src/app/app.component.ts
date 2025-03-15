import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployComponent } from "./employ/employ.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employ';
}
