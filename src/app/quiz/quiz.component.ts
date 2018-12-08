import { Component, OnInit } from '@angular/core';
import { Option } from '../models/option';
import { Question } from '../models/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quizes: any[];
  quiz: any = new Object (null);
  mode: String  = 'terms';
  quizName: string;
  resultMode: Boolean = false;
  timeout: Boolean = false;
  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';
  duration = '';
  config: any = {
    'duration': 0,
    'type': ''
   };
   public quizTypes: any = [{'type': 'World'}, {'type': 'Politics'}, {'type': 'Education'}, {'type': 'Economy'}, {'type': 'National'}];
   public timeFrames: any = [{'duration': '300', 'durationType': 'Difficult- 5 Minutes'},
    {'duration': '600', 'durationType': 'Moderate- 10 Minutes'},
    {'duration': '900', 'durationType': 'Easy- 15 Minutes'}];
   public rules: any =
    ['Participants must visit the 20 Colombian swimwear brands at the Miami Swimshow 2016 to get the “passport to Colombia” stamped.',
   'The Prize: A vacation package for two including 2 round trip tickets + Hotel Accommodations in Cartagena',
   'Contest is open from July 16 to July 19 to all buyers attending the Miami SwimShow 2016',
   'The closing date is July 20th  at 12am',
   'The winner will be chosen based on the majority of posted pictures on Instagram (including all requirements in clause 1).',
   'The winner will be announced within the next 3 business days after the contest closing date via social media.']
  constructor() { }

  ngOnInit() {}

  startQuiz() {
    this.loadQuiz();
    this.mode = 'quiz';
  }

  loadQuiz() {
    this.quiz = [
          {
              "id": 1010,
              "name": "ASP.NET webform separates the HTML output from program logic using a feature named as",
              "questionTypeId": 1,
              "options": [
                  {
                      "id": 1055,
                      "questionId": 1010,
                      "name": "Exception",
                      "isAnswer": false
                  },
                  {
                      "id": 1056,
                      "questionId": 1010,
                      "name": "Code-behind",
                      "isAnswer": true
                  },
                  {
                      "id": 1057,
                      "questionId": 1010,
                      "name": "Code-front",
                      "isAnswer": false
                  },
                  {
                      "id": 1058,
                      "questionId": 1010,
                      "name": "None of the above",
                      "isAnswer": false
                  }
              ],
              "questionType": {
                  "id": 1,
                  "name": "Multiple Choice",
                  "isActive": true
              }
          },
          {
              "id": 1011,
              "name": "The feature in ASP.NET 2.0 that is used to fire a normal postback to a different page in the application is called",
              "questionTypeId": 1,
              "options": [
                  {
                      "id": 1055,
                      "questionId": 1010,
                      "name": "Theme",
                      "isAnswer": false
                  },
                  {
                      "id": 1057,
                      "questionId": 1010,
                      "name": "Code-front",
                      "isAnswer": false
                  },
                  {
                      "id": 1056,
                      "questionId": 1010,
                      "name": "Cross Page Posting",
                      "isAnswer": true
                  },
                  {
                      "id": 1058,
                      "questionId": 1010,
                      "name": "None of the above",
                      "isAnswer": false
                  }
              ],
              "questionType": {
                  "id": 1,
                  "name": "Multiple Choice",
                  "isActive": true
              }
          },
          {
              "id": 1012,
              "name": "What class does the ASP.NET Web Form class inherit from by default?",
              "questionTypeId": 1,
              "options": [
                  {
                      "id": 1055,
                      "questionId": 1010,
                      "name": "System.Web.UI.Page",
                      "isAnswer": true
                  },
                  {
                      "id": 1057,
                      "questionId": 1010,
                      "name": "System.Web.UI.Form",
                      "isAnswer": false
                  },
                  {
                      "id": 1056,
                      "questionId": 1010,
                      "name": "System.Web.GUI.Page",
                      "isAnswer": false
                  },
                  {
                      "id": 1058,
                      "questionId": 1010,
                      "name": "System.Web.Form",
                      "isAnswer": false
                  }
              ],
              "questionType": {
                  "id": 1,
                  "name": "Multiple Choice",
                  "isActive": true
              }
          },
          {
              "id": 1013,
              "name": "What does MVC stand for?",
              "questionTypeId": 1,
              "options": [
                  {
                      "id": 1055,
                      "questionId": 1010,
                      "name": "Model View Controller",
                      "isAnswer": true
                  },
                  {
                      "id": 1057,
                      "questionId": 1010,
                      "name": "Maximum Virtual Control",
                      "isAnswer": false
                  },
                  {
                      "id": 1056,
                      "questionId": 1010,
                      "name": "Microsoft Visual Core",
                      "isAnswer": false
                  },
                  {
                      "id": 1058,
                      "questionId": 1010,
                      "name": "None of the above",
                      "isAnswer": false
                  }
              ],
              "questionType": {
                  "id": 1,
                  "name": "Multiple Choice",
                  "isActive": true
              }
          },
          {
              "id": 1014,
              "name": "Which of the following does NOT require type casting?",
              "questionTypeId": 1,
              "options": [
                  {
                      "id": 1055,
                      "questionId": 1010,
                      "name": "Session",
                      "isAnswer": false
                  },
                  {
                      "id": 1057,
                      "questionId": 1010,
                      "name": "TempData",
                      "isAnswer": false
                  },
                  {
                      "id": 1056,
                      "questionId": 1010,
                      "name": "ViewData",
                      "isAnswer": false
                  },
                  {
                      "id": 1058,
                      "questionId": 1010,
                      "name": "ViewBag",
                      "isAnswer": true
                  }
              ],
              "questionType": {
                  "id": 1,
                  "name": "Multiple Choice",
                  "isActive": true
              }
          },
          {
              "id": 1015,
              "name": "Which is the correct order of Page life-cycle in asp.net webform?",
              "questionTypeId": 1,
              "options": [
                  {
                      "id": 1055,
                      "questionId": 1010,
                      "name": "Init, PreRender, Load",
                      "isAnswer": false
                  },
                  {
                      "id": 1057,
                      "questionId": 1010,
                      "name": "Load, PreRender, Init",
                      "isAnswer": false
                  },
                  {
                      "id": 1056,
                      "questionId": 1010,
                      "name": "Init, Load, PreRender",
                      "isAnswer": true
                  },
                  {
                      "id": 1058,
                      "questionId": 1010,
                      "name": "None of the above",
                      "isAnswer": false
                  }
              ],
              "questionType": {
                  "id": 1,
                  "name": "Multiple Choice",
                  "isActive": true
              }
          },
          {
              "id": 1016,
              "name": "Which of these data source controls do not implement caching?",
              "questionTypeId": 1,
              "options": [
                  {
                      "id": 1055,
                      "questionId": 1010,
                      "name": "ObjectDataSource",
                      "isAnswer": false
                  },
                  {
                      "id": 1056,
                      "questionId": 1010,
                      "name": "LinqDataSource",
                      "isAnswer": true
                  },
                  {
                      "id": 1057,
                      "questionId": 1010,
                      "name": "SqlDataSource",
                      "isAnswer": false
                  },
                  {
                      "id": 1058,
                      "questionId": 1010,
                      "name": "XmlDataSource",
                      "isAnswer": false
                  }
              ],
              "questionType": {
                  "id": 1,
                  "name": "Multiple Choice",
                  "isActive": true
              }
          },
          {
              "id": 1017,
              "name": "Which tag asp:Label control by default renders to?",
              "questionTypeId": 1,
              "options": [
                  {
                      "id": 1055,
                      "questionId": 1010,
                      "name": "div",
                      "isAnswer": false
                  },
                  {
                      "id": 1056,
                      "questionId": 1010,
                      "name": "span",
                      "isAnswer": true
                  },
                  {
                      "id": 1057,
                      "questionId": 1010,
                      "name": "body",
                      "isAnswer": false
                  },
                  {
                      "id": 1058,
                      "questionId": 1010,
                      "name": "label",
                      "isAnswer": false
                  }
              ],
              "questionType": {
                  "id": 1,
                  "name": "Multiple Choice",
                  "isActive": true
              }
          },
          {
              "id": 1018,
              "name": "Which method do you use to explicitly kill a user's session?",
              "questionTypeId": 1,
              "options": [
                  {
                      "id": 1055,
                      "questionId": 1010,
                      "name": "Session.Terminate()",
                      "isAnswer": false
                  },
                  {
                      "id": 1057,
                      "questionId": 1010,
                      "name": "Session.TimeOut()",
                      "isAnswer": false
                  },
                  {
                      "id": 1056,
                      "questionId": 1010,
                      "name": "Session.Abondon()",
                      "isAnswer": true
                  },
                  {
                      "id": 1058,
                      "questionId": 1010,
                      "name": "Session.Kill()",
                      "isAnswer": false
                  }
              ],
              "questionType": {
                  "id": 1,
                  "name": "Multiple Choice",
                  "isActive": true
              }
          },
          {
              "id": 1019,
              "name": "Which of the following object is ideal for keeping data alive for a single request?",
              "questionTypeId": 1,
              "options": [
                  {
                      "id": 1055,
                      "questionId": 1010,
                      "name": "HttpContext",
                      "isAnswer": true
                  },
                  {
                      "id": 1056,
                      "questionId": 1010,
                      "name": "Session",
                      "isAnswer": false
                  },
                  {
                      "id": 1057,
                      "questionId": 1010,
                      "name": "Cookies",
                      "isAnswer": false
                  },
                  {
                      "id": 1058,
                      "questionId": 1010,
                      "name": "SqlServer",
                      "isAnswer": false
                  }
              ],
              "questionType": {
                  "id": 1,
                  "name": "Multiple Choice",
                  "isActive": true
              }
          }
      ];
      this.startTime = new Date();
      this.timer = setInterval(() => { this.tick(); }, 1000);
      this.duration = this.parseTime(this.config.duration);
    }

  onSelect(question: Question, option: Option) {
    if (question.questionTypeId === 1) {
      question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
    }
  }

  isAnswered(question: Question) {
    return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  }

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.config.duration) {
      this.timeout = true;
      this.onSubmit();
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  get filteredQuestions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSubmit() {
    let answered: Boolean = true;
    this.quiz.forEach((question) => {
        if (this.isAnswered(question) === 'Not Answered') {
            answered = false;
        }
    });
    if (answered || this.timeout) {
        this.timeout = false;
        this.mode = 'result';
    } else {
        alert('Please answer all the questions');
    }
    const answers = [];
    this.quiz.questions.forEach(x => answers.push({ 'quizId': this.quiz.id, 'questionId': x.id, 'answered': x.answered }));
    // Post your data to the server here. answers contains the questionId and the users' answer.
  }

}