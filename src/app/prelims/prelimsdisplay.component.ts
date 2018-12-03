import { Component, OnInit } from '@angular/core';

import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';


/*Mat Table */
import {MatSort, MatTableDataSource} from '@angular/material';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material';


/*Filter */
import {PrelimsfilterPipe} from '../pipes/prelims/prelimsfilter.pipe';


@Component({
  selector: 'app-prelimsdisplay',
  templateUrl: './prelimsdisplay.component.html',
  styleUrls: ['./prelimsdisplay.component.scss']
})
export class PrelimsdisplayComponent implements OnInit {

  constructor(private http: Http,  private prelimsfilterPipe: PrelimsfilterPipe) { }

  gsQuestions:any;

  /*For Table Display */
  displayedColumns: string[] = ['Question', 'Year'];
  gstabledataSource:any;
  
  @ViewChild('sortCol1gs') sortCol1gs: MatSort;

  // paginator https://github.com/angular/material2/issues/9094
  @ViewChild('gspaginator') gspaginator: MatPaginator;
  
  

  ngOnInit() {
    this.loadgsQuestions().subscribe(response => 
      {
        this.gsQuestions = response;
        this.gstabledataSource= new MatTableDataSource(this.gsQuestions);
        this.gstabledataSource.sort = this.sortCol1gs;
        this.gstabledataSource.paginator = this.gspaginator;
        this.gspaginator._intl.itemsPerPageLabel = '/page';
      });

  } /*End of ngOnInit Function */

selectedTab = 0;
loadDynamicContent(event)
{
this.selectedTab = event;

setTimeout(() => {
switch(this.selectedTab){
	case 0:
			this.gstabledataSource.sort = this.sortCol1gs;
			!this.gstabledataSource.paginator ? this.gstabledataSource.paginator = this.gspaginator : null;
			this.gspaginator._intl.itemsPerPageLabel = '/page';
			break;
	case 1:
		
		break;
}
});
} /*End of loadDynamicContent Function */

ngAfterViewInit() {
	this.gstabledataSource.paginator = this.gspaginator;

} /*End of ngAfterViewInit Function */

/*LOADING JSON QUESTIONS FROM FILES */
loadgsQuestions() {
  return this.http.get("../../assets/Prelims/gsprelims.json")
          .pipe(map(res => res.json()))
  
  } /*End of loadgsQuestions Function */


  applygsFilter(filterValue: string) {
    let filteredResult = JSON.parse(JSON.stringify(this.gsQuestions));
    let filteredHighlight = this.prelimsfilterPipe.transform(filteredResult, filterValue);
    this.gstabledataSource= new MatTableDataSource(filteredHighlight);
    this.gstabledataSource.sort = this.sortCol1gs;
    !this.gstabledataSource.paginator ? this.gstabledataSource.paginator = this.gspaginator : null;
    this.gspaginator._intl.itemsPerPageLabel = '/page';

  };


}/*End of export class PrelimsdisplayComponent implements OnInit  Function */
