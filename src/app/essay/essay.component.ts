import { Component, OnInit } from '@angular/core';
import {EssayfilterPipe} from '../pipes/essay/essayfilter.pipe';


import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';


/*Mat Table */
import {MatSort, MatTableDataSource} from '@angular/material';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material';



@Component({
  selector: 'app-essay',
  templateUrl: './essay.component.html',
  styleUrls: ['./essay.component.scss'],
  
})

export class EssayComponent implements OnInit {
	
	essayQuestions:any;
	essaytabledataSource:any;
	searchQuestion:any;

	/*For Table Display */
	displayedColumns: string[] = ['Question', 'Year'];

	/*For Data Sort and Pagination */
 	@ViewChild('sortessay') sortessay: MatSort;
	@ViewChild('essaypaginator') essaypaginator: MatPaginator;
	

  constructor(private http: Http,private essayfilterPipe: EssayfilterPipe) { }

  ngOnInit() {
	this.loadessayQuestions().subscribe(response => 
		{
			this.essayQuestions = response;
			this.essaytabledataSource= new MatTableDataSource(this.essayQuestions);
			this.essaytabledataSource.sort = this.sortessay;
			this.essaytabledataSource.paginator = this.essaypaginator;
			this.essaypaginator._intl.itemsPerPageLabel = '/page';
		});

  }
  loadessayQuestions() {
	return this.http.get("../../assets/Essay/essay.json")
					.pipe(map(res => res.json()))
	
	}
	
	applyessayfilter(filterValue: string) {

		let essayfilteredResult = JSON.parse(JSON.stringify(this.essayQuestions));
		let essayfilteredHighlight = this.essayfilterPipe.transform(essayfilteredResult, filterValue);
		this.essaytabledataSource= new MatTableDataSource(essayfilteredHighlight);
		this.essaytabledataSource.sort = this.sortessay;
		!this.essaytabledataSource.paginator ? this.essaytabledataSource.paginator = this.essaypaginator : null;
		this.essaypaginator._intl.itemsPerPageLabel = '/page';
};


 

}
