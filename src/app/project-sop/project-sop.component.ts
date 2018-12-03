import { Component, OnInit } from '@angular/core';

/*Standard Operating Procedure (Sop) related schema and Sop Service*/
import {Sop} from '../models/sop'; 
import { SopService } from "../sop.service";



/*Mat Table */
import {MatSort, MatTableDataSource} from '@angular/material';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material';

/*Modules required to load Data from a file/DB */
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

/*Filter */
import {ProjectsopPipe} from '../projectsop.pipe';



@Component({
  selector: 'app-project-sop',
  templateUrl: './project-sop.component.html',
  styleUrls: ['./project-sop.component.scss']
})
export class ProjectSOPComponent implements OnInit {

  projectrequirements:any;

  /*For Table Display */
  displayedColumns: string[] = [ 'Feature', 'Category','Subcategory'];
  projecttabledataSource:any;
  

/*Sorting and Pagination */
  @ViewChild('sortDate') sortDate: MatSort;
  @ViewChild('projectpaginator') projectpaginator: MatPaginator;
  


/*FOR STORING AN SOP */
category:any;
subcategory:any;
description:any;
sops: Sop[];
sop: Sop;

toHighlight: any;

constructor(private http: Http, public sopService: SopService, public projectsopPipe: ProjectsopPipe) { }

  ngOnInit() {
    /*This loads from a file */ // this.loadrequirements().subscribe(response =>  
    /*This loads from DB */
    this.sopService.getSops().subscribe(response=>
      {
        this.projectrequirements = response;
        this.projecttabledataSource= new MatTableDataSource(this.projectrequirements);
        this.projecttabledataSource.sort = this.sortDate;
        this.projecttabledataSource.paginator = this.projectpaginator;
        this.projectpaginator._intl.itemsPerPageLabel = '/page';
        this.sops = response;
        
      });
      


  } /*End of ngOnInit Function */

selectedTab = 0;
loadDynamicContent(event)
{
this.selectedTab = event;

setTimeout(() => {
switch(this.selectedTab){
	case 0:
			this.projecttabledataSource.sort = this.sortDate;
			!this.projecttabledataSource.paginator ? this.projecttabledataSource.paginator = this.projectpaginator : null;
			this.projectpaginator._intl.itemsPerPageLabel = '/page';
			break;
	case 1:
		
		break;
}
});
} /*End of loadDynamicContent Function */

ngAfterViewInit() {
	this.projecttabledataSource.paginator = this.projectpaginator;

} /*End of ngAfterViewInit Function */



  applyprojectsfilter(filterValue: string) {

        let filteredResult = JSON.parse(JSON.stringify(this.projectrequirements));
        let filteredHighlight = this.projectsopPipe.transform(filteredResult, filterValue);
        this.projecttabledataSource= new MatTableDataSource(filteredHighlight);
        this.projecttabledataSource.sort = this.sortDate;
        !this.projecttabledataSource.paginator ? this.projecttabledataSource.paginator = this.projectpaginator : null;
        this.projectpaginator._intl.itemsPerPageLabel = '/page';

        
  }; /*End of  applyprojectsfilter method*/




  addsop()
  {
    const newSop = { 
      category:this.category,
      subcategory:this.subcategory,
      description:this.description
    }
    this.sopService.addSop(newSop).subscribe(sop=> { 
      this.sops.push(sop); 
    }); 
    
    this.sopService.getSops().subscribe(sops =>    this.sops = sops);

  }/*End of addsop() method*/ 


  deleteSop(id:any)
  {
    var sops = this.sops;
    this.sopService.deleteSop(id)
    .subscribe(data=>{
      if(data.n==1)
      {
        for(var i=0;i< sops.length;i++)
        {
          if(sops[i]._id==id)
          {
            sops.splice(i,1);
          }
        }
      }
    }); //end of deleteSop( fiunction

  }



  
}  /*End of export class PrelimsdisplayComponent implements OnInit  Function */
