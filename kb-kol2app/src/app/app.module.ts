import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KbForumComponent } from './components/kb-forum/kb-forum.component';
import { KbForumItemComponent } from './components/kb-forum-item/kb-forum-item.component';
import { KbForumDetailsComponent } from './components/kb-forum-details/kb-forum-details.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    KbForumComponent,
    KbForumItemComponent,
    KbForumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
