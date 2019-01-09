import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts = [
    { name: 'Разплащателна сметка 1',
      BIC: 'BG08UNCR70004521009973',
      value: 1500,
      cardsCount: 0
    },
    { name: 'Разплащателна сметка с 2 карти',
      BIC: 'BG08UNCR70004521009973',
      value: 2000,
      cardsCount: 2,
      cards: [
        {
          type: 'VISA Classic',
          number: '1234567812345678'
        },
        {
          type: 'VISA Electron',
          number: '1234567812345678'
        }
      ]
    },
    { name: 'Спестовна сметка',
      BIC: 'BG08UNCR70004521009973',
      value: 3250
    }
  ]
  listTemplate:any
  gridTemplate:any
  grid:boolean
  constructor() {
    this.grid = false;
    this.listTemplate = `"accounts accounts notif" "accounts accounts trans"`

    this.gridTemplate = `"notif notif notif" "accounts accounts accounts" "trans trans trans"` 
   }

   changeGrid(ev) {
     this.grid = !this.grid
    //  console.log('changeGrid call  /grid-> ', this.grid)
    //  console.log(ev);
    if(ev.path[1].nextElementSibling) {
      ev.path[1].nextElementSibling.classList.toggle('grid-list-toggle')
      ev.path[1].classList.toggle('grid-list-toggle')
    } else if (ev.path[1].previousElementSibling) {
      ev.path[1].classList.toggle('grid-list-toggle')
      ev.path[1].previousElementSibling.classList.toggle('grid-list-toggle')
    }
   }



   gridAccountsStyles() {
     if(this.grid) {
      return {
        'grid-template-columns': '1fr 1fr 1fr;',
        'grid-template-areas': 
        '"card card card"'
      }
     } else {
      return {
        'grid-template-columns': '1fr;',
        'grid-template-areas': 
        '"card"'
      }
     }

    
      // return {
      //   'border': '23px solid black;',
      //   'background-color': 'red',
      //   'color': 'yellow'
      // }
    
   }

  ngOnInit() {
  }

}
