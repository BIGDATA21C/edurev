import { Component, OnInit } from '@angular/core';


import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

/*Mat Table */
import {MatSort, MatTableDataSource} from '@angular/material';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material';


/*Filter */
import {OptionalsPipe} from '../pipes/optionals/optionals.pipe';


@Component({
  selector: 'app-optionals',
  templateUrl: './optionals.component.html',
  styleUrls: ['./optionals.component.scss']
 
})
export class OptionalsComponent implements OnInit {
	
	His_opt_questions:any;
	Geo_Questions:any;
	PubAdQuestions: any;
	SociologyQuestions:any;
	PolSciQuestions:any;
	AnthroQuestions:any;
	
	/*For Table Display */
	displayedColumns: string[] = ['Question', 'Year'];
	dataSource:any;
	
	
	GeotabledataSource:any;
	HistabledataSource:any;
	PubadtabledataSource:any;
	SociotabledataSource:any;
	polscidataSource:any;

	
	

	// https://stackoverflow.com/questions/47271379/multiple-mat-table-with-matsort-within-the-same-component
	// https://stackblitz.com/edit/data-table-multiple-data-source?file=app%2Ftable-pagination-example.ts

	@ViewChild('sortCol1geo') sortCol1geo: MatSort;
	@ViewChild('sortCol2his') sortCol2his: MatSort;
	@ViewChild('sortCol3pubad') sortCol3pubad: MatSort;
	@ViewChild('sortCol4Socio') sortCol4Socio: MatSort;
	@ViewChild('sortCol5PolSci') sortCol5PolSci: MatSort;

// paginator https://github.com/angular/material2/issues/9094
	@ViewChild('geopaginator') geopaginator: MatPaginator;
	@ViewChild('hispaginator') hispaginator: MatPaginator;
	@ViewChild('pubadpaginator') pubadpaginator:MatPaginator;
	@ViewChild('sociopaginator') sociopaginator:MatPaginator;
	@ViewChild('polscipaginator') polscipaginator:MatPaginator;


  constructor(private http: Http,private optionalsPipe: OptionalsPipe) { 
	  
  }
  ngOnInit() {
	
	
		this.loadGeoQuestions().subscribe(response => 
			{
				this.Geo_Questions = response;
				this.GeotabledataSource= new MatTableDataSource(this.Geo_Questions);
				this.GeotabledataSource.sort = this.sortCol1geo;
				this.GeotabledataSource.paginator = this.geopaginator;
				this.geopaginator._intl.itemsPerPageLabel = '/page';
			});

	
	this.loadHisQuestions().subscribe(response => 
	{
		this.His_opt_questions = response;
		this.HistabledataSource= new MatTableDataSource(this.His_opt_questions);
		
	});
	
	
	this.loadPubAdQuestions().subscribe(response => 
		
	{
		this.PubAdQuestions = response;
		this.PubadtabledataSource= new MatTableDataSource(this.PubAdQuestions);
		
	});
	
	this.loadSocioQuestions().subscribe(response => 
		
	{
		this.SociologyQuestions = response;
		this.SociotabledataSource= new MatTableDataSource(this.SociologyQuestions);
		
	});

		this.loadPolSciQuestions().subscribe(response => 
		{
			this.PolSciQuestions = response;
			this.polscidataSource = new MatTableDataSource(this.PolSciQuestions);
			
			/*Data is assigned asynchronouslly here */
		});
			
			
	}

	
	selectedTab = 0;
  loadDynamicContent(event)
  {
	this.selectedTab = event;
console.log('Event'+this.selectedTab);
setTimeout(() => {
	switch(this.selectedTab){
		case 0:
				this.GeotabledataSource.sort = this.sortCol1geo;
				console.log('Data in Geo'+this.HistabledataSource);
				!this.GeotabledataSource.paginator ? this.GeotabledataSource.paginator = this.geopaginator : null;
				
				// this.GeotabledataSource.paginator = this.geopaginator;
				break;
		case 1:
			this.HistabledataSource.sort = this.sortCol2his;
			!this.HistabledataSource.paginator ? this.HistabledataSource.paginator = this.hispaginator : null;
			this.hispaginator._intl.itemsPerPageLabel = '/page';
			break;

		case 2:
			this.PubadtabledataSource.sort = this.sortCol3pubad;
			!this.PubadtabledataSource.paginator ? this.PubadtabledataSource.paginator = this.pubadpaginator : null;
			this.pubadpaginator._intl.itemsPerPageLabel = '/page';
			break;

		case 3:
			this.SociotabledataSource.sort = this.sortCol4Socio;
			!this.SociotabledataSource.paginator ? this.SociotabledataSource.paginator = this.sociopaginator : null;
			this.sociopaginator._intl.itemsPerPageLabel = '/page';
			break;		
		case 4: 
			this.polscidataSource.sort = this.sortCol5PolSci;
			!this.polscidataSource.paginator ? this.polscidataSource.paginator = this.polscipaginator : null;
			this.polscipaginator._intl.itemsPerPageLabel = '/page';
			break;
		case 5:
		console.log('Data in Anth'+this.HistabledataSource);
		

	}
});
  }

	ngAfterViewInit() {
		this.GeotabledataSource.paginator = this.geopaginator;
		this.HistabledataSource.paginator = this.hispaginator;
		this.PubadtabledataSource.paginator= this.pubadpaginator;
		this.SociotabledataSource.paginator=this.sociopaginator;
		this.polscidataSource.paginator=this.polscipaginator;
	}
 
 
/*LOADING JSON QUESTIONS FROM FILES */
 loadGeoQuestions() {
	return this.http.get("../../assets/GeoQ.json")
					.pipe(map(res => res.json()))
	
 }

 loadHisQuestions() {
	return this.http.get("../../assets/historyQ.json")
					.pipe(map(res => res.json()))
	
 }


	loadPubAdQuestions() {
   return this.http.get("../../assets/pubad.json")
                   .pipe(map(res => res.json()))
   
}
loadSocioQuestions() {
   return this.http.get("../../assets/sociology.json")
                   .pipe(map(res => res.json()))
   
}

loadPolSciQuestions() {
   return this.http.get("../../assets/polsci.json")
                   .pipe(map(res => res.json()))
   
}

loadAnthroQuestions() {
	return this.http.get("../../assets/anthro.json")
									.pipe(map(res => res.json()))
	
}

/*APPLY FILTERS -- BEGIN*/

applyGeoFilter(filterValue: string) {
	let geofilteredResult = JSON.parse(JSON.stringify(this.Geo_Questions));
	let geofilteredHighlight = this.optionalsPipe.transform(geofilteredResult, filterValue);
    this.GeotabledataSource= new MatTableDataSource(geofilteredHighlight);
    this.GeotabledataSource.sort = this.sortCol1geo;
    !this.GeotabledataSource.paginator ? this.GeotabledataSource.paginator = this.geopaginator : null;
	this.geopaginator._intl.itemsPerPageLabel = '/page';
	
};

applyHisFilter(filterValue: string) {
	//Before Filter this code // this.HistabledataSource.filter = filterValue.trim().toLowerCase();
	let hisfilteredResult = JSON.parse(JSON.stringify(this.His_opt_questions));
	let hisfilteredHighlight = this.optionalsPipe.transform(hisfilteredResult, filterValue);
    this.HistabledataSource= new MatTableDataSource(hisfilteredHighlight);
    this.HistabledataSource.sort = this.sortCol2his;
    !this.HistabledataSource.paginator ? this.HistabledataSource.paginator = this.hispaginator : null;
	this.hispaginator._intl.itemsPerPageLabel = '/page';

};

applyPubAdFilter(filterValue: string) {
	// Before Filter this code // this.PubadtabledataSource.filter = filterValue.trim().toLowerCase();
	let pubadfilteredResult = JSON.parse(JSON.stringify(this.PubAdQuestions));
	let pubadfilteredHighlight = this.optionalsPipe.transform(pubadfilteredResult, filterValue);
    this.PubadtabledataSource= new MatTableDataSource(pubadfilteredHighlight);
    this.PubadtabledataSource.sort = this.sortCol3pubad;
    !this.PubadtabledataSource.paginator ? this.PubadtabledataSource.paginator = this.pubadpaginator : null;
	this.pubadpaginator._intl.itemsPerPageLabel = '/page';
};

applySocioFilter(filterValue: string) {
	//Before Filter this code // this.SociotabledataSource.filter = filterValue.trim().toLowerCase();
	let sociofilteredResult = JSON.parse(JSON.stringify(this.SociologyQuestions));
	let sociofilteredHighlight = this.optionalsPipe.transform(sociofilteredResult, filterValue);
    this.SociotabledataSource= new MatTableDataSource(sociofilteredHighlight);
    this.SociotabledataSource.sort = this.sortCol4Socio;
    !this.SociotabledataSource.paginator ? this.SociotabledataSource.paginator = this.sociopaginator : null;
	this.sociopaginator._intl.itemsPerPageLabel = '/page';
};

applyPolSciFilter(filterValue: string) {
	//Before Filter this code //this.polscidataSource.filter = filterValue.trim().toLowerCase();
	let polscifilteredResult = JSON.parse(JSON.stringify(this.PolSciQuestions));
	let polscifilteredHighlight = this.optionalsPipe.transform(polscifilteredResult, filterValue);
    this.polscidataSource= new MatTableDataSource(polscifilteredHighlight);
    this.polscidataSource.sort = this.sortCol5PolSci;
    !this.polscidataSource.paginator ? this.polscidataSource.paginator = this.polscipaginator : null;
	this.polscipaginator._intl.itemsPerPageLabel = '/page';
};

/*APPLY FILTERS - END */




}
