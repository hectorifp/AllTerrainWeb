import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ARTICLES } from '../../data/articles.data';

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="articles-page">
      <div class="container">
        <div class="page-header">
          <span class="page-badge">Blog</span>
          <h1>Todos los artículos</h1>
          <p class="page-description">
            Explora nuestros artículos sobre todoterrenos, rutas, preparaciones y los vehículos más legendarios del mundo 4x4.
          </p>
        </div>

        <div class="articles-list">
          @for (article of articles; track article.id; let i = $index) {
            <article class="article-row">
              <div class="article-image-container">
                <a [routerLink]="['/articulo', article.id]">
                  <img [src]="article.imageUrl" [alt]="article.title" class="article-img">
                </a>
              </div>
              <div class="article-content">
                <div class="article-meta">
                  <span class="article-date">{{ formatDate(article.date) }}</span>
                  <span class="article-separator">·</span>
                  <span class="article-time">{{ article.readTime }}</span>
                </div>
                <h2>
                  <a [routerLink]="['/articulo', article.id]">{{ article.title }}</a>
                </h2>
                <p>{{ article.excerpt }}</p>
                <div class="article-links">
                  @for (link of article.externalLinks.slice(0, 2); track link.url) {
                    <a [href]="link.url" target="_blank" rel="noopener" class="ext-link">
                      ↗ {{ link.label }}
                    </a>
                  }
                  <a [routerLink]="['/articulo', article.id]" class="read-more">Leer artículo completo →</a>
                </div>
              </div>
            </article>
          }
        </div>
      </div>
    </main>
  `,
  styles: [`
    .articles-page {
      padding: var(--space-3xl) 0;
    }

    .page-header {
      margin-bottom: var(--space-3xl);
      max-width: 600px;
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

    .page-header h1 {
      margin-bottom: var(--space-md);
    }

    .page-description {
      font-size: 1.05rem;
      color: var(--text-secondary);
      line-height: 1.7;
    }

    .articles-list {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .article-row {
      display: grid;
      grid-template-columns: 350px 1fr;
      gap: 2.5rem;
      align-items: start;
      padding: var(--space-xl) 0;
      border-bottom: 1px solid rgba(212, 197, 169, 0.3);
      transition: background var(--transition-fast);
    }

    .article-image-container {
      width: 100%;
      border-radius: var(--radius-md);
      overflow: hidden;
      aspect-ratio: 16 / 9;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .article-image-container a {
      display: block;
      width: 100%;
      height: 100%;
    }

    .article-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .article-image-container:hover .article-img {
      transform: scale(1.05);
    }

    .article-content {
      display: flex;
      flex-direction: column;
    }

    .article-row:first-child {
      border-top: 1px solid rgba(212, 197, 169, 0.3);
    }

    .article-meta {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.8rem;
      color: var(--text-muted);
      margin-bottom: var(--space-sm);
    }

    .article-separator {
      color: var(--color-sand);
    }

    .article-row h2 {
      font-size: 1.35rem;
      margin-bottom: var(--space-sm);
    }

    .article-row h2 a {
      color: var(--text-primary);
      text-decoration: none;
      transition: color var(--transition-fast);
    }

    .article-row h2 a:hover {
      color: var(--color-olive);
    }

    .article-row > p {
      font-size: 0.95rem;
      color: var(--text-secondary);
      line-height: 1.7;
      max-width: 700px;
    }

    .article-links {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-md);
      margin-top: var(--space-md);
      align-items: center;
    }

    .ext-link {
      font-size: 0.8rem;
      color: var(--color-brown-warm);
      text-decoration: none;
      padding: 0.25rem 0.6rem;
      border: 1px solid rgba(139, 111, 71, 0.25);
      border-radius: var(--radius-sm);
      transition: all var(--transition-fast);
    }

    .ext-link:hover {
      background: rgba(139, 111, 71, 0.08);
      border-color: var(--color-brown-warm);
      color: var(--color-brown-warm);
    }

    .read-more {
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--color-olive);
      text-decoration: none;
      transition: color var(--transition-fast);
    }

    .read-more:hover {
      color: var(--color-brown-warm);
    }

    @media (max-width: 900px) {
      .article-row {
        grid-template-columns: 280px 1fr;
        gap: 1.5rem;
      }
    }

    @media (max-width: 768px) {
      .articles-page {
        padding: var(--space-xl) 0;
      }

      .article-row {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .article-links {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `],
})
export class ArticlesListComponent {
  articles = ARTICLES;

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }
}
