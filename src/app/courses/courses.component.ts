import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
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
  },
  
  {
    'courseType':'GS MODULE',
    'courseName': 'ECONOMIC DEVELOPMENT', 
    'duration': '6 Weeks',
    'commencementDate': 'AUG 06, 2018',
    'expertFaculty':'PROF. A. MANGTANI SIR',
    'courseFee': '9500',
    'subject': 'GS-III ECONOMIC DEVELOPMENT Syllabus',
    'offerPercent':'10',
    'id':'10005',
    'image': 'current-affairs',
    'description':'Course that will enrich your capability to get good score in GS PAPER III MAINS exam. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
    'subDescription':['Get conceptual clarity','Daily Answer writing','Boost your Mains score','One to one interaction with teacher','Progress Report of every student','Strategy based on analysis of strengths and weakness of students'],
    'content':'Course that will enrich your capability to get good score GS PAPER I. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
   'contentList':['Get conceptual clarity','Daily Answer writing','Boost your Mains score','One to one interaction with teacher','Progress Report of every student','Strategy based on analysis of strengths and weakness of students']
  },
  
  {
    'courseType':'GS MODULE',
    'courseName': 'ETHICS, INTEGRITY, AND APTITUDE', 
    'duration': '45 Days',
    'commencementDate': 'AUG 06, 2018',
    'expertFaculty':'PROF. S. BALIYAN SIR',
    'courseFee': '24500',
    'subject': 'GS-IV ETHICS, INTEGRITY, AND APTITUDE Syllabus',
    'offerPercent':'10',
    'id':'10006',
    'image': 'current-affairs',
    'description':'Course that will enrich your capability to get good score in GS PAPER IV MAINS exam. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
    'subDescription':['Get conceptual clarity','Daily Answer writing','Boost your Mains score','One to one interaction with teacher','Progress Report of every student','Strategy based on analysis of strengths and weakness of students'],
    'content':'Course that will enrich your capability to get good score GS PAPER I. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
   'contentList':['Get conceptual clarity','Daily Answer writing','Boost your Mains score','One to one interaction with teacher','Progress Report of every student','Strategy based on analysis of strengths and weakness of students']
  },
  
  {
    'courseType':'GS MODULE',
    'courseName': 'INTERNATIONAL RELATIONS', 
    'duration': '45 Days',
    'commencementDate': 'AUG 06, 2018',
    'expertFaculty':'PROF. A.NUKUM SIR',
    'courseFee': '9500',
    'subject': 'GS-II INTERNATIONAL RELATIONS AND SECURITY Syllabus',
    'offerPercent':'10',
    'id':'10007',
    'image': 'current-affairs',
    'description':'Course that will enrich your capability to get good score in GS PAPER II MAINS exam. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
    'subDescription':['Get conceptual clarity','Daily Answer writing','Boost your Mains score','One to one interaction with teacher','Progress Report of every student','Strategy based on analysis of strengths and weakness of students'],
    'content':'Course that will enrich your capability to get good score GS PAPER I. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
   'contentList':['Get conceptual clarity','Daily Answer writing','Boost your Mains score','One to one interaction with teacher','Progress Report of every student','Strategy based on analysis of strengths and weakness of students']
  },
  
  {
    'courseType':'OPTIONAL',
    'courseName': 'HISTORY OPTIONAL', 
    'duration': '4.5 Months ',
    'commencementDate': 'AUG 06, 2018',
    'expertFaculty':'PROF. S. BALIYAN SIR',
    'courseFee': '54500',
    'subject': 'Entire GS Syllabus',
    'offerPercent':'',
    'id':'10008',
    'image': 'current-affairs',
    'description':'Course that will enrich your capability to clear good score in HISTORY OPTIONAL',
    'subDescription':['Get conceptual clarity','Daily Answer writing','Boost your Mains score','One to one interaction with teacher','Progress Report of every student','Strategy based on analysis of strengths and weakness of students'],
    'content':'Course that will enrich your capability to get good score HISTORY OPTIONAL. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
   'contentList':['Get conceptual clarity','Daily Answer writing','Boost your OPTIONAL score','One to one interaction with teacher','Progress Report of every student','Strategy based on analysis of strengths and weakness of students']
  },
  
  {
    'courseType':'TEST SERIES',
    'courseName': 'GS 2018 EXCLUSIVE MAINS', 
    'duration': '4.5 Months ',
    'commencementDate': 'AUG 06, 2018',
    'expertFaculty':'INSIGHT TEAM',
    'courseFee': '11500',
    'subject': 'Entire GS Syllabus',
    'offerPercent':'10',
    'id':'10009',
    'image': 'current-affairs',
    'description':'Course that will enrich your capability to get good score in ALL GS PAPERS OF MAINS exam. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
    'subDescription':['Get conceptual clarity','Daily Answer writing','Boost your Mains score','One to one interaction with teacher','Progress Report of every student','Strategy based on analysis of strengths and weakness of students'],
    'content':'Course that will enrich your capability to get good score GS PAPER I. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
   'contentList':['Get conceptual clarity','Daily Answer writing','Boost your Mains score','One to one interaction with teacher','Progress Report of every student','Strategy based on analysis of strengths and weakness of students']
  },
  
  {
    'courseType': 'TEST SERIES',
    'courseName': 'GS 2019 INTEGRATED PCM TEST SERIES', 
    'duration': '12 Months ',
    'commencementDate': 'AUG 06, 2018',
    'expertFaculty': 'INSIGHT TEAM',
    'courseFee': '24500',
    'subject': 'Entire GS Syllabus',
    'offerPercent': '10',
    'id':'10010',
    'image': 'current-affairs',
    'description':'Course that will enrich your capability to clear prelims and get good score in ALL GS PAPERS OF MAINS exam. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
    'subDescription':['Get conceptual clarity','Daily Answer writing','Boost your Mains score','One to one interaction with teacher','Progress Report of every student','Strategy based on analysis of strengths and weakness of students'],
    'content':'Course that will enrich your capability to get good score GS PAPER I. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
   'contentList':['Get conceptual clarity','Daily Answer writing','Boost your Mains score','One to one interaction with teacher','Progress Report of every student','Strategy based on analysis of strengths and weakness of students']
  },
  
  {
    'courseType': 'TEST SERIES',
    'courseName': 'ESSAY TEST SERIES', 
    'duration': '4.5 Months ',
    'commencementDate': 'AUG 06, 2018',
    'expertFaculty': 'INSIGHT TEAM',
    'courseFee': '4500',
    'subject': 'Entire GS Syllabus',
    'offerPercent': '10',
    'id': '10011',
    'image': 'current-affairs',
    'description':'Course that will enrich your capability to clear prelims and get good score in ESSAY exam. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
    'subDescription':['Get conceptual clarity','Daily Answer writing','Boost your Mains score','One to one interaction with teacher','Progress Report of every student','Strategy based on analysis of strengths and weakness of students'],
    'content':'Course that will enrich your capability to get good score GS PAPER I. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
   'contentList':['Get conceptual clarity','Daily Answer writing','Boost your ESSAY score','One to one interaction with teacher','Progress Report of every student','Strategy based on analysis of strengths and weakness of students']
  },
  
  {
    'courseType':'TEST SERIES',
    'courseName': 'HISTORY OPTIONAL TEST SERIES', 
    'duration': '4.5 Months ',
    'commencementDate': 'AUG 06, 2018',
    'expertFaculty': 'PROF. S. BALIYAN SIR',
    'courseFee': '21500',
    'subject': 'Entire HISTORY Syllabus',
    'offerPercent': '',
    'id':'10012',
    'image': 'current-affairs',
    'description':'Course that will enrich your capability to clear good score in HISTORY OPTIONAL',
    'subDescription':['Get conceptual clarity','Daily Answer writing','Boost your Mains score',
    'One to one interaction with teacher','Progress Report of every student',
    'Strategy based on analysis of strengths and weakness of students'],
    'content':'Course that will enrich your capability to get good score HISTORY OPTIONAL. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
   'contentList':['Get conceptual clarity','Daily Answer writing',
   'Boost your OPTIONAL score','One to one interaction with teacher',
   'Progress Report of every student','Strategy based on analysis of strengths and weakness of students']
  },
  
  {
    'courseType': 'CURRENT AFFAIR',
    'courseName': 'CURRENT AFFAIR CLASSES',
    'duration': '12 Months ',
    'commencementDate': 'AUG 06, 2018',
    'expertFaculty': 'PROF. A. MANGTANI SIR',
    'courseFee': '9500',
    'subject': '1 YEAR CURRENT AFFAIRS',
    'offerPercent': '',
    'id': '10013',
    'image': 'current-affairs',
    'description': 'Course that will enrich your capability to clear PRELIMS AND GET good score in CURRENT RELATED MAINS QUESTIONS',
    'subDescription': ['Get conceptual clarity', 'Daily Answer writing',
    'Boost your Mains score', 'One to one interaction with teacher',
    'Progress Report of every student', 'Strategy based on analysis of strengths and weakness of students'],
    'content':'Course that will enrich your capability to get good score MAINS EXAM. Expert faculty is available for student interaction. Continuous and Comprehensive evaluation of student is the hallmark of the course. Individual attention to student is main objective of the course.',
   'contentList': ['Get conceptual clarity', 'Daily Answer writing',
   'Boost your MAINS score',
   'One to one interaction with teacher', 'Progress Report of every student',
   'Strategy based on analysis of strengths and weakness of students']
  }
 ];
  constructor(private modalService: NgbModal) { }
  cardClick(event, item){
    this.courseData = item;
    this.modalService.open(this.courseDetails, {backdropClass: 'light-blue-backdrop', size: 'lg'});
  }
  ngOnInit() {
  }

}
