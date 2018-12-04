import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../services/data-services.service';

@Component({
  selector: 'app-current-affairs',
  templateUrl: './current-affairs.component.html',
  styleUrls: ['./current-affairs.component.scss']
})
export class CurrentAffairsComponent implements OnInit {
  public news: any = [];
  public newsTypes: any = [{'type': 'World'}, {'type': 'Politics'}, {'type': 'Education'}, {'type': 'Economy'}, {'type': 'National'}];
  public fromDate: Date;
  public toDate: Date;
  public type: String;
  public newsOld = [{
      "title":"News 1: India denies shifting pillars along Myanmar border",
      "subTitle":"India and Myanmar border",
      "subject":"internal-security",
      "paper":"",
      "inter":"",
      "date":"19-07-2018",
      "content": "India has not shifted pillars demarcating the international border with Myanmar, the External Affairs Ministry clarified on Sunday. The statement came after media reports suggested that India had given up land to Myanmar while carrying out a survey.",
      "contentList": ["India has a 1,643-km border with Myanmar and it is unique in many ways as it has a visa-free movement regime for people living within 16 km on either side of the border. It’s called “Free movement regime” which is a bilateral agreement with Myanmar that allows free movement of Indian and Myanmarese citizens within 16 km of the border","Under Free movement regime one can stay up to 72 hours with effective and valid permits issued by the designated authorities on either side. This regime has been in place keeping in view the traditional social relations among the border people. It helps genuine people living in close proximity of the border.","India and Myanmar share a 1,643 km unfenced border along Arunachal Pradesh (520 km), Nagaland (215 km), Manipur (398 km) and Mizoram (510 km). "],
      "subTitleOne":"India and Myanmar border",
      "contentOne": "India has not shifted pillars demarcating the international border with Myanmar, the External Affairs Ministry clarified on Sunday. The statement came after media reports suggested that India had given up land to Myanmar while carrying out a survey.",
      "contentListOne": ["India has a 1,643-km border with Myanmar and it is unique in many ways as it has a visa-free movement regime for people living within 16 km on either side of the border. It’s called “Free movement regime” which is a bilateral agreement with Myanmar that allows free movement of Indian and Myanmarese citizens within 16 km of the border","Under Free movement regime one can stay up to 72 hours with effective and valid permits issued by the designated authorities on either side. This regime has been in place keeping in view the traditional social relations among the border people. It helps genuine people living in close proximity of the border.","India and Myanmar share a 1,643 km unfenced border along Arunachal Pradesh (520 km), Nagaland (215 km), Manipur (398 km) and Mizoram (510 km). "],
      "subTitleTwo":"India and Myanmar border",
      "contentTwo": "India has not shifted pillars demarcating the international border with Myanmar, the External Affairs Ministry clarified on Sunday. The statement came after media reports suggested that India had given up land to Myanmar while carrying out a survey.",
      "contentListTwo": ["India has a 1,643-km border with Myanmar and it is unique in many ways as it has a visa-free movement regime for people living within 16 km on either side of the border. It’s called “Free movement regime” which is a bilateral agreement with Myanmar that allows free movement of Indian and Myanmarese citizens within 16 km of the border","Under Free movement regime one can stay up to 72 hours with effective and valid permits issued by the designated authorities on either side. This regime has been in place keeping in view the traditional social relations among the border people. It helps genuine people living in close proximity of the border.","India and Myanmar share a 1,643 km unfenced border along Arunachal Pradesh (520 km), Nagaland (215 km), Manipur (398 km) and Mizoram (510 km). "]
   },
    {
    "title":"News 2: NEC plenary to discuss AFSPA, Naga accord",
    "subTitle":"North Eastern Council (NEC)",
    "content": "India has not shifted pillars demarcating the international border with Myanmar, the External Affairs Ministry clarified on Sunday. The statement came after media reports suggested that India had given up land to Myanmar while carrying out a survey.",
    "contentList": ["India has a 1,643-km border with Myanmar and it is unique in many ways as it has a visa-free movement regime for people living within 16 km on either side of the border. It’s called “Free movement regime” which is a bilateral agreement with Myanmar that allows free movement of Indian and Myanmarese citizens within 16 km of the border",
          "Under Free movement regime one can stay up to 72 hours with effective and valid permits issued by the designated authorities on either side. This regime has been in place keeping in view the traditional social relations among the border people. It helps genuine people living in close proximity of the border.",
          "India and Myanmar share a 1,643 km unfenced border along Arunachal Pradesh (520 km), Nagaland (215 km), Manipur (398 km) and Mizoram (510 km). "]
   },{
    "title":"News 3: Nine parties oppose proposal for simultaneous elections",
    "subTitle":"Background",
    "content": "Political parties were divided on the issue of holding simultaneous Lok Sabha and Assembly elections during consultations with the Law Commission of India. As many as nine parties expressed their reservations while four parties supported the move. The two major national parties — the BJP and the Congress — stayed away from the Law Commission’s deliberations.",
    "contentList": ["Our country’s first general elections were held in 1951-52. There was a simultaneous General Election to Lok Sabha and all State Legislative Assemblies.",
          "Under Free movement regime one can stay up to 72 hours with effective and valid permits issued by the designated authorities on either side. This regime has been in place keeping in view the traditional social relations among the border people. It helps genuine people living in close proximity of the border.",
          "India and Myanmar share a 1,643 km unfenced border along Arunachal Pradesh (520 km), Nagaland (215 km), Manipur (398 km) and Mizoram (510 km). "]
   },
    {
    "title":"News 4: Insight into a transgender’s life",
    "subTitle":"Current development towards ensuring transgender rights",
    "content": "India has not shifted pillars demarcating the international border with Myanmar, the External Affairs Ministry clarified on Sunday. The statement came after media reports suggested that India had given up land to Myanmar while carrying out a survey.",
    "contentList": ["India has a 1,643-km border with Myanmar and it is unique in many ways as it has a visa-free movement regime for people living within 16 km on either side of the border. It’s called “Free movement regime” which is a bilateral agreement with Myanmar that allows free movement of Indian and Myanmarese citizens within 16 km of the border",
          "Under Free movement regime one can stay up to 72 hours with effective and valid permits issued by the designated authorities on either side. This regime has been in place keeping in view the traditional social relations among the border people. It helps genuine people living in close proximity of the border.",
          "India and Myanmar share a 1,643 km unfenced border along Arunachal Pradesh (520 km), Nagaland (215 km), Manipur (398 km) and Mizoram (510 km). "]
   },{
    "title":"News 5: Work to make Sabarimala Swachh Iconic Place begins",
    "subTitle":"Swachh Iconic Place",
    "content": "India has not shifted pillars demarcating the international border with Myanmar, the External Affairs Ministry clarified on Sunday. The statement came after media reports suggested that India had given up land to Myanmar while carrying out a survey.",
    "contentList": ["India has a 1,643-km border with Myanmar and it is unique in many ways as it has a visa-free movement regime for people living within 16 km on either side of the border. It’s called “Free movement regime” which is a bilateral agreement with Myanmar that allows free movement of Indian and Myanmarese citizens within 16 km of the border",
          "Under Free movement regime one can stay up to 72 hours with effective and valid permits issued by the designated authorities on either side. This regime has been in place keeping in view the traditional social relations among the border people. It helps genuine people living in close proximity of the border.",
          "India and Myanmar share a 1,643 km unfenced border along Arunachal Pradesh (520 km), Nagaland (215 km), Manipur (398 km) and Mizoram (510 km). "]
   },
    {
    "title":"News 6: Rath Yatra to showcase Swachh Bharat Mission in Odisha",
    "subTitle":"Swachh Bharat Mission (SBM)",
    "content": "India has not shifted pillars demarcating the international border with Myanmar, the External Affairs Ministry clarified on Sunday. The statement came after media reports suggested that India had given up land to Myanmar while carrying out a survey.",
    "contentList": ["India has a 1,643-km border with Myanmar and it is unique in many ways as it has a visa-free movement regime for people living within 16 km on either side of the border. It’s called “Free movement regime” which is a bilateral agreement with Myanmar that allows free movement of Indian and Myanmarese citizens within 16 km of the border",
          "Under Free movement regime one can stay up to 72 hours with effective and valid permits issued by the designated authorities on either side. This regime has been in place keeping in view the traditional social relations among the border people. It helps genuine people living in close proximity of the border.",
          "India and Myanmar share a 1,643 km unfenced border along Arunachal Pradesh (520 km), Nagaland (215 km), Manipur (398 km) and Mizoram (510 km). "]
   },{
    "title":"News 7: Arunachal stares at water scarcity",
    "subTitle":"Swachh Iconic Place",
    "content": "India has not shifted pillars demarcating the international border with Myanmar, the External Affairs Ministry clarified on Sunday. The statement came after media reports suggested that India had given up land to Myanmar while carrying out a survey.",
    "contentList": ["India has a 1,643-km border with Myanmar and it is unique in many ways as it has a visa-free movement regime for people living within 16 km on either side of the border. It’s called “Free movement regime” which is a bilateral agreement with Myanmar that allows free movement of Indian and Myanmarese citizens within 16 km of the border",
          "Under Free movement regime one can stay up to 72 hours with effective and valid permits issued by the designated authorities on either side. This regime has been in place keeping in view the traditional social relations among the border people. It helps genuine people living in close proximity of the border.",
          "India and Myanmar share a 1,643 km unfenced border along Arunachal Pradesh (520 km), Nagaland (215 km), Manipur (398 km) and Mizoram (510 km). "]
   },
    {
    "title":"News 8: Two BJP-ruled States resist health plan",
    "subTitle":"Ayushman Bharat - National Health Protection Scheme (NHPS)",
    "content": "India has not shifted pillars demarcating the international border with Myanmar, the External Affairs Ministry clarified on Sunday. The statement came after media reports suggested that India had given up land to Myanmar while carrying out a survey.",
    "contentList": ["India has a 1,643-km border with Myanmar and it is unique in many ways as it has a visa-free movement regime for people living within 16 km on either side of the border. It’s called “Free movement regime” which is a bilateral agreement with Myanmar that allows free movement of Indian and Myanmarese citizens within 16 km of the border",
          "Under Free movement regime one can stay up to 72 hours with effective and valid permits issued by the designated authorities on either side. This regime has been in place keeping in view the traditional social relations among the border people. It helps genuine people living in close proximity of the border.",
          "India and Myanmar share a 1,643 km unfenced border along Arunachal Pradesh (520 km), Nagaland (215 km), Manipur (398 km) and Mizoram (510 km). "]
   },
   {
   "title":"News 9: Telecom firms oppose TRAI’s public Wi-Fi model",
   "subTitle":"Telecom Regulatory Authority of India (TRAI)",
   "content": "India has not shifted pillars demarcating the international border with Myanmar, the External Affairs Ministry clarified on Sunday. The statement came after media reports suggested that India had given up land to Myanmar while carrying out a survey.",
   "contentList": ["India has a 1,643-km border with Myanmar and it is unique in many ways as it has a visa-free movement regime for people living within 16 km on either side of the border. It’s called “Free movement regime” which is a bilateral agreement with Myanmar that allows free movement of Indian and Myanmarese citizens within 16 km of the border",
         "Under Free movement regime one can stay up to 72 hours with effective and valid permits issued by the designated authorities on either side. This regime has been in place keeping in view the traditional social relations among the border people. It helps genuine people living in close proximity of the border.",
         "India and Myanmar share a 1,643 km unfenced border along Arunachal Pradesh (520 km), Nagaland (215 km), Manipur (398 km) and Mizoram (510 km). "]
  }];
  public questions: any =  [{
        "question":"Which of the following state share largest border with Myanmar?",
        "options":["Manipur","Nagaland","Mizoram","Arunachal Pradesh"],
        "answer":"D",
        "explanation":"India and Myanmar share a 1,643 km unfenced border along Arunachal Pradesh (520 km), Nagaland (215 km), Manipur (398 km) and Mizoram (510 km)."
  },{
      "question":"Which of the following ministries/ministry involved in the implementation of Swachh Iconic Place?",
      "options":["Manipur","Nagaland","Mizoram","Arunachal Pradesh"],
      "answer":"D",
      "explanation":"India and Myanmar share a 1,643 km unfenced border along Arunachal Pradesh (520 km), Nagaland (215 km), Manipur (398 km) and Mizoram (510 km)."
},{
      "question":"Which organization has launched Mycall app, MySpeed app and 'Do not disturb (DND 2.0)' apps to educate and ensure transparency?",
      "options":["Manipur","Nagaland","Mizoram","Arunachal Pradesh"],
      "answer":"D",
      "explanation":"India and Myanmar share a 1,643 km unfenced border along Arunachal Pradesh (520 km), Nagaland (215 km), Manipur (398 km) and Mizoram (510 km)."
},{
      "question":"Which of the following state share largest border with Myanmar",
      "options":["Manipur","Nagaland","Mizoram","Arunachal Pradesh"],
      "answer":"D",
      "explanation":"India and Myanmar share a 1,643 km unfenced border along Arunachal Pradesh (520 km), Nagaland (215 km), Manipur (398 km) and Mizoram (510 km)."
},{
      "question":"Which organization has launched Mycall app, MySpeed app and 'Do not disturb (DND 2.0)' apps to educate and ensure transparency?",
      "options":["Manipur","Nagaland","Mizoram","Arunachal Pradesh"],
      "answer":"D",
      "explanation":"India and Myanmar share a 1,643 km unfenced border along Arunachal Pradesh (520 km), Nagaland (215 km), Manipur (398 km) and Mizoram (510 km)."
},{
      "question":"Which of the following state share largest border with Myanmar",
      "options":["Manipur","Nagaland","Mizoram","Arunachal Pradesh"],
      "answer":"D",
      "explanation":"India and Myanmar share a 1,643 km unfenced border along Arunachal Pradesh (520 km), Nagaland (215 km), Manipur (398 km) and Mizoram (510 km)."
}];

  defaultFrom = new Date();
  defaultTo = new Date();
  // defaultTo = new Date(this.defaultFrom.getTime() + 2 *24 * 60 * 60 * 1000);

  public onDateRangeSelection(range: { from: Date, to: Date }) {
    console.log(`Selected range: ${range.from} - ${range.to}`);
    this.fromDate = range.from;
    this.toDate = range.to;
  }
  constructor(public dataService: DataServicesService) {
      this.dataService.getData('/api/news').subscribe((resp) => {
            this.news = resp;
          }, (err) => {
            console.error(err);
          });
   }
   public newsFilter() {
      let newsURL = '/api/news?type=' + this.type;
      if (this.fromDate) {
            const startDate = this.fromDate.getFullYear() + '-' + (this.fromDate.getMonth() + 1) + '-' + this.fromDate.getDate();
            newsURL = newsURL + '&startDate=' + startDate;
      }
      if (this.toDate) {
            const endDate = this.toDate.getFullYear() + '-' + (this.toDate.getMonth() + 1) + '-' + this.toDate.getDate();
            newsURL = newsURL + '&endDate=' + endDate;
      }
      this.dataService.getData(newsURL).subscribe((resp) => {
            this.news = resp;
          }, (err) => {
            console.error(err);
          });
   }
  ngOnInit() {
  }

}
