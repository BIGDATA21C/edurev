import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-side-nav',
  templateUrl: './left-side-nav.component.html',
  styleUrls: ['./left-side-nav.component.scss']
})
export class LeftSideNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


   public leftSideNavList = [     
    { "id": "1", "name": "Introduction", "componentRoutePath":"/history-overview" },
    { "id": "2", "name": "History Harappa", "componentRoutePath":"/history-harappa","hasChildrens":"yes", data:[
        { "id": "101", "name": "Introduction", "componentRoutePath":"/history-harappa"},
        { "id": "102", "name": "Politico-Admin", "componentRoutePath":"/harappa-politico-admin"},
        { "id": "103", "name": "Economy", "componentRoutePath":"/harappa-economy"},
        { "id": "104", "name": "Religion", "componentRoutePath":"/harappa-religion"},
        { "id": "105", "name": "S&T", "componentRoutePath":"/harappa-s-t"}
      ]
    },
    { "id": "3", "name": "Vedic Age", "componentRoutePath":"/history-vedic-age" },
    { "id": "4", "name": "Mahajanapadas", "componentRoutePath":"/history-mahajanapadas" },
    { "id": "5", "name": "Mauryan History", "componentRoutePath":"/history-mauryan" },
    { "id": "6", "name": "Post-Mauryan Period", "componentRoutePath":"/history-post-mauryan-period" },
    { "id": "7", "name": "Gupta Age", "componentRoutePath":"/history-gupta-age" },
    { "id": "8", "name": "Post-Guptas", "componentRoutePath":"/history-post-guptas" },
    { "id": "9", "name": "Early Medieval Age", "componentRoutePath":"/history-early-medieval-age" },
    { "id": "10", "name": "Delhi Sultanates", "componentRoutePath":"/history-delhi-sultanates" },
    { "id": "11", "name": "Mughal Era", "componentRoutePath":"/history-mughal-era" },
    { "id": "12", "name": "Vijayanagara Empire", "componentRoutePath":"/history-vijayanagara-empire" },
    { "id": "13", "name": "Marathas", "componentRoutePath":"/history-marathas" },
    { "id": "14", "name": "British Conquest", "componentRoutePath":"/history-british-conquest" },
    { "id": "15", "name": "Freedom Struggle", "componentRoutePath":"/history-freedom-struggle" }
  ]
  
  classToAplly:boolean=true;
  componentClickHandler(event) {
    if(event.currentTarget.innerText=='History Harappa' ){
      if(!this.classToAplly){
        this.classToAplly=true;
      }else{
        this.classToAplly=false;
      }
    }else{
      this.classToAplly=false;
    }
  
  }

}
