import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Employee1Component } from './employee1/employee1.component';
import { Employee2Component } from './employee2/employee2.component';
import { EmployeePipe } from './employee.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Employee1Component,
    Employee2Component,
    EmployeePipe
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
