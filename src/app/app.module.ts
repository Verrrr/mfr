import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuiModule } from 'ng2-semantic-ui';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './pages/category/category.component';
import { TypeComponent } from './pages/type/type.component';
import { ProjectComponent } from './pages/project/project.component';
import { MfrComponent } from './pages/mfr/mfr.component';
import { NewMfrComponent } from './pages/new-mfr/new-mfr.component';
import { SingleMfrComponent } from './pages/single-mfr/single-mfr.component';
import { TaskComponent } from './pages/task/task.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HomeComponent,
    ContactComponent,
    NewContactComponent,
    CategoryComponent,
    TypeComponent,
    ProjectComponent,
    MfrComponent,
    NewMfrComponent,
    SingleMfrComponent,
    TaskComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
