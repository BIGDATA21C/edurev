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
  
    quotes: Quotes[];
    quote: Quotes;
  
  
  
    /*Sorting and Pagination */
    @ViewChild('sortQuotes') sortQuotes: MatSort;
    @ViewChild('quotespaginator') quotespaginator: MatPaginator;



  constructor(private http: Http, private quotesService: QuotesService, private quotesPipe: QuotesPipe) { }

  ngOnInit() {
    this.quotesService.getQuotes().subscribe(response=>
      {
        this.quotesfromDB = response;
        this.quotestabledataSource= new MatTableDataSource(this.quotesfromDB);
        this.quotestabledataSource.sort = this.sortQuotes;
        this.quotestabledataSource.paginator = this.quotespaginator;
        this.quotespaginator._intl.itemsPerPageLabel = '/page';
        this.quotes = response;
        
      });

  } /*End of ngOnInit Function */

  ngAfterViewInit() {
	
    this.quotestabledataSource.paginator = this.quotespaginator;
  } /*End of ngAfterViewInit Function */
  




  addquotes()
  {
    const newQuote = { 
      author:this.author,
      category:this.category,
      quotedesc:this.quotedesc
    }

    // Invokes the Service and inturn hit the DB
    console.log('quotedesc'+newQuote.quotedesc);
    this.quotesService.addQuote(newQuote).subscribe(quote => { 
      this.quotes.push(quote); 
    }); 
  
  }/*End of addquotes() method*/ 



  // Store Data from DB and Display in MAT Tables
  
  quotesfromDB:any;

  /*For Table Display */
  displayedColumns: string[] = [ 'Quotesdesc', 'Author', 'Category'];
  quotestabledataSource:any;

  selectedTab = 0;
  
loadDynamicContent(event)
{
this.selectedTab = event;

setTimeout(() => {
switch(this.selectedTab){
  
  case 0:
		break;
 
  case 1:
  this.quotesService.getQuotes().subscribe(response=>
    {
      this.quotesfromDB = response;
      this.quotestabledataSource= new MatTableDataSource(this.quotesfromDB);
      this.quotes = response;
      
    });
		break;
    
    case 2:
    this.quotesService.getQuotes().subscribe(response=>
      {
        this.quotesfromDB = response;
        this.quotestabledataSource= new MatTableDataSource(this.quotesfromDB);
        this.quotes = response;
        
      });
    break;
}
});
} /*End of loadDynamicContent Function */





deleteQuote(id:any)
{
  var quotes = this.quotes;
  this.quotesService.deleteQuote(id)
  .subscribe(data=>{
    if(data.n==1)
    {
      for(var i=0;i< quotes.length;i++)
      {
        if(quotes[i]._id==id)
        {
          quotes.splice(i,1);
        }
      }
    }
  }); //end of deleteQuote( fiunction

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