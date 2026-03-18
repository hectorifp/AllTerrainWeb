import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ARTICLES, Article } from '../../data/articles.data';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (article) {
    <main class="article-detail">
      <div class="container">
        <nav class="breadcrumb">
          <a routerLink="/articulos">← Volver a artículos</a>
        </nav>

        <article class="article-content">
          <header class="article-header">
            <div class="article-meta">
              <span class="article-date">{{ formatDate(article.date) }}</span>
              <span class="meta-dot">·</span>
              <span class="article-time">{{ article.readTime }} de lectura</span>
            </div>
            <h1>{{ article.title }}</h1>
            <p class="article-lead">{{ article.excerpt }}</p>
          </header>

          <div class="article-featured-image">
            <img [src]="article.imageUrl" [alt]="article.title">
          </div>

          <div class="article-body" [innerHTML]="article.body"></div>

          <aside class="article-sidebar">
            <div class="sidebar-section">
              <h3>Enlaces relacionados</h3>
              <div class="external-links">
                @for (link of article.externalLinks; track link.url) {
                  <a [href]="link.url" target="_blank" rel="noopener" class="ext-link">
                    <span class="ext-icon">↗</span>
                    <span class="ext-text">{{ link.label }}</span>
                  </a>
                }
              </div>
            </div>
          </aside>
        </article>

        <nav class="article-nav">
          @if (prevArticle) {
            <a [routerLink]="['/articulo', prevArticle.id]" class="nav-link nav-prev">
              <span class="nav-direction">← Anterior</span>
              <span class="nav-title">{{ prevArticle.title }}</span>
            </a>
          }
          @if (nextArticle) {
            <a [routerLink]="['/articulo', nextArticle.id]" class="nav-link nav-next">
              <span class="nav-direction">Siguiente →</span>
              <span class="nav-title">{{ nextArticle.title }}</span>
            </a>
          }
        </nav>
      </div>
    </main>
    }
  `,
  styles: [`
    .article-detail {
      padding: var(--space-2xl) 0;
    }

    .breadcrumb {
      margin-bottom: var(--space-2xl);
    }

    .breadcrumb a {
      font-size: 0.85rem;
      color: var(--text-muted);
      text-decoration: none;
      transition: color var(--transition-fast);
    }

    .breadcrumb a:hover {
      color: var(--color-olive);
    }

    .article-content {
      max-width: 720px;
    }

    .article-header {
      margin-bottom: var(--space-2xl);
      padding-bottom: var(--space-xl);
      border-bottom: 1px solid rgba(212, 197, 169, 0.3);
    }

    .article-meta {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.8rem;
      color: var(--text-muted);
      margin-bottom: var(--space-md);
    }

    .meta-dot {
      color: var(--color-sand);
    }

    .article-header h1 {
      font-size: 2.2rem;
      line-height: 1.2;
      margin-bottom: var(--space-md);
    }

    .article-lead {
      font-size: 1.1rem;
      color: var(--text-secondary);
      line-height: 1.7;
      font-style: italic;
    }

    .article-featured-image {
      margin-bottom: var(--space-2xl);
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }
    
    .article-featured-image img {
      width: 100%;
      height: auto;
      max-height: 480px;
      object-fit: cover;
      display: block;
    }

    /* Article Body */
    .article-body {
      font-size: 1.05rem;
      line-height: 1.85;
      color: var(--text-secondary);
      margin-bottom: var(--space-2xl);
    }

    .article-body :deep(p) {
      margin-bottom: var(--space-lg);
    }

    .article-body :deep(strong) {
      color: var(--text-primary);
      font-weight: 600;
    }

    /* Sidebar */
    .article-sidebar {
      background: var(--color-white);
      border: 1px solid rgba(212, 197, 169, 0.3);
      border-radius: var(--radius-lg);
      padding: var(--space-xl);
      margin-bottom: var(--space-2xl);
    }

    .sidebar-section h3 {
      font-size: 0.9rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--color-olive);
      margin-bottom: var(--space-md);
    }

    .external-links {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .ext-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.6rem 0.85rem;
      border: 1px solid rgba(212, 197, 169, 0.3);
      border-radius: var(--radius-md);
      text-decoration: none;
      transition: all var(--transition-fast);
    }

    .ext-link:hover {
      background: rgba(92, 107, 79, 0.05);
      border-color: var(--color-sage);
      transform: translateX(4px);
    }

    .ext-icon {
      color: var(--color-brown-warm);
      font-size: 0.9rem;
      flex-shrink: 0;
    }

    .ext-text {
      font-size: 0.88rem;
      color: var(--text-secondary);
    }

    .ext-link:hover .ext-text {
      color: var(--color-olive);
    }

    /* Navigation */
    .article-nav {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-md);
      padding-top: var(--space-xl);
      border-top: 1px solid rgba(212, 197, 169, 0.3);
    }

    .nav-link {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      padding: var(--space-lg);
      border: 1px solid rgba(212, 197, 169, 0.3);
      border-radius: var(--radius-md);
      text-decoration: none;
      transition: all var(--transition-base);
    }

    .nav-link:hover {
      background: var(--color-white);
      border-color: var(--color-sage);
      transform: translateY(-2px);
      box-shadow: var(--shadow-sm);
    }

    .nav-next {
      text-align: right;
    }

    .nav-direction {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-muted);
    }

    .nav-title {
      font-family: var(--font-heading);
      font-size: 0.95rem;
      font-weight: 500;
      color: var(--color-olive);
    }

    @media (max-width: 768px) {
      .article-header h1 {
        font-size: 1.65rem;
      }

      .article-nav {
        grid-template-columns: 1fr;
      }

      .nav-next {
        text-align: left;
      }
    }
  `],
})
export class ArticleDetailComponent implements OnInit {
  article!: Article;
  prevArticle: Article | null = null;
  nextArticle: Article | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      const index = ARTICLES.findIndex((a) => a.id === id);
      if (index !== -1) {
        this.article = ARTICLES[index];
        this.prevArticle = index > 0 ? ARTICLES[index - 1] : null;
        this.nextArticle = index < ARTICLES.length - 1 ? ARTICLES[index + 1] : null;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }
}
