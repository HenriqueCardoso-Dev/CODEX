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
    path: 'classes',
    loadChildren: () => import('./pages/classes/classes.module').then( m => m.ClassesPageModule)
  },
  {
    path: 'class-content',
    loadChildren: () => import('./pages/class-content/class-content.module').then( m => m.ClassContentPageModule)
  },
  {
    path: 'content-exercise',
    loadChildren: () => import('./pages/content-exercise/content-exercise.module').then( m => m.ContentExercisePageModule)
  },
  {
    path: 'user-update',
    loadChildren: () => import('./pages/user-update/user-update.module').then( m => m.UserUpdatePageModule)
  },
  {
    path: 'register-classes',
    loadChildren: () => import('./pages/register-classes/register-classes.module').then( m => m.RegisterClassesPageModule)
  },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
