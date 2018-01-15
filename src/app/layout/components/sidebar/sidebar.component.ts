import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  {
    currentUser: any;
    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
