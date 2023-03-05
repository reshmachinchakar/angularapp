import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgforPractiseComponent } from './ngfor-practise/ngfor-practise.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwtichComponent } from './ng-swtich/ng-swtich.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { AssignmentNgStyleComponent } from './assignment-ng-style/assignment-ng-style.component';
import { CustomeDirectiveDirective } from './custome-directive.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import {  MatInputModule } from "@angular/material/input";
import {  MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { TemplateFormComponent } from './template-form/template-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AssignTemplateDrivenComponent } from './assign-template-driven/assign-template-driven.component';

import { AssignReactiveFormComponent } from './assign-reactive-form/assign-reactive-form.component';
import { ReactAssign2Component } from './react-assign2/react-assign2.component';
import { CombinedReactiveformComponent } from './combined-reactiveform/combined-reactiveform.component';
import { DependancyInjectionLearningComponent } from './dependancy-injection-learning/dependancy-injection-learning.component';
import { HttpClientModule } from '@angular/common/http';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { SearchPipePipe } from './search-pipe.pipe';
import { ProductFilterComponent } from './product-filter/product-filter.component';





@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Test1Component,
    Test2Component,
    CardComponent,
    NgforComponent,
    NgforPractiseComponent,
    NgIfComponent,
    NgSwtichComponent,
    NgStyleComponent,
    NgClassComponent,
    AssignmentNgStyleComponent,
    CustomeDirectiveDirective,
    // MatSlideToggleModule,
    TemplateFormComponent,
    LoginFormComponent,
    ReactiveFormComponent,
    AssignTemplateDrivenComponent,
   
    AssignReactiveFormComponent,
    ReactAssign2Component,
    CombinedReactiveformComponent,
    DependancyInjectionLearningComponent,
    PipeExampleComponent,
    CustomPipePipe,
    SearchPipePipe,
    ProductFilterComponent,
 
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
