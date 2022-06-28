import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RelationComponent } from './components/relation/relation.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { JoinPageComponent } from './pages/join-page/join-page.component';
import { StatsPageComponent } from './pages/stats-page/stats-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {OverlayModule} from '@angular/cdk/overlay';
import { UserService } from './services/user.service';
import { RelationService } from './services/relation.service';
import { CommonModule } from '@angular/common';
import {ScrollingModule} from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RelationComponent,
    FormComponent,
    ListComponent,
    JoinPageComponent,
    StatsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    OverlayModule,
    CommonModule,
    ScrollingModule,

  ],
  providers: [UserService, RelationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
