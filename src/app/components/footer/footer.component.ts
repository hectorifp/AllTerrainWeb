import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    template: `
    <footer class="footer">
      <div class="footer-inner container">
        <div class="footer-top">
          <div class="footer-brand">
            <span class="footer-logo">◆ Todoterreno</span>
            <p class="footer-tagline">Pasión por el campo y la aventura</p>
          </div>
          <div class="footer-links">
            <h4>Enlaces externos</h4>
            <a href="https://www.landrover.es" target="_blank" rel="noopener">Land Rover España</a>
            <a href="https://www.jeep.es" target="_blank" rel="noopener">Jeep España</a>
            <a href="https://www.toyota.es" target="_blank" rel="noopener">Toyota España</a>
            <a href="https://es.wikiloc.com/rutas/todoterreno" target="_blank" rel="noopener">Rutas 4x4 en Wikiloc</a>
          </div>
          <div class="footer-links">
            <h4>Comunidad</h4>
            <a href="https://www.foro4x4.com/" target="_blank" rel="noopener">Foro 4x4</a>
            <a href="https://www.club4x4.es/" target="_blank" rel="noopener">Club 4x4 España</a>
            <a href="https://www.autobild.es/coches/todoterreno" target="_blank" rel="noopener">Autobild Todoterreno</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Todoterreno. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `,
    styles: [`
    .footer {
      background: var(--color-earth-dark);
      color: var(--text-inverse);
      margin-top: var(--space-4xl);
    }

    .footer-inner {
      padding: var(--space-3xl) var(--space-xl);
    }

    .footer-top {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr;
      gap: var(--space-2xl);
      padding-bottom: var(--space-2xl);
      border-bottom: 1px solid rgba(253, 252, 250, 0.12);
    }

    .footer-logo {
      font-family: var(--font-heading);
      font-weight: 700;
      font-size: 1.2rem;
      color: var(--color-sand);
    }

    .footer-tagline {
      color: rgba(253, 252, 250, 0.5);
      font-size: 0.85rem;
      margin-top: var(--space-sm);
      margin-bottom: 0;
    }

    .footer-links {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .footer-links h4 {
      font-family: var(--font-heading);
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--color-sage);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: var(--space-xs);
    }

    .footer-links a {
      color: rgba(253, 252, 250, 0.65);
      font-size: 0.85rem;
      text-decoration: none;
      transition: color var(--transition-fast);
    }

    .footer-links a:hover {
      color: var(--color-sand);
    }

    .footer-bottom {
      padding-top: var(--space-lg);
      text-align: center;
    }

    .footer-bottom p {
      color: rgba(253, 252, 250, 0.35);
      font-size: 0.8rem;
      margin: 0;
    }

    @media (max-width: 768px) {
      .footer-top {
        grid-template-columns: 1fr;
        gap: var(--space-xl);
      }
    }
  `],
})
export class FooterComponent { }
