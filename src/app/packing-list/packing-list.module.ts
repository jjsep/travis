import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PackingListPageRoutingModule } from './packing-list-routing.module';

import { PackingListPage } from './packing-list.page'; //each module.ts needs to import its own "classComponentName" and declare it inthe @ngModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PackingListPageRoutingModule
  ],
  declarations: [PackingListPage]
})
export class PackingListPageModule {}
