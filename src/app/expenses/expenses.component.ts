import { Component, OnInit, VERSION } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { saveAs } from 'file-saver/FileSaver';
import { Export, Format } from '../_models/index';
import { UserService } from '../_services/index';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-expenses',
    templateUrl: './expenses.component.html',
    styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit, OnChanges {
    Export: Array<any> = [];
    defaultcsv: Export[]= [];
    Order: Array<Format>;
    fiche: String;
    listeoutput:  Array<any> = [];



    constructor( private userService: UserService) {
      this.Export = JSON.parse(localStorage.getItem('Expenses'));
      this.defaultcsv = JSON.parse(localStorage.getItem('CSVdefault'));
      this.Order = this.defaultcsv[0].order;
      this.GetEntet();
      this.GetData();
    }


    loadAllUsers() {
        this.userService.getAllcsv().subscribe(csvlist => { this.listeoutput = csvlist; });
       // this.userService.getAll().subscribe(csvlist => { this.listeoutput = csvlist; });

        console.log('loadAllUsers');
        console.log(this.listeoutput);
        console.log(this.Export);
    }

 SaveDemo() {

        const ff = new Blob([this.fiche], { type: 'text/csv;charset=utf-8' });
        saveAs(ff, 'Defaultcsv.csv');
  }


  getligne()
    {   this.fiche = '';
        this.GetEntet();
        this.GetData();
        console.log(this.fiche);
        const ff = new Blob([this.fiche], { type: 'text/csv;charset=utf-8' });
        saveAs(ff, 'Exportcsv.csv');
    }

//return entet 
private GetEntet() {
   this.fiche = '';
   for (let x of this.Order) {
       this.fiche += x.entet + ';';
   }
    this.fiche += '\n';

}

ngOnInit() { this.loadAllUsers(); }

ngOnChanges() {  }

//return data
private GetData() {

    for (let Entry of this.Export) {
        let Rslt = '';
        for (let s of this.Order )
        {
            let  x = s.formule;
            switch (x) {
                case x = 'date_depence':
                    Rslt += Entry.date_depence + ';';
                    break;
                case x = 'Nom':
                    Rslt += Entry.Nom + ';' ;
                    break;
                case x = 'Categorie':
                    Rslt += Entry.Categorie + ';' ;
                    break;
                case x = 'value':
                    Rslt += Entry.value + ';' ;
                    break;
                    case x = 'TVA':
                    Rslt += Entry.TVA + ';';
                    break;
                case x = 'moyen_payement':
                    Rslt += Entry.moyen_payement + ';' ;
                    break;
                case x = 'Nom_marchand':
                    Rslt += Entry.Nom_marchand + ';' ;
                    break;
                case x = 'pays':
                    Rslt += Entry.pays + ';' ;
                    break;
                    case x = 'id':
                    Rslt += Entry.id + ';';
                    break;
                case x = 'Affaire':
                    Rslt += Entry.Affaire + ';' ;
                    break;
                default:
                    break;
            }

        }
        this.fiche  += Rslt + '\n' ;

    }
 }





 

}
