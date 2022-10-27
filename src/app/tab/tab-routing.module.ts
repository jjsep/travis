import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabPage, 
    children: [
      {
        path: 'home', // this is weather 
        loadChildren: () => import ('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'add-item',
        loadChildren: () => import ('../add-item/add-item.module').then(m => m.AddItemPageModule)
      },
      {
        path: 'packing-list',
        loadChildren: () => import ('../packing-list/packing-list.module').then(m => m.PackingListPageModule)
      },
      {
        path: 'landing', //this is home
        loadChildren: () => import ('../landing/landing.module').then(m => m.LandingPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tab/landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
