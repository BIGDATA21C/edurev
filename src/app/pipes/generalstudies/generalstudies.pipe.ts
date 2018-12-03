import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generalstudies'
})
export class GeneralstudiesPipe implements PipeTransform {

  transform(gsquestions: any, searchTerm: any): any {
    if (!gsquestions || !searchTerm) {
      return gsquestions;
  }
 
   let intermediary = gsquestions.filter(gsquestion => 
    gsquestion.Question.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
    gsquestion.Year.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 
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
