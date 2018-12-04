import { Component, OnInit } from '@angular/core';


import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';


/*Mat Table */
import {MatSort, MatTableDataSource} from '@angular/material';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material';

/*Filter */
import {FoldersearchPipe} from '../pipes/foldersearch/foldersearch.pipe';


@Component({
  selector: 'app-foldersearch',
  templateUrl: './foldersearch.component.html',
  styleUrls: ['./foldersearch.component.scss']
})
export class FoldersearchComponent implements OnInit {


  gsQuestions:any;
  /*For Table Display */
  displayedColumns: string[] = ['Folder', 'File'];
  gstabledataSource:any;
  
  /*GIT DATA LOAD */
  gitData:any;
  gittabledataSource:any;

  @ViewChild('sortCol1gs') sortCol1gs: MatSort;

  // paginator https://github.com/angular/material2/issues/9094
  @ViewChild('gspaginator') gspaginator: MatPaginator;
  
  constructor(private http: Http, private foldersearchPipe: FoldersearchPipe) { }

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
  return this.http.get("http://localhost:4200/assets/Search/foldersearch.json")
          .pipe(map(res => res.json()))
  
  } /*End of loadgsQuestions Function */


  applygsFilter(filterValue: string) {
    
    let filteredResult = JSON.parse(JSON.stringify(this.gsQuestions));
        let filteredHighlight = this.foldersearchPipe.transform(filteredResult, filterValue);
        this.gstabledataSource= new MatTableDataSource(filteredHighlight);
        this.gstabledataSource.sort = this.sortCol1gs;
        !this.gstabledataSource.paginator ? this.gstabledataSource.paginator = this.gspaginator : null;
        this.gspaginator._intl.itemsPerPageLabel = '/page';

       
  
  }; /*END of applygsFilter */

  applygitFilter(filterValue: string) {
    this.gittabledataSource.filter = filterValue.trim().toLowerCase();
  };


}/*End of export class PrelimsdisplayComponent implements OnInit  Function */

