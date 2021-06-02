import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WallesComponent } from './walles/walles.component';
import { ViewComponent} from './view/view.component';
import {PetComponent} from './pet/pet.component';
import {MovieComponent} from './movie/movie.component';
import { WallDetailComponent } from './wall-detail/wall-detail.component';
import {BaogaoComponent} from './baogao/baogao.component';
const routes: Routes = [
  {
    path: 'Walles',
    component: WallesComponent
  },
  {
    path: 'View',
    component:   ViewComponent
  },
  {
    path: 'Pet',
    component:   PetComponent
  },
  { path: 'Movie',
    component:  MovieComponent
  },
  { path: 'detail/:id', component: WallDetailComponent },
  {
    path: 'Baogao',
    component: BaogaoComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
