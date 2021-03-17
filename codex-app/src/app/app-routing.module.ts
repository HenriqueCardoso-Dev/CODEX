import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'html-language',
    loadChildren: () => import('./pages/html-language/html-language.module').then( m => m.HtmlLanguagePageModule)
  },
  {
    path: 'css-language',
    loadChildren: () => import('./pages/css-language/css-language.module').then( m => m.CssLanguagePageModule)
  },
  {
    path: 'js-language',
    loadChildren: () => import('./pages/js-language/js-language.module').then( m => m.JsLanguagePageModule)
  },
  {
    path: 'php-language',
    loadChildren: () => import('./pages/php-language/php-language.module').then( m => m.PhpLanguagePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
