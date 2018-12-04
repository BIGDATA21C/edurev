import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectsop'
})
export class ProjectsopPipe implements PipeTransform {

  transform(sops: any, searchTerm: any): any {
    if (!sops || !searchTerm) {
        return sops;
    }
   
     let temp = sops.filter(sop => 
         sop.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
         sop.category.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
         sop.subcategory.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 
         );
        let highlightObject = JSON.parse(JSON.stringify(temp))
        for(var i in highlightObject)
        {
          highlightObject[i].description = (highlightObject[i].description).replace(new RegExp('('+searchTerm+')', 'gi'), '<span class="highlight">'+searchTerm+'</span>');
          highlightObject[i].category = (highlightObject[i].category).replace(new RegExp('('+searchTerm+')', 'gi'), '<span class="highlight">'+searchTerm+'</span>');
          highlightObject[i].subcategory = (highlightObject[i].subcategory).replace(new RegExp('('+searchTerm+')', 'gi'), '<span class="highlight">'+searchTerm+'</span>');
          
        }
          return highlightObject;
}
}
