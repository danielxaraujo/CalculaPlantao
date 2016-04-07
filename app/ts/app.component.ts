import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent, ListComponent, DetailComponent} from './component';

@Component({
    selector: '[app]',
    templateUrl: '../view/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/list',   name: 'List', component: ListComponent },
    { path: '/detail', name: 'Detail', component: DetailComponent }
])
export class AppComponent { }