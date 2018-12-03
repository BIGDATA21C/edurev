import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'optionals'
})
export class OptionalsPipe implements PipeTransform {

  
  transform(optionalquestions: any, searchTerm: any): any {
    if (!optionalquestions || !searchTerm) {
      return optionalquestions;
  }
 
   let intermediary = optionalquestions.filter(optionalquestion => 
    optionalquestion.Question.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
    optionalquestion.Year.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 
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