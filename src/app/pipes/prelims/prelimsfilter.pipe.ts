import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prelimsfilter'
})
export class PrelimsfilterPipe implements PipeTransform {


  transform(prelimsquestions: any, searchTerm: any): any {
    if (!prelimsquestions || !searchTerm) {
      return prelimsquestions;
  }
 
   let intermediary = prelimsquestions.filter(prelimsquestion => 
    prelimsquestion.Question.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
    prelimsquestion.Year.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 
       );
      let highlightObject = JSON.parse(JSON.stringify(intermediary))
      for(var i in highlightObject)
      {
        highlightObject[i].Question = (highlightObject[i].Question).replace(new RegExp('('+searchTerm+')', 'gi'), '<span class="highlight">'+searchTerm+'</span>');
        highlightObject[i].Year = (highlightObject[i].Year).replace(new RegExp('('+searchTerm+')', 'gi'), '<span class="highlight">'+searchTerm+'</span>');
        
      }
        return highlightObject;
  
    }
  }
