import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { saveAs } from 'file-saver/FileSaver';
import { AlertService, UserService } from '../_services/index';
import {Export, Format, Expenses} from '../_models/index';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/router/src/config';

@Component({
    selector: 'app-new-export',
    templateUrl: './new-export.component.html',
    styleUrls: ['./new-export.component.scss']
})
export class NewexoprtComponent implements OnInit {
    @Output() show_csv_event = new EventEmitter();
    model:  = {};
    Export: Array<Expenses> = [];
    csvmodel: any= [];
    csvlist: Export[] = [] ;
    Order: Array<Format>;
    defaultcsv: Export[]= [];
    defaultcsv2: Export[]= [];
    listfomule: Array<Format>;
    name: string;
    format = 'csv';
    fiche: String;
    constructor(
        private userService: UserService,
        private alertService: AlertService,
        private router: Router
    ) {
        this.Export = JSON.parse(localStorage.getItem('Expenses'));
        this.defaultcsv = JSON.parse(localStorage.getItem('CSVdefault'));
        this.defaultcsv2 = JSON.parse(localStorage.getItem('CSVdefault'));
        this.Order = this.defaultcsv[0].order;
        this.listfomule = this.defaultcsv2[0].order;

    }
    register() {

       /* 
        }),*/

        this.model = {
            format: this.format,
            order: this.Order,
            name: this.name,
        };

        console.log(this.name);
        console.log(this.model);
       /* this.userService.createcsv(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    console.log('Registration successful');
                },
                error => {
                    this.alertService.error(error);
                    console.log(error);

                });

        */
        this.csvmodel.push({
            format: this.format,
            order: this.Order,
            name: this.name});

       localStorage.setItem('CSVdefault', JSON.stringify(this.csvmodel));
        this.router.navigate(['/expenses']);
    }
    chengeSelect(i) {
console.log(i);
    }



    ngOnInit() {  }
    getlist() {
        this.Order.push(
            {
                formule: '',
                entet: 'Column ' + (this.Order.length + 1)
            }
            ) ;

    }

    deletelist(i) { this.Order.splice(i, 1) ;
    console.log(this.Order);
    console.log(this.listfomule);
    }
    getCaracter(i) { return String.fromCharCode(65 + i); }

    dataChanged($event) {
        console.log(this.name);
    }




    getvalue(Ex: number, item) {
        let Entry= this.Export[Ex] ;
                  let x = this.Order[item].formule;
                    switch (x) {
                        case x = 'date_depence':
                            return Entry.date_depence ;
                        case x = 'Nom':
                            return Entry.Nom ;
                        case x = 'Categorie':
                             return Entry.Categorie ;
                        case x = 'value':
                             return Entry.value  ;
                        case x = 'TVA':
                            return Entry.TVA ;
                        case x = 'moyen_payement':
                            return Entry.moyen_payement ;
                        case x = 'Nom_marchand':
                            return Entry.Nom_marchand  ;
                        case x = 'pays':
                            return Entry.pays  ;
                        case x = 'id':
                            return Entry.id ;
                        case x = 'Affaire':
                            return Entry.Affaire ;
                       default:
                            return '';

                    }
    }
}

