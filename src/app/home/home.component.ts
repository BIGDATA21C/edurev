import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
@ViewChild('courseDetails') courseDetails: ElementRef;
public courseData: any = {};
  public data: Array<Object> = [{
    'courseType': 'Integrated',
    'courseName': 'GENERAL STUDIES FOUNDATION COURSE',
    'duration': '12 Months',
    'commencementDate': 'AUG 06, 2018',
    'expertFaculty': 'Insight Team',
    'courseFee': '154500',
    'subject': 'Entire GS Syllabus',
    'offerPercent': '10',
    'id': '10001',
    'image': 'current-affairs',
    'description':'Course that will enrich your capability to clear PRELIMS and score more than 500 marks in MAINS exam. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
    'subDescription':['FOUNDATION WITH NCERT TESTS','Get conceptual clarity','Daily Answer writing','Clear Prelims with good score','Boost your Mains score','One to one interaction with teacher','Progress Report of every student','Strategy based on analysis of strengths and weakness of students']  ,
    'content':'Course that will enrich your capability to clear PRELIMS and score more than 500 marks in MAINS exam. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
    'contentList':['Get conceptual clarity','Daily Answer writing','Clear Prelims with good score','Boost your Mains score','One to one interaction with teacher','Progress Report of every student','Strategy based on analysis of strengths and weakness of students']
  },
  
  {
    'courseType':'Integrated',
    'courseName': 'GENERAL STUDIES PRELIMS-CUM-MAINS', 
    'duration': '12 Months',
    'commencementDate': 'AUG 06, 2018',
    'expertFaculty':'Insight Team',
    'courseFee': '144500',
    'subject': 'Entire GS Syllabus',
    'offerPercent':'10',
    'id':'10002',
    'image': 'current-affairs',
    'description':'Course that will enrich your capability to clear PRELIMS and score more than 500 marks in MAINS exam. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
    'subDescription':['Get conceptual clarity','Daily Answer writing','Clear Prelims with good score','Boost your Mains score','One to one interaction with teacher','Progress Report of every student','Strategy based on analysis of strengths and weakness of students']  ,
    'content':'Course that will enrich your capability to clear PRELIMS and score more than 500 marks in MAINS exam. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
    'contentList':['Get conceptual clarity','Daily Answer writing','Clear Prelims with good score','Boost your Mains score','One to one interaction with teacher','Progress Report of every student','Strategy based on analysis of strengths and weakness of students']
  },
  
  {
    'courseType':'Integrated',
    'courseName': 'GENERAL STUDIES MAIN EXAMINATION', 
    'duration': '8 Months',
    'commencementDate': 'AUG 06, 2018',
    'expertFaculty':'Insight Team',
    'courseFee': '124500',
    'subject': 'Entire GS Syllabus',
    'offerPercent':'10',
    'id':'10003',
    'image': 'current-affairs',
    'description':'Course that will enrich your capability to score more than 500 marks in MAINS exam. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
    'subDescription':['Get conceptual clarity','Daily Answer writing','Boost your Mains score','One to one interaction with teacher','Progress Report of every student','Strategy based on analysis of strengths and weakness of students'],
    'content':'Course that will enrich your capability to score more than 500 marks in MAINS exam. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
    'contentList':['Get conceptual clarity','Daily Answer writing','Boost your Mains score','One to one interaction with teacher','Progress Report of every student','Strategy based on analysis of strengths and weakness of students']
  },
  
  {
    'courseType':'GS MODULE',
    'courseName': 'HISTORY AND CULTURE', 
    'duration': '12 Weeks',
    'commencementDate': 'AUG 06, 2018',
    'expertFaculty':'PROF. S. BALIYAN SIR',
    'courseFee': '27500',
    'subject': 'GS-I History, Culture and society Syllabus',
    'offerPercent':'10',
    'id':'10004',
    'image': 'current-affairs',
    'description':'Course that will enrich your capability to get good score in GS PAPER I MAINS exam. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
    'subDescription':['Get conceptual clarity','Daily Answer writing','Boost your Mains score','One to one interaction with teacher','Progress Report of every student','Strategy based on analysis of strengths and weakness of students'],
    'content':'Course that will enrich your capability to get good score GS PAPER I. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
   'contentList':['Get conceptual clarity','Daily Answer writing','Boost your Mains score','One to one interaction with teacher','Progress Report of every student','Strategy based on analysis of strengths and weakness of students']
  }];
  public selectedItem: Object = {};
  constructor(private modalService: NgbModal) {
  }
  ngOnInit(): void {
  }
  cardClick(event, item){
    this.courseData = item;
    this.modalService.open(this.courseDetails, {backdropClass: 'light-blue-backdrop', size: 'lg'});
  }

}
