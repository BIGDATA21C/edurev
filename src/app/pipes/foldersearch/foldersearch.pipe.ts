import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foldersearch'
})
export class FoldersearchPipe implements PipeTransform {

  transform(docs: any, searchTerm: any): any {
    if (!docs || !searchTerm) {
      return docs;
  }
 
   let temp = docs.filter(doc => 
       doc.Folder.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
       doc.File.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 
       );
      let highlightObject = JSON.parse(JSON.stringify(temp))
      for(var i in highlightObject)
      {
        highlightObject[i].Folder = (highlightObject[i].Folder).replace(new RegExp('('+searchTerm+')', 'gi'), '<span class="highlight">'+searchTerm+'</span>');
        highlightObject[i].File = (highlightObject[i].File).replace(new RegExp('('+searchTerm+')', 'gi'), '<span class="highlight">'+searchTerm+'</span>');
        
      }
        return highlightObject;
  
    }
}
