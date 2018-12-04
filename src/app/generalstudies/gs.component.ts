import { Component, OnInit } from '@angular/core';
import {GeneralstudiesPipe} from '../pipes/generalstudies/generalstudies.pipe';


import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

/*Mat Table */
import {MatSort, MatTableDataSource} from '@angular/material';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material';


@Component({
  selector: 'app-gs',
  templateUrl: './gs.component.html',
  styleUrls: ['./gs.component.scss']
})
export class GSComponent implements OnInit {

	gs1Questions:any;
	gs2Questions:any;
	gs3Questions: any;
	gs4Questions:any;
	
	/*For Table Display */
	displayedColumns: string[] = ['Question', 'Year'];
	dataSource:any;
	
	
	gs1tabledataSource:any;
	gs2tabledataSource:any;
	gs3tabledataSource:any;
	gs4tabledataSource:any;

	@ViewChild('sortCol1gs1') sortCol1gs1: MatSort;
	@ViewChild('sortCol2gs2') sortCol2gs2: MatSort;
	@ViewChild('sortCol3gs3') sortCol3gs3: MatSort;
	@ViewChild('sortCol4gs4') sortCol4gs4: MatSort;
	
	
// paginator https://github.com/angular/material2/issues/9094
	@ViewChild('gs1paginator') gs1paginator: MatPaginator;
	@ViewChild('gs2paginator') gs2paginator: MatPaginator;
	@ViewChild('gs3paginator') gs3paginator:MatPaginator;
	@ViewChild('gs4paginator') gs4paginator:MatPaginator;
	

   constructor(	private http: Http,private generalstudiesPipe: GeneralstudiesPipe  ) { 	  
  }


  ngOnInit() {
	
	
	this.loadgs1Questions().subscribe(response => 
		{
			this.gs1Questions = response;
			this.gs1tabledataSource= new MatTableDataSource(this.gs1Questions);
			this.gs1tabledataSource.sort = this.sortCol1gs1;
			this.gs1tabledataSource.paginator = this.gs1paginator;
			this.gs1paginator._intl.itemsPerPageLabel = '/page';
		});


this.loadgs2Questions().subscribe(response => 
{
	this.gs2Questions = response;
	this.gs2tabledataSource= new MatTableDataSource(this.gs2Questions);
	this.gs1paginator._intl.itemsPerPageLabel = '/page';
});


this.loadgs3Questions().subscribe(response => 
	
{
	this.gs3Questions = response;
	this.gs3tabledataSource= new MatTableDataSource(this.gs3Questions);
	this.gs1paginator._intl.itemsPerPageLabel = '/page';
});

this.loadgs4Questions().subscribe(response => 
	
{
	this.gs4Questions = response;
	this.gs4tabledataSource= new MatTableDataSource(this.gs4Questions);
	this.gs1paginator._intl.itemsPerPageLabel = '/page';
});

	
		
}


selectedTab = 0;
loadDynamicContent(event)
{
this.selectedTab = event;

setTimeout(() => {
switch(this.selectedTab){
	case 0:
			this.gs1tabledataSource.sort = this.sortCol1gs1;
			
			!this.gs1tabledataSource.paginator ? this.gs1tabledataSource.paginator = this.gs1paginator : null;
			this.gs1paginator._intl.itemsPerPageLabel = '/page';
			break;
	case 1:
		this.gs2tabledataSource.sort = this.sortCol2gs2;
		!this.gs2tabledataSource.paginator ? this.gs2tabledataSource.paginator = this.gs2paginator : null;
		this.gs2paginator ._intl.itemsPerPageLabel = '/page';
		break;

	case 2:
		this.gs3tabledataSource.sort = this.sortCol3gs3;
		!this.gs3tabledataSource.paginator ? this.gs3tabledataSource.paginator = this.gs3paginator : null;
		this.gs3paginator._intl.itemsPerPageLabel = '/page';
		break;

	case 3:
		this.gs4tabledataSource.sort = this.sortCol4gs4;
		!this.gs4tabledataSource.paginator ? this.gs4tabledataSource.paginator = this.gs4paginator : null;
		
		this.gs4paginator._intl.itemsPerPageLabel = '/page';break;		
	case 4: 
		break;
	

}
});
}

ngAfterViewInit() {
	this.gs1tabledataSource.paginator = this.gs1paginator;
	this.gs2tabledataSource.paginator = this.gs2paginator;
	this.gs3tabledataSource.paginator= this.gs3paginator;
	this.gs4tabledataSource.paginator=this.gs4paginator;
}



/*LOADING JSON QUESTIONS FROM FILES */
loadgs1Questions() {
return this.http.get("../../assets/GS/GS1.json")
				.pipe(map(res => res.json()))

}

loadgs2Questions() {
return this.http.get("../../assets/GS/GS2.json")
				.pipe(map(res => res.json()))

}


loadgs3Questions() {
return this.http.get("../../assets/GS/GS3.json")
			   .pipe(map(res => res.json()))

}
loadgs4Questions() {
return this.http.get("../../assets/GS/GS4.json")
			   .pipe(map(res => res.json()))

}



/*APPLY FILTERS -- BEGIN*/

applygs1Filter(filterValue: string) {

let gs1filteredResult = JSON.parse(JSON.stringify(this.gs1Questions));
let gs1filteredHighlight = this.generalstudiesPipe.transform(gs1filteredResult, filterValue);
this.gs1tabledataSource= new MatTableDataSource(gs1filteredHighlight);
this.gs1tabledataSource.sort = this.sortCol1gs1;
!this.gs1tabledataSource.paginator ? this.gs1tabledataSource.paginator = this.gs1paginator : null;
this.gs1paginator._intl.itemsPerPageLabel = '/page';

};

applygs2Filter(filterValue: string) {
// this.gs2tabledataSource.filter = filterValue.trim().toLowerCase();
let gs2filteredResult = JSON.parse(JSON.stringify(this.gs2Questions));
let gs2filteredHighlight = this.generalstudiesPipe.transform(gs2filteredResult, filterValue);
this.gs2tabledataSource= new MatTableDataSource(gs2filteredHighlight);
this.gs2tabledataSource.sort = this.sortCol2gs2;
!this.gs2tabledataSource.paginator ? this.gs2tabledataSource.paginator = this.gs2paginator : null;
this.gs2paginator._intl.itemsPerPageLabel = '/page';
};

applygs3Filter(filterValue: string) {
// this.gs3tabledataSource.filter = filterValue.trim().toLowerCase();
let gs3filteredResult = JSON.parse(JSON.stringify(this.gs3Questions));
let gs3filteredHighlight = this.generalstudiesPipe.transform(gs3filteredResult, filterValue);
this.gs3tabledataSource= new MatTableDataSource(gs3filteredHighlight);
this.gs3tabledataSource.sort = this.sortCol3gs3;
!this.gs3tabledataSource.paginator ? this.gs3tabledataSource.paginator = this.gs3paginator : null;
this.gs3paginator._intl.itemsPerPageLabel = '/page';
};

applygs4Filter(filterValue: string) {
// this.gs4tabledataSource.filter = filterValue.trim().toLowerCase();
let gs4filteredResult = JSON.parse(JSON.stringify(this.gs4Questions));
let gs4filteredHighlight = this.generalstudiesPipe.transform(gs4filteredResult, filterValue);
this.gs4tabledataSource= new MatTableDataSource(gs4filteredHighlight);
this.gs4tabledataSource.sort = this.sortCol3gs3;
!this.gs4tabledataSource.paginator ? this.gs4tabledataSource.paginator = this.gs4paginator : null;
this.gs4paginator._intl.itemsPerPageLabel = '/page';
};

/*APPLY FILTERS - END */

}


