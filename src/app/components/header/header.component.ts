import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    template: `
    <div class="hero-carousel">
      <div class="carousel-slide" [class.active]="currentSlide === 0" style="background-image: url('/assets/images/carousel_desert_1773570162096.png')"></div>
      <div class="carousel-slide" [class.active]="currentSlide === 1" style="background-image: url('/assets/images/carousel_forest_1773570176689.png')"></div>
      <div class="carousel-slide" [class.active]="currentSlide === 2" style="background-image: url('/assets/images/carousel_mountain_1773570198441.png')"></div>
      <div class="carousel-overlay">
        <h1>Aventura 4x4</h1>
        <p>Descubre el mundo sin límites</p>
      </div>
    </div>
    <header class="header">
      <div class="header-inner container">
        <a routerLink="/" class="logo">
          <span class="logo-icon">◆</span>
          <span class="logo-text">Todoterreno</span>
        </a>
        <button class="menu-toggle" (click)="toggleMenu()" [class.active]="menuOpen" aria-label="Menú">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav class="nav" [class.open]="menuOpen">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Inicio</a>
          <a routerLink="/articulos" routerLinkActive="active" (click)="closeMenu()">Artículos</a>
          <a routerLink="/sobre-nosotros" routerLinkActive="active" (click)="closeMenu()">Sobre nosotros</a>
        </nav>
      </div>
    </header>
  `,
    styles: [`
    .hero-carousel {
      position: relative;
      width: 100%;
      height: 40vh;
      min-height: 300px;
      overflow: hidden;
    }

    .carousel-slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      opacity: 0;
      transition: opacity 1.5s ease-in-out, transform 6s ease-out;
      transform: scale(1.1);
    }

    .carousel-slide.active {
      opacity: 1;
      transform: scale(1);
    }

    .carousel-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
    }

    .carousel-overlay h1 {
      font-size: 3.5rem;
      font-family: var(--font-heading);
      margin-bottom: 0.5rem;
      text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
    }

    .carousel-overlay p {
      font-size: 1.25rem;
      text-shadow: 1px 1px 4px rgba(0,0,0,0.6);
      font-weight: 500;
    }
    
    @media (max-width: 768px) {
      .hero-carousel {
        height: 250px;
        min-height: 250px;
      }
      .carousel-overlay h1 {
        font-size: 2.2rem;
      }
    }

    .header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(253, 252, 250, 0.92);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(212, 197, 169, 0.4);
      height: var(--header-height);
      display: flex;
      align-items: center;
    }

    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-family: var(--font-heading);
      font-weight: 700;
      font-size: 1.3rem;
      color: var(--color-olive);
      text-decoration: none;
      transition: color var(--transition-fast);
    }

    .logo:hover {
      color: var(--color-brown-warm);
    }

    .logo-icon {
      font-size: 1rem;
      color: var(--color-brown-warm);
    }

    .nav {
      display: flex;
      gap: 2rem;
    }

    .nav a {
      font-family: var(--font-body);
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--text-secondary);
      text-decoration: none;
      padding: 0.25rem 0;
      position: relative;
      transition: color var(--transition-fast);
    }

    .nav a::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--color-olive);
      transition: width var(--transition-base);
      border-radius: 1px;
    }

    .nav a:hover {
      color: var(--color-olive);
    }

    .nav a:hover::after,
    .nav a.active::after {
      width: 100%;
    }

    .nav a.active {
      color: var(--color-olive);
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
    }

    .menu-toggle span {
      display: block;
      width: 22px;
      height: 2px;
      background: var(--text-primary);
      border-radius: 2px;
      transition: all var(--transition-base);
    }

    .menu-toggle.active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    .menu-toggle.active span:nth-child(2) {
      opacity: 0;
    }

    .menu-toggle.active span:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }

    @media (max-width: 768px) {
      .menu-toggle {
        display: flex;
      }

      .nav {
        position: fixed;
        top: var(--header-height);
        left: 0;
        right: 0;
        background: rgba(253, 252, 250, 0.98);
        backdrop-filter: blur(12px);
        flex-direction: column;
        align-items: center;
        gap: 0;
        padding: 1rem 0;
        border-bottom: 1px solid rgba(212, 197, 169, 0.4);
        transform: translateY(-100%);
        opacity: 0;
        pointer-events: none;
        transition: all var(--transition-base);
      }

      .nav.open {
        transform: translateY(0);
        opacity: 1;
        pointer-events: all;
      }

      .nav a {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
      }
    }
  `],
})
export class HeaderComponent implements OnInit, OnDestroy {
    menuOpen = false;
    currentSlide = 0;
    private slideInterval: any;

    ngOnInit() {
        this.slideInterval = setInterval(() => {
            this.currentSlide = (this.currentSlide + 1) % 3;
        }, 5000);
    }

    ngOnDestroy() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
        }
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }

    closeMenu() {
        this.menuOpen = false;
    }
}
