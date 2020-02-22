import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//AngularMaterial
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


//ナビメニュー
import { SidenaviComponent } from '../contents/sidenavi/sidenavi.component';

//コンテンツ
import { PlaceComponent } from '../contents/place/place.component';

const appRoutes: Routes = [ // 追加
  { path: '', component: AppComponent, pathMatch: 'full' },

];

@NgModule({
  declarations: [
    AppComponent,

    SidenaviComponent,

    PlaceComponent,
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes), // 追加
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    
    FormsModule,
    ReactiveFormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
