import { ActiveUsersComponent } from './active-users/active-users.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CounterService } from './counter.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
