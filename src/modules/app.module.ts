import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RowService} from 'src/modules/services/row';
import {DataService} from 'src/modules/services/data';
import {ShowDotsUpPipe, ShowLastRowPipe, ShowDotsDownPipe, ShowFirtsRowPipe, ShowNextRowPipe, ShowPrevRowPipe, IsCurrentDisplayedPipe} from 'src/modules/app.pipes';
import {StorageService} from 'src/modules/services/storage.service';

@NgModule({
  declarations: [
    AppComponent, ShowDotsUpPipe, ShowLastRowPipe, ShowDotsDownPipe, ShowFirtsRowPipe, ShowNextRowPipe, ShowPrevRowPipe, IsCurrentDisplayedPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [RowService, DataService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
