import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  template: `
    <main class="policy-page">
      <div class="container">
        <h1>Política de Privacidad</h1>
        <p>Esta es la política de privacidad de 4x4AllTerrainer. Aquí se describen cómo recopilamos, usamos y protegemos los datos personales de los visitantes.</p>
        <p>...</p>
        <p>Para más información, contacte a <a href="mailto:info@4x4allterrainer.es">info@4x4allterrainer.es</a>.</p>
      </div>
    </main>
  `,
  styles: [
    `.policy-page { padding: var(--space-4xl) 0; }`
  ]
})
export class PrivacyPolicyComponent {}
