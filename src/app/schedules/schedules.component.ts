import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {GridOptions} from 'ag-grid';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {
  public gridOptions: GridOptions;
  public courseData: any = {};
  @ViewChild('scheduleDetails') scheduleDetails: ElementRef;

  constructor(private modalService: NgbModal) {
    
    this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = [
            {
                headerName: 'Course ID',
                field: 'courseId'
            },
            {
                headerName: 'Course Name',
                field: 'courseName'
            },
            {
                headerName: 'Course Type',
                field: 'courseType'
            },
            {
                headerName: 'Author',
                field: 'expertFaculty'
            },
            {
                headerName: 'Date',
                field: 'commencementDate'
            },
            {
                headerName: 'Fees',
                field: 'courseFee'
            },
            {
                headerName: '',
                field: 'more',
                pinned: 'right',
                width: 70,
                cellRenderer: this.customCellRendererFunc
            }
        ];
        this.gridOptions.rowData = [
            {
                'courseId':'10003',
             'courseType':'Integrated',
               'courseName': 'Prelims Cum Mains Foundation', 
               'duration': '15 Months',
               'commencementDate': 'July 16, 2018',
               'expertFaculty':'Insight Team',
               'courseFee': '154500',
               'subject':'','offerPercent':'10',
               'id':'prelims-st',
                 'description':'Course that will enrich your capability to clear PRELIMS and score more than 500 marks in MAINS exam.',
                 'subDescription':['Get conceptual clarity','Daily Answer writing','Clear Prelims with good score','Boost your Mains score']  
            },
           
           {	  
            'courseId':'10043',
             'courseType':'Integrated',
               'courseName': 'Prelims Cum Mains Weekend Course', 
               'duration': '12 Months',
               'commencementDate': 'July 16, 2018',
             'expertFaculty':'Insight Team',
               'courseFee': '98500',
             'subject': '','offerPercent':'10',
             'id':'Historyculture' ,
             'description':'Course that will enrich your capability to clear PRELIMS and score more than 500 marks in MAINS exam.',
             'subDescription':['Get conceptual clarity','Daily Answer writing','Clear Prelims with good score','Boost your Mains score']  
            },
            
            {
                'courseId':'10004',
               'courseType':'Integrated',
             'courseName': 'Mains Examination Course', 
               'duration': '8 Months',
               'commencementDate': 'July 16, 2018',
             'expertFaculty':'Insight Team',
               'courseFee': '124000',
             'subject': '','offerPercent':'10',
             'id':'gs-exclusive' ,
             'description':'Course that will enrich your capability to clear PRELIMS and score more than 500 marks in MAINS exam.',
             'subDescription':['Get conceptual clarity','Daily Answer writing','Clear Prelims with good score','Boost your Mains score']  
            },
            {
                'courseId':'10005',
               'courseType':'Integrated',
             'courseName': 'Mains 2018 Special Batch', 
               'duration': '12 Weeks',
               'commencementDate': 'July 16, 2018',
             'expertFaculty':'Insight Team',
               'courseFee': '48500',
             'subject': '','offerPercent':'10' ,
             'id':'current-affairs',
             'description':'Course that will enrich your capability to clear PRELIMS and score more than 500 marks in MAINS exam.',
             'subDescription':['Get conceptual clarity','Daily Answer writing','Clear Prelims with good score','Boost your Mains score']  
            },
            {
                'courseId':'10056',
               'courseType':'Integrated',
             'courseName': 'Mains Examination Course', 
               'duration': '8 Months',
               'commencementDate': 'July 16, 2018',
             'expertFaculty':'Insight Team',
               'courseFee': '124000',
             'subject': '','offerPercent':'10' ,
             'id':'current-affairs',
             'description':'Course that will enrich your capability to clear PRELIMS and score more than 500 marks in MAINS exam.',
             'subDescription':['Get conceptual clarity','Daily Answer writing','Clear Prelims with good score','Boost your Mains score']  
            },
            {
                'courseId':'10067',
               'courseType':'GS Module',
             'courseName': 'History and Culture', 
               'duration': '12 Weeks',
               'commencementDate': 'July 16, 2018',
             'expertFaculty':'Prof. S. Baliyan Sirx',
               'courseFee': '27500',
               'subject': '','offerPercent':'10'     ,
               'id':'current-affairs',
               'description':'Course that will enrich your capability to clear PRELIMS and score more than 500 marks in MAINS exam.',
               'subDescription':['Get conceptual clarity','Daily Answer writing','Clear Prelims with good score','Boost your Mains score']    
            },
            {
                'courseId':'10098',
               'courseType':'GS Module',
             'courseName': 'Geography', 
               'duration': '6 Weeks',
               'commencementDate': 'To be announced',
             'expertFaculty':'Prof. SM Thakur Sir',
               'courseFee': '9500',
             'subject': '','offerPercent':'10' ,
             'id':'current-affairs',
             'description':'Course that will enrich your capability to clear PRELIMS and score more than 500 marks in MAINS exam.',
             'subDescription':['Get conceptual clarity','Daily Answer writing','Clear Prelims with good score','Boost your Mains score']  
            },
            {
                'courseId':'10034',
               'courseType':'GS Module',
             'courseName': 'Polity and Governance', 
               'duration': '6 Weeks',
               'commencementDate': 'To be announced',
             'expertFaculty':'Prof. Abhay Thakur Sir',
               'courseFee': '9500',
             'subject': '','offerPercent':'10' ,
             'id':'current-affairs',
             'description':'Course that will enrich your capability to clear PRELIMS and score more than 500 marks in MAINS exam.',
             'subDescription':['Get conceptual clarity','Daily Answer writing','Clear Prelims with good score','Boost your Mains score']  
            },
            {
                'courseId':'10012',
               'courseType':'GS Module',
             'courseName': 'International Relations', 
               'duration': '6 Weeks',
               'commencementDate': 'To be announced',
             'expertFaculty':'Prof. AN Reddy Sir',
               'courseFee': '9500',
             'subject': '','offerPercent':'10' ,
             'id':'current-affairs',
             'description':'Course that will enrich your capability to clear PRELIMS and score more than 500 marks in MAINS exam.',
             'subDescription':['Get conceptual clarity','Daily Answer writing','Clear Prelims with good score','Boost your Mains score']  
            },
            {
                'courseId':'10009',
               'courseType':'GS Module',
             'courseName': 'Economy', 
               'duration': '6 Weeks',
               'commencementDate': 'July 16, 2018',
             'expertFaculty':'Prof. A.Mangtani Sir',
               'courseFee': '9500',
             'subject': '','offerPercent':'10' ,
             'id':'current-affairs',
             'description':'Course that will enrich your capability to clear PRELIMS and score more than 500 marks in MAINS exam.',
             'subDescription':['Get conceptual clarity','Daily Answer writing','Clear Prelims with good score','Boost your Mains score']  
            },
            {
                'courseId':'10028',
               'courseType':'GS Module',
             'courseName': 'Environment, Ecology and S&T', 
               'duration': '6 Weeks',
               'commencementDate': 'To be announced',
             'expertFaculty':'Prof. Dr Vivek Singh Sir and Prof. SM Thakur Sir',
               'courseFee': '9500',
             'subject': '','offerPercent':'10',
             'id':'current-affairs',
             'description':'Course that will enrich your capability to clear PRELIMS and score more than 500 marks in MAINS exam.',
             'subDescription':['Get conceptual clarity','Daily Answer writing','Clear Prelims with good score','Boost your Mains score']  
            },
            {
                'courseId':'10088',
               'courseType':'GS Module',
             'courseName': 'Ethics, Integrity, and Aptitude', 
               'duration': '45 Days',
               'commencementDate': 'To be announced',
             'expertFaculty':'Prof. S. Baliyan Sir',
               'courseFee': '24500',
             'subject': '','offerPercent':'10' ,
             'id':'current-affairs',
             'description':'Course that will enrich your capability to clear PRELIMS and score more than 500 marks in MAINS exam.',
             'subDescription':['Get conceptual clarity','Daily Answer writing','Clear Prelims with good score','Boost your Mains score']  	
            },
            {
                'courseId':'10021',
               'courseType':'optionals',
             'courseName': 'History', 
               'duration': '4.5 Months',
               'commencementDate': 'July 16, 2018',
             'expertFaculty':'Prof. S. Baliyan Sir',
               'courseFee': '54500',
             'subject': '','offerPercent':'10' ,
             'id':'current-affairs',
             'description':'Course that will enrich your capability to clear PRELIMS and score more than 500 marks in MAINS exam.',
             'subDescription':['Get conceptual clarity','Daily Answer writing','Clear Prelims with good score','Boost your Mains score']  
            },
            {
                'courseId':'10066',
               'courseType':'Essay',
             'courseName': 'Essay', 
               'duration': '3 Months',
               'commencementDate': 'July 15, 2018',
             'expertFaculty': 'Prof. S. Baliyan Sir','offerPercent':'10',
               'courseFee': '4500',
             'subject': '',
             'id':'current-affairs',
             'description':'Course that will enrich your capability to clear PRELIMS and score more than 500 marks in MAINS exam.',
             'subDescription':['Get conceptual clarity','Daily Answer writing','Clear Prelims with good score','Boost your Mains score']  
            }
         ];
  }
    handleDetails(event){
        if(event.colDef.field==='more'){
            this.courseData = event.data;
            this.modalService.open(this.scheduleDetails, {backdropClass: 'light-blue-backdrop'});
        }
    }
  onGridReady(params) {
    this.gridOptions.api.sizeColumnsToFit();
    }
  customCellRendererFunc(params) {
    return '<i (click)="moreDetails" class="fa fa-info-circle" aria-hidden="true"></i>';
  }
  moreDetails() {
      alert('working');
  }
  ngOnInit() {
  }

}
