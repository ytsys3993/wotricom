import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//AngularMaterial
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav';


//ナビメニュー
import { NavimenuComponent } from '../contents/navimenu/navimenu.component';
import { SidenaviComponent } from '../contents/sidenavi/sidenavi.component';

const appRoutes: Routes = [ // 追加
  { path: '', component: AppComponent, pathMatch: 'full' },

];

@NgModule({
  declarations: [
    AppComponent,
    

    NavimenuComponent,
    SidenaviComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes), // 追加
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
