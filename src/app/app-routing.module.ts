import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', 
  loadChildren: () => import('./tab/tab.module').then (m => m.TabPageModule)}
  // {
  //   path: 'home',
  //   loadChildren: () => import('./weather/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'landing', //when the project gets started, the landing page will appear-- this is the "Hello There Travis page"
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'landing',
  //   loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  // },
  // {
  //   path: 'packing-list',
  //   loadChildren: () => import('./packing-list/packing-list.module').then( m => m.PackingListPageModule)
  // },
  // {
  //   path: 'add-item',
  //   loadChildren: () => import('./add-item/add-item.module').then( m => m.AddItemPageModule)
  // },
  // {
  //   path: 'tab',
  //   loadChildren: () => import('./tab/tab.module').then( m => m.TabPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
