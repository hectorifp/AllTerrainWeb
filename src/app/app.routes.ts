import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticlesListComponent } from './pages/articles-list/articles-list.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'articulos', component: ArticlesListComponent },
    { path: 'articulo/:id', component: ArticleDetailComponent },
    { path: 'sobre-nosotros', component: AboutComponent },
    { path: '**', redirectTo: '' },
];
