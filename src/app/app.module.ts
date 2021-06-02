import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WallesComponent } from './walles/walles.component';
import { ViewComponent } from './view/view.component';
import {PetComponent} from './pet/pet.component';
import {MovieComponent} from './movie/movie.component';
import { WallDetailComponent } from './wall-detail/wall-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { PaperSearchComponent } from './paper-search/paper-search.component';
import { BaogaoComponent } from './baogao/baogao.component';
@NgModule({
  declarations: [
    AppComponent,
    WallesComponent,
    ViewComponent,
    PetComponent,
    MovieComponent,
    WallDetailComponent,
    MessagesComponent,
    PaperSearchComponent,
    BaogaoComponent,
 
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
