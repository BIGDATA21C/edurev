import { Component, OnInit } from '@angular/core';

/*Quote related schema and Quote Service*/
import {Quotes} from '../models/quotes'; 
import { QuotesService } from "../services/quotes/quotes.service";

/*Modules required to load Data from a file/DB */
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';


/*Mat Table */
import {MatSort, MatTableDataSource} from '@angular/material';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material';


/*Filter */
import {QuotesPipe} from '../pipes/quotes/quotes.pipe';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

    /*FOR STORING A QUOTE */
    author:any;
    category:any;
    quotedesc:any;

    updateauthor:any;
    updatecategory:any;
    updatequotedesc:any;
    updateDivStatus:boolean = false;
    collapsed1:boolean = false;
    quotes: Quotes[];
    quote: Quotes;
  
  
  
/*Sorting and Pagination */
@ViewChild('sortQuotes') sortQuotes: MatSort;
@ViewChild('quotespaginator') quotespaginator: MatPaginator;

  // Store Data from DB and Display in MAT Tables
  quotesfromDB:any;

  /*For Table Display */
  displayedColumns: string[] = [ 'quotedesc', 'author'];
  quotestabledataSource:any;


  constructor(private http: Http, private quotesService: QuotesService, private quotesPipe: QuotesPipe) { }

  ngOnInit() {
    this.LoadQuotesfile().subscribe(response=>
      {
        this.quotesfromDB = response;
        this.quotestabledataSource= new MatTableDataSource(this.quotesfromDB);

        this.quotestabledataSource.sort = this.sortQuotes;
        this.quotestabledataSource.paginator = this.quotespaginator;
        this.quotespaginator._intl.itemsPerPageLabel = '/page';
        this.quotes = response;
        
      });

  } /*End of ngOnInit Function */
 
    


  LoadQuotesfile() {
	return this.http.get("../../assets/Quotes/quotes.json").pipe(map(res => res.json()))
	}

applyquotesfilter(filterValue: string) {

  let quotesfilteredResult = JSON.parse(JSON.stringify(this.quotesfromDB));
  let quotesfilteredHighlight = this.quotesPipe.transform(quotesfilteredResult, filterValue);
  this.quotestabledataSource= new MatTableDataSource(quotesfilteredHighlight);
  this.quotestabledataSource.sort = this.sortQuotes;
  !this.quotestabledataSource.paginator ? this.quotestabledataSource.paginator = this.quotespaginator : null;
  this.quotespaginator._intl.itemsPerPageLabel = '/page';

}; /*End of  applyquotesfilter method*/


}
