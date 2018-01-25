import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import { StockDirectiveDirective } from './stock-directive.directive';
import {HighlightDirective} from './highlight.directive';


import { DateFormatterPipe } from './date-formatter.pipe';
import { CapitalizePipePipe } from './capitalize-pipe.pipe';
import {FormsModule} from'@angular/forms';
import {StockService} from './stock.service';
import {StocksCompoent} from './stocks.component';
import { EmployeeNamePipe } from './employee-name.pipe';

@NgModule({
  declarations: [
    AppComponent, StocksCompoent,CapitalizePipePipe, EmployeeNamePipe
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
