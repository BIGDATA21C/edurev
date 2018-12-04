import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../services/data-services.service';
import { CurrentAffairsModel } from '../models/current-affairs-model';

@Component({
  selector: 'app-current-affairs-admin',
  templateUrl: './current-affairs-admin.component.html',
  styleUrls: ['./current-affairs-admin.component.scss']
})
export class CurrentAffairsAdminComponent implements OnInit {

  caList: CurrentAffairsModel[];
  caObj: CurrentAffairsModel;
  newsType: string;
  newsTitle: string;
  newsSubCategory: string;
  currentAffairsDate:Date;
  mainContent:string;

  constructor(public dataService: DataServicesService) {    

  }

  public saveCurrentAffairs(){
    const newCA ={
      newsType:this.newsType,
      newsTitle:this.newsTitle,
      newsSubCategory:this.newsSubCategory,
      currentAffairsDate:this.currentAffairsDate,
      mainContent:this.mainContent
    }
    this.dataService.postData('http://localhost:3000/api/news', newCA).subscribe(
      result => {
        // refresh the list
       // console.log(result.msg);
        return true;
      },
      error => {
        console.log('Error in currentAffairs!');
      });
  }


  ngOnInit() {
  }

}
