import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KbForumComponent} from "./components/kb-forum/kb-forum.component";
import {KbForumDetailsComponent} from "./components/kb-forum-details/kb-forum-details.component";

const routes: Routes = [
  {
    path: "",
    component: KbForumComponent
  },
  {
    path: "post/detail/:id",
    component: KbForumDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
