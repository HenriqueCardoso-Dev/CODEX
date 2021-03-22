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
    path: 'user-perfil',
    loadChildren: () => import('./pages/user-perfil/user-perfil.module').then( m => m.UserPerfilPageModule)
  },
  {
    path: 'css-classes',
    loadChildren: () => import('./pages/languages/css/css-classes/css-classes.module').then( m => m.CssClassesPageModule)
  },
  {
    path: 'class1',
    loadChildren: () => import('./pages/languages/css/css-contents/class1/class1.module').then( m => m.Class1PageModule)
  },
  {
    path: 'class2',
    loadChildren: () => import('./pages/languages/css/css-contents/class2/class2.module').then( m => m.Class2PageModule)
  },
  {
    path: 'class3',
    loadChildren: () => import('./pages/languages/css/css-contents/class3/class3.module').then( m => m.Class3PageModule)
  },
  {
    path: 'html-classes',
    loadChildren: () => import('./pages/languages/html/html-classes/html-classes.module').then( m => m.HtmlClassesPageModule)
  },
  {
    path: 'class1',
    loadChildren: () => import('./pages/languages/html/html-contents/class1/class1.module').then( m => m.Class1PageModule)
  },
  {
    path: 'js-classes',
    loadChildren: () => import('./pages/languages/js/js-classes/js-classes.module').then( m => m.JsClassesPageModule)
  },
  {
    path: 'class1',
    loadChildren: () => import('./pages/languages/js/js-contents/class1/class1.module').then( m => m.Class1PageModule)
  },
  {
    path: 'php-classes',
    loadChildren: () => import('./pages/languages/php/php-classes/php-classes.module').then( m => m.PhpClassesPageModule)
  },
  {
    path: 'class1',
    loadChildren: () => import('./pages/languages/php/php-contents/class1/class1.module').then( m => m.Class1PageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
