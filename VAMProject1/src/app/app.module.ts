import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JaveedComponent } from './javeed/javeed.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { StructDirectivesComponent } from './struct-directives/struct-directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductComponent } from './product/product.component';
import { AttributeDirsComponent } from './attribute-dirs/attribute-dirs.component';
import { MycolorDirective } from './directives/mycolor.directive';
import { PipeComponent } from './pipe/pipe.component';
import { SearchPipe } from './search.pipe';
import { SortpipePipe } from './sortpipe.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ParentcompComponent } from './parentcomp/parentcomp.component';
import { ChildcompComponent } from './childcomp/childcomp.component';
import { CalculatorcomponentComponent } from './calculatorcomponent/calculatorcomponent.component';
import { JavaComponent } from './java/java.component';
import { WebComponent } from './web/web.component';
import { routingComponents, TechRoutingModule } from './tech-routing/tech-routing.module';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { JavacompComponent } from './javacomp/javacomp.component';
import { WebcompComponent } from './webcomp/webcomp.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    JaveedComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    StructDirectivesComponent,
    CalculatorComponent,
    ProductComponent,
    AttributeDirsComponent,
    MycolorDirective,
    PipeComponent,
    SearchPipe,
    SortpipePipe,
    ParentcompComponent,
    ChildcompComponent,
    CalculatorcomponentComponent,
    JavaComponent,
    WebComponent,
    routingComponents,
    Component1Component,
    Component2Component,
    JavacompComponent,
    WebcompComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent,
  ],
  imports: [
    BrowserModule, FormsModule,HttpClientModule,TechRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
