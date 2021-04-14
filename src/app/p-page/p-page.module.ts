import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PPagePageRoutingModule } from './p-page-routing.module';

import { PPagePage } from './p-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PPagePageRoutingModule
  ],
  declarations: [PPagePage]
})
export class PPagePageModule {}
