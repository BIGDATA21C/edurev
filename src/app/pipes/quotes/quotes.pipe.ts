import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quotes'
})
export class QuotesPipe implements PipeTransform {

  transform(quotes: any, searchTerm: any): any {
    if (!quotes || !searchTerm) {
      return quotes;
    }
    
   let intermediary = quotes.filter(quote => 
    quote.quotedesc.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
    quote.author.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
    quote.category.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 
       );
      let highlightObject = JSON.parse(JSON.stringify(intermediary))
      for(var i in highlightObject)
      {
        highlightObject[i].quotedesc = (highlightObject[i].quotedesc).replace(new RegExp('('+searchTerm+')', 'gi'), '<span class="highlight">'+searchTerm+'</span>');
        highlightObject[i].author = (highlightObject[i].author).replace(new RegExp('('+searchTerm+')', 'gi'), '<span class="highlight">'+searchTerm+'</span>');
        highlightObject[i].category = (highlightObject[i].category).replace(new RegExp('('+searchTerm+')', 'gi'), '<span class="highlight">'+searchTerm+'</span>');
        
      }
        return highlightObject;
  
    }


}
