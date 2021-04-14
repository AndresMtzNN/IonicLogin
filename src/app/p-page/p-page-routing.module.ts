import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PPagePage } from './p-page.page';

const routes: Routes = [
  {
    path: '',
    component: PPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PPagePageRoutingModule {}
