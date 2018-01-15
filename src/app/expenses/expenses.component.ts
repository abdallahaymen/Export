import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { saveAs } from 'file-saver/FileSaver';

@Component({
    selector: 'app-expenses',
    templateUrl: './expenses.component.html',
    styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
    Export: Array<any> = [];
    Data: Array<any> = [];
    Nom_marchand: string;
    Order: Array<String> = [ 'id', 'date_depence', 'Nom' , 'Catégorie',  'value',
    'TVA', 'moyen_payement', 'Nom_marchand', 'pays' , 'Affaire', 'Date'];

    index: Array<number> = [0, 3 , 1 , 2];
    fiche: String;
    public sliders: Array<any> = [];
    constructor() {

        this.Export.push({
            id: 1 ,
            date_depence: '12/12/2017',
            Nom: 'usa-restaurant-sales-tax-receipt',
            Categorie: 'Restauration',
            value: '192,97',
            TVA: '',
            moyen_payement: 'Card',
            Nom_marchand: 'Abc Restaurant',
            pays: 'États-Unis',
            Affaire: '1',
            date: '10/12/207',
            imagePath: 'assets/images/info3.jpg'
        }, {
            id: 2 ,
            date_depence: '10/12/2017',
            Nom: 'invoice',
            Categorie: 'Avion',
            value: '140',
            TVA: '',
            moyen_payement: 'Card',
            Nom_marchand: 'Abc',
            pays: 'France',
            Affaire: '1',
            date: '25/10/207',
            imagePath: 'assets/images/info1.jpg'
        }, {
            id: 3 ,
            date_depence: '10/12/2017',
            Nom: 'restaurant-Quebec',
            Categorie: 'Restauration',
            value: '20',
            TVA: '',
            moyen_payement: 'Card',
            Nom_marchand: 'Abc Restaurant',
            pays: 'Canada',
            Affaire: '1',
            date: '9/12/207',
            imagePath: 'assets/images/info2.jpg'
        }
    );
    }


 SaveDemo() {


         for (let Entry of this.Export) {
           this.fiche = this.fiche + Entry.id + ';' + Entry.type + ';' + Entry.date + ';' + Entry.message + '\n' ;
             }

        const ff = new Blob([this.fiche], { type: 'text/csv;charset=utf-8' });
        saveAs(ff, 'helloworld.csv');
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
   var Entet = '' ;

   for (let x of this.Order ) {

        switch (x) {
           case x = 'id':
                 Entet += 'id' + ';' ;
                 break;
            case x = 'type':
                 Entet += 'type' + ';' ;
                 break;
            case x = 'date':
                 Entet += 'date' + ';' ;
                 break;
            case x = 'message':
                 Entet += 'message' + ';' ;
                 break;
            default:
               break;
       }
    }
    this.fiche += Entet + '\n';
}

//return data
private GetData() {
    for (let Entry of this.Export) {
        let Rslt = '';
        for (let x of this.Order ){
           switch (x) {
                case x = 'id':
                    Rslt += Entry.id + ';';
                    break;
                case x = 'type':
                    Rslt += Entry.type + ';' ;
                    break;
                case x = 'date':
                    Rslt += Entry.date + ';' ;
                    break;
                case x = 'message':
                    Rslt += Entry.message + ';' ;
                    break;
                default:
                    break;
            }

        }
        this.fiche  += Rslt + '\n' ;
    }
 }


 ngOnInit() { }

 

}
