import {Component} from '@angular/core';
import {StockService} from './stock.service';
@Component({
    selector:'stock',
    template:`<h2>Stocks</h2>
    {{title}}
    Test
    <ul>
    <li *ngFor="let stock of stocks">
    {{stock}}
    </li>
    </ul>`
})

export class StocksCompoent{
    title='List of Socks: ';
    stocks;

    constructor(stockService: StockService){
        this.stocks= stockService.getStocks();
    }
}

