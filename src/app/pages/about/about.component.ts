import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <main class="about-page">
      <div class="container">
        <div class="about-content">
          <span class="page-badge">Sobre nosotros</span>
          <h1>Un rincón para los amantes del todoterreno</h1>

          <div class="about-body">
            <p>
              <strong>Todoterreno</strong> nace de una pasión sencilla: la libertad de conducir
              por donde no hay carretera. Este proyecto es un espacio dedicado a quienes disfrutan
              del barro en los neumáticos, del polvo en el parabrisas y del silencio de las montañas
              que solo se alcanza con tracción total.
            </p>

            <p>
              Aquí encontrarás artículos sobre los vehículos más icónicos del mundo 4x4, guías
              prácticas para preparar tu coche, rutas que merece la pena explorar y recursos
              para conectar con la comunidad todoterreno.
            </p>

            <p>
              No somos una revista ni un medio profesional. Somos entusiastas que creen que la
              mejor forma de conocer un territorio es recorrerlo despacio, con respeto por el
              medio ambiente y con un vehículo capaz debajo.
            </p>

            <div class="values-grid">
              <div class="value-card">
                <span class="value-icon">◇</span>
                <h3>Autenticidad</h3>
                <p>Contenido escrito desde la experiencia real, sin pretensiones ni publicidad encubierta.</p>
              </div>
              <div class="value-card">
                <span class="value-icon">◇</span>
                <h3>Respeto</h3>
                <p>El campo es de todos. Promovemos una conducción responsable y respetuosa con el entorno natural.</p>
              </div>
              <div class="value-card">
                <span class="value-icon">◇</span>
                <h3>Comunidad</h3>
                <p>El todoterreno es mejor en compañía. Conectamos con otros apasionados del 4x4.</p>
              </div>
            </div>

            <div class="resources-section">
              <h2>Recursos que recomendamos</h2>
              <p>Sitios y comunidades que son referencia en el mundo del todoterreno:</p>
              <div class="resources-list">
                <a href="https://www.foro4x4.com/" target="_blank" rel="noopener" class="resource-link">
                  <span class="resource-arrow">↗</span>
                  <div>
                    <strong>Foro4x4</strong>
                    <span>La mayor comunidad hispanohablante de todoterreno</span>
                  </div>
                </a>
                <a href="https://www.club4x4.es/" target="_blank" rel="noopener" class="resource-link">
                  <span class="resource-arrow">↗</span>
                  <div>
                    <strong>Club 4x4 España</strong>
                    <span>Organización de rutas y eventos por toda España</span>
                  </div>
                </a>
                <a href="https://es.wikiloc.com/rutas/todoterreno" target="_blank" rel="noopener" class="resource-link">
                  <span class="resource-arrow">↗</span>
                  <div>
                    <strong>Wikiloc — Rutas 4x4</strong>
                    <span>Miles de rutas todoterreno compartidas por la comunidad</span>
                  </div>
                </a>
                <a href="https://www.topgear.com/car-reviews" target="_blank" rel="noopener" class="resource-link">
                  <span class="resource-arrow">↗</span>
                  <div>
                    <strong>Top Gear Reviews</strong>
                    <span>Análisis profesionales de los mejores todoterrenos</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  `,
  styles: [`
    .about-page {
      padding: var(--space-3xl) 0;
    }

    .about-content {
      max-width: 720px;
    }

    .page-badge {
      display: inline-block;
      font-family: var(--font-heading);
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--color-olive);
      background: rgba(92, 107, 79, 0.1);
      padding: 0.3rem 0.75rem;
      border-radius: 20px;
      margin-bottom: var(--space-md);
    }

    h1 {
      margin-bottom: var(--space-2xl);
    }

    .about-body p {
      font-size: 1.05rem;
      line-height: 1.85;
      color: var(--text-secondary);
      margin-bottom: var(--space-lg);
    }

    .about-body strong {
      color: var(--text-primary);
    }

    /* Values */
    .values-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-lg);
      margin: var(--space-2xl) 0;
    }

    .value-card {
      background: var(--color-white);
      border: 1px solid rgba(212, 197, 169, 0.3);
      border-radius: var(--radius-lg);
      padding: var(--space-xl);
      transition: all var(--transition-base);
    }

    .value-card:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
      border-color: var(--color-sage);
    }

    .value-icon {
      display: block;
      font-size: 1.2rem;
      color: var(--color-olive);
      margin-bottom: var(--space-sm);
    }

    .value-card h3 {
      font-size: 1rem;
      margin-bottom: var(--space-sm);
    }

    .value-card p {
      font-size: 0.88rem !important;
      line-height: 1.6 !important;
      margin-bottom: 0 !important;
    }

    /* Resources */
    .resources-section {
      margin-top: var(--space-2xl);
      padding-top: var(--space-2xl);
      border-top: 1px solid rgba(212, 197, 169, 0.3);
    }

    .resources-section h2 {
      margin-bottom: var(--space-sm);
    }

    .resources-section > p {
      margin-bottom: var(--space-lg) !important;
    }

    .resources-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .resource-link {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      padding: var(--space-md) var(--space-lg);
      border: 1px solid rgba(212, 197, 169, 0.3);
      border-radius: var(--radius-md);
      text-decoration: none;
      transition: all var(--transition-fast);
    }

    .resource-link:hover {
      background: var(--color-white);
      border-color: var(--color-sage);
      transform: translateX(4px);
    }

    .resource-arrow {
      font-size: 1.1rem;
      color: var(--color-brown-warm);
      flex-shrink: 0;
    }

    .resource-link strong {
      display: block;
      font-size: 0.9rem;
      color: var(--text-primary);
    }

    .resource-link span {
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    .resource-link:hover strong {
      color: var(--color-olive);
    }

    @media (max-width: 768px) {
      .values-grid {
        grid-template-columns: 1fr;
      }
    }
  `],
})
export class AboutComponent { }
