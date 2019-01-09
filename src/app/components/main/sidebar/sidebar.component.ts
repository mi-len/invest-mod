import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  openMenu_smetki: boolean
  openMenu_plati: boolean
  constructor() {
    this.openMenu_smetki = true
    this.openMenu_plati = false
  }
  ngOnInit() {
  }

  // toggleMenu_smetki (e) {
  //   event.preventDefault()
  //   this.openMenu_smetki = !this.openMenu_smetki
  //   // console.log('toggle ', e.path[0].ElementRef);
  // }

  // checkForActive(e) {
  //   e.path[1].classList.forEach(element => {
  //     if(element == 'active-link-sub') {
  //       return true
  //     } else {
  //       return false
  //     }
  //   })
  // }

  toggleMenu(event) {
    // let menuUl = event.target.nextElementSibling
    let classes = event.target.nextElementSibling.className
    if(classes.search('closeNav') !== -1) {
      classes = classes.replace('closeNav', 'openNav')
    } else {
      classes = classes.replace('openNav', 'closeNav')
    }
    event.target.nextElementSibling.className = classes
  }

}
