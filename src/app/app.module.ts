import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DashboardContainerComponent } from './Components/dashboard-container/dashboard-container.component';
import { UsersComponent } from './Components/users/users.component';
import {  HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ModalComponent } from './Components/modal/modal.component';
import { DialogModule } from 'primeng/dialog';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DashboardContainerComponent,
    UsersComponent,
    ModalComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    TableModule,
    DialogModule,
    NgApexchartsModule
  ],
  providers: [
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
