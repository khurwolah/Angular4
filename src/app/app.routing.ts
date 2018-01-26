import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StocksCompoent} from './stocks.component';

const appRoutes: Routes =[{
    path:'stocks',
    component: StocksCompoent
},
{
    path:'',
    redirectTo: '/stocks',
    pathMatch: 'full'
}];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);