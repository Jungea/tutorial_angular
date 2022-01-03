import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [  //Components
    AppComponent, 
  ],

  imports: [  //Modules
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule,
  ],

  providers: [  //Services

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
