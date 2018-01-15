import { Component, OnInit , Output } from '@angular/core';
import { routerTransition } from '../../router.animations';


@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss'],
    animations: [routerTransition()]
})
export class ParentComponent implements OnInit {
    @Output() Action = 'aymen';
    constructor() {}

    ngOnInit() {}
}
