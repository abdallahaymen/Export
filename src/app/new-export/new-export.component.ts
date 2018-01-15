import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { saveAs } from 'file-saver/FileSaver';
import { AlertService, UserService } from '../_services/index';
import {Export} from '../_models/index';

@Component({
    selector: 'app-new-export',
    templateUrl: './new-export.component.html',
    styleUrls: ['./new-export.component.scss']
})
export class NewexoprtComponent implements OnInit {
    Export: Array<any> = [];
    csvmodel: any= [];
    csvlist: Export[] = [] ;
    Order: Array<String> = [ 'Date depence', 'Nom de la dépense' , 'Catégorie',  'TTC',
    'TVA', 'Moyen de paiement', 'Nom du marchand', 'Adresse du marchand' , 'Id de la dépense', 'Affaire'];
    index: Array<number> = [0, 3 , 1 , 2];
    fiche: String;
    constructor(
        private userService: UserService,
        private alertService: AlertService
    ) {
        this.Export.push({
            id: 1,
            type: 'success',
            date: '12/10/2017',
            message: 'This is an success',
        }, {
            id: 2,
            type: 'info',
            date: '12/10/2015',
            message: 'This is an info ',
        }, {
            id: 3,
            type: 'warning',
            date: '12/10/2014',
            message: 'xxx',
        });
    }
    register() {

        this.csvmodel.push({
            format: 'csv',
            order: this.Order,
            title: this.index
        });
        this.userService.createcsv(this.csvmodel)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    alert('Registration successful');
                },
                error => {
                    this.alertService.error(error);
                    alert('eror csv');
            });
    }

    getallcsv() {
            this.userService.getAllcsv().subscribe(users => { this.csvlist = users; });
            this.Order = this.csvlist[0].order;
    }
    ngOnInit() { this.getallcsv(); }
    //retun entet exel
    getCaracter(i) { return String.fromCharCode(65 + i); }
    getlist(i) { this.Order.push('aa') ; }
    deletelist(i) { this.Order.splice(i, 1) ; }
    getdata( x, i) {
       var  str = '';
       switch (x) {
            case x = 'id':
                  str += 'id' + ';' ;
                  break;
             case x = 'type':
                   str += 'type' + ';' ;
                  break;
             case x = 'date':
                   str = 'date'  ;
                  break;
             case x = 'message':
                   str += 'message' + ';' ;
                  break;
             default:
                break;
        }
    }
}

