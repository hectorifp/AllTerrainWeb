import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  standalone: true,
  template: `
    <main class="terms-page">
      <div class="container">
        <h1>Aviso Legal</h1>
        <p>Este es el aviso legal de 4x4AllTerrainer. Aquí se detallan los derechos y obligaciones del sitio web y sus usuarios.</p>
        <p>...</p>
        <p>Para consultas, contacte a <a href="mailto:info@4x4allterrainer.es">info@4x4allterrainer.es</a>.</p>
      </div>
    </main>
  `,
  styles: [
    `.terms-page { padding: var(--space-4xl) 0; }`
  ]
})
export class TermsComponent {}
