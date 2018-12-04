import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'essayfilter'
})
export class EssayfilterPipe implements PipeTransform {

  
  transform(essays: any, searchTerm: any): any {
    if (!essays || !searchTerm) {
        return essays;
    }
    
     let temp = essays.filter(essay => 
         essay.Question.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
         essay.Year.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
         );
       


        let highlightObject = JSON.parse(JSON.stringify(temp))
        for(var i in highlightObject)
        {
         
          highlightObject[i].Question = (highlightObject[i].Question).replace(new RegExp('('+searchTerm+')', 'gi'), '<span class="highlight">'+searchTerm+'</span>');
          highlightObject[i].Year = (highlightObject[i].Year).replace(new RegExp('('+searchTerm+')', 'gi'), '<span class="highlight">'+searchTerm+'</span>');
                        
        }

          return highlightObject;
     }
}



