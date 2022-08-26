import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { RestaurantItemComponent } from './components/restaurant-item/restaurant-item.component';
import { RestaurantsComponent } from './restaurants.component';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RestaurantListComponent,
    CategoryListComponent,
    CategoryItemComponent,
    RestaurantItemComponent,
    RestaurantsComponent,
  ],

  imports: [CommonModule, RestaurantsRoutingModule, SharedModule],
})
export class RestaurantsModule {}
