import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header />
    <div class="page-wrapper">
      <router-outlet />
    </div>
    <app-footer />
  `,
  styles: [`
    .page-wrapper {
      min-height: calc(100vh - var(--header-height) - 200px);
    }
  `],
})
export class App { }
