import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ARTICLES } from '../../data/articles.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="home">
      <!-- Hero Section -->
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <span class="hero-badge">Bienvenido al campo</span>
            <h1>El mundo del todoterreno,<br>sin filtros</h1>
            <p class="hero-description">
              Descubre artículos sobre los vehículos más capaces del planeta,
              las mejores rutas para explorar y todo lo que necesitas saber
              para adentrarte en el mundo del 4x4.
            </p>
            <div class="hero-actions">
              <a routerLink="/articulos" class="btn btn-primary">Explorar artículos</a>
              <a routerLink="/sobre-nosotros" class="btn btn-outline">Sobre nosotros</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Articles -->
      <section class="featured">
        <div class="container">
          <div class="section-header">
            <h2>Artículos destacados</h2>
            <p>Últimas publicaciones sobre todoterrenos, rutas y preparaciones</p>
          </div>
          <div class="articles-grid">
            @for (article of featuredArticles; track article.id; let i = $index) {
              <article class="card">
                <div class="card-category">
                  <span class="card-dot"></span>
                  {{ article.readTime }} de lectura
                </div>
                <h3>
                  <a [routerLink]="['/articulo', article.id]">{{ article.title }}</a>
                </h3>
                <p>{{ article.excerpt }}</p>
                <div class="card-footer">
                  <span class="card-date">{{ formatDate(article.date) }}</span>
                  <a [routerLink]="['/articulo', article.id]" class="card-link">
                    Leer más →
                  </a>
                </div>
              </article>
            }
          </div>
          <div class="section-action">
            <a routerLink="/articulos" class="btn btn-outline">Ver todos los artículos</a>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="stats">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-number">6</span>
              <span class="stat-label">Artículos publicados</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">15+</span>
              <span class="stat-label">Enlaces a recursos</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">4x4</span>
              <span class="stat-label">Pasión todoterreno</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .hero {
      padding: var(--space-4xl) 0;
      border-bottom: 1px solid rgba(212, 197, 169, 0.3);
    }

    .hero-content {
      max-width: 680px;
    }

    .hero-badge {
      display: inline-block;
      font-family: var(--font-heading);
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-olive);
      background: rgba(92, 107, 79, 0.1);
      padding: 0.35rem 0.85rem;
      border-radius: 20px;
      margin-bottom: var(--space-lg);
    }

    .hero h1 {
      font-size: 3rem;
      font-weight: 700;
      line-height: 1.15;
      margin-bottom: var(--space-lg);
      color: var(--text-primary);
    }

    .hero-description {
      font-size: 1.1rem;
      line-height: 1.8;
      color: var(--text-secondary);
      margin-bottom: var(--space-xl);
    }

    .hero-actions {
      display: flex;
      gap: var(--space-md);
      flex-wrap: wrap;
    }

    /* Buttons */
    .btn {
      display: inline-flex;
      align-items: center;
      font-family: var(--font-heading);
      font-size: 0.9rem;
      font-weight: 500;
      padding: 0.7rem 1.6rem;
      border-radius: var(--radius-md);
      text-decoration: none;
      transition: all var(--transition-base);
      cursor: pointer;
      border: none;
    }

    .btn-primary {
      background: var(--color-olive);
      color: var(--text-inverse);
    }

    .btn-primary:hover {
      background: var(--color-olive-light);
      color: var(--text-inverse);
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }

    .btn-outline {
      background: transparent;
      color: var(--color-olive);
      border: 1.5px solid var(--color-olive);
    }

    .btn-outline:hover {
      background: var(--color-olive);
      color: var(--text-inverse);
      transform: translateY(-1px);
    }

    /* Featured Section */
    .featured {
      padding: var(--space-4xl) 0 var(--space-2xl);
    }

    .section-header {
      margin-bottom: var(--space-2xl);
    }

    .section-header h2 {
      margin-bottom: var(--space-sm);
    }

    .section-header p {
      color: var(--text-muted);
      font-size: 0.95rem;
    }

    .articles-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-xl);
    }

    .card {
      background: var(--color-white);
      border-radius: var(--radius-lg);
      padding: var(--space-xl);
      border: 1px solid rgba(212, 197, 169, 0.3);
      transition: all var(--transition-base);
      display: flex;
      flex-direction: column;
    }

    .card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
      border-color: var(--color-sage);
    }

    .card-category {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: var(--space-md);
    }

    .card-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--color-olive);
    }

    .card h3 {
      font-size: 1.15rem;
      margin-bottom: var(--space-sm);
    }

    .card h3 a {
      color: var(--text-primary);
      text-decoration: none;
      transition: color var(--transition-fast);
    }

    .card h3 a:hover {
      color: var(--color-olive);
    }

    .card p {
      font-size: 0.9rem;
      line-height: 1.6;
      color: var(--text-secondary);
      flex: 1;
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: var(--space-md);
      padding-top: var(--space-md);
      border-top: 1px solid rgba(212, 197, 169, 0.2);
    }

    .card-date {
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    .card-link {
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--color-olive);
      text-decoration: none;
      transition: color var(--transition-fast);
    }

    .card-link:hover {
      color: var(--color-brown-warm);
    }

    .section-action {
      text-align: center;
      margin-top: var(--space-2xl);
    }

    /* Stats Section */
    .stats {
      padding: var(--space-3xl) 0;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-xl);
      background: var(--color-white);
      border-radius: var(--radius-xl);
      padding: var(--space-2xl);
      border: 1px solid rgba(212, 197, 169, 0.3);
    }

    .stat-item {
      text-align: center;
    }

    .stat-number {
      display: block;
      font-family: var(--font-heading);
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--color-olive);
      line-height: 1;
      margin-bottom: var(--space-sm);
    }

    .stat-label {
      font-size: 0.85rem;
      color: var(--text-muted);
      font-weight: 500;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .hero {
        padding: var(--space-2xl) 0;
      }

      .hero h1 {
        font-size: 2rem;
      }

      .articles-grid {
        grid-template-columns: 1fr;
      }

      .stats-grid {
        grid-template-columns: 1fr;
        gap: var(--space-lg);
      }
    }

    @media (max-width: 480px) {
      .hero h1 {
        font-size: 1.65rem;
      }

      .hero-actions {
        flex-direction: column;
      }

      .btn {
        text-align: center;
        justify-content: center;
      }
    }
  `],
})
export class HomeComponent {
  featuredArticles = ARTICLES.slice(0, 3);

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }
}
