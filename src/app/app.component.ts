import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent, LayoutModule } from '@dota2/layout';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutModule, HttpClientModule, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dota2';
}
