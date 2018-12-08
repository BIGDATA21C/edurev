import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyNavComponent } from './my-nav/my-nav.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { LayoutModule } from '@angular/cdk/layout';
//import { FlexLayoutModule } from '@angular/flex-layout';
import {   MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DataServicesService } from './services/data-services.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthenticationService } from './services/authentication.service';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AgGridModule } from 'ag-grid-angular';
import { CoursesComponent } from './courses/courses.component';
import { CurrentAffairsComponent } from './current-affairs/current-affairs.component';
import { DateRangeComponent } from './date-range/date-range.component';
import { QuizComponent } from './quiz/quiz.component';
import { CurrentAffairsAdminComponent } from './current-affairs-admin/current-affairs-admin.component';

//ck editor
import { CKEditorModule } from 'ng2-ckeditor';
import { HistoryComponent } from './history/history.component';
import { LeftSideNavComponent } from './left-side-nav/left-side-nav.component';

import { FrontpageComponent } from './frontpage/frontpage.component';
import { EssayComponent } from './essay/essay.component';
import {EmployeeFilterPipe} from './essay/employee-filter.pipe';
import { EssayfilterPipe } from './pipes/essay/essayfilter.pipe';
import { PrelimsfilterPipe } from './pipes/prelims/prelimsfilter.pipe';
import { GSComponent } from './generalstudies/gs.component';
import { OptionalsComponent } from './optionals/optionals.component';
import { PrelimsdisplayComponent } from './prelims/prelimsdisplay.component';
import { FoldersearchComponent } from './foldersearch/foldersearch.component';
import { ProjectSOPComponent } from './project-sop/project-sop.component';
import { ProjectsopPipe } from './projectsop.pipe';
import { FoldersearchPipe } from './pipes/foldersearch/foldersearch.pipe';
import { OptionalsPipe } from './pipes/optionals/optionals.pipe';
import { GeneralstudiesPipe } from './pipes/generalstudies/generalstudies.pipe';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesPipe } from './pipes/quotes/quotes.pipe';

// Include Services
import { QuotesService } from './services/quotes/quotes.service';

const appRoutes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', component: FrontpageComponent },
  { path: 'home', component: FrontpageComponent },
  // { path: 'home', component: HomeComponent },
  {path: 'about-us', component: AboutUsComponent},
  {path: 'schedule', component: SchedulesComponent},
  {path: 'subscribe', component: SubscribeComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'current-affairs', component: CurrentAffairsComponent},
  {path: 'profile', component: ProfileComponent , canActivate: [AuthGuardService]},
  {path: 'quiz', component: QuizComponent},
  {path: 'ca-admin', component: CurrentAffairsAdminComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'essay', component: EssayComponent},
  {path: 'generalstudies', component: GSComponent},
  {path: 'optionals', component: OptionalsComponent},
  {path: 'prelims', component:PrelimsdisplayComponent},
  {path: 'foldersearch', component:FoldersearchComponent},
  {path: 'projectsop', component:ProjectSOPComponent},
  // added on Dec 4, 2018 for Quotes
  {path: 'quotes', component:QuotesComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    SchedulesComponent,
    AboutUsComponent,
    SubscribeComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    ContactUsComponent,
    CoursesComponent,
    CurrentAffairsComponent,
    DateRangeComponent,
    QuizComponent,
    CurrentAffairsAdminComponent,
    HistoryComponent,
    LeftSideNavComponent,
    FrontpageComponent,
    EssayComponent,
    EssayfilterPipe,
    EmployeeFilterPipe,
    PrelimsfilterPipe,
    GSComponent,
    OptionalsComponent,
    PrelimsdisplayComponent,
    FoldersearchComponent,
    ProjectSOPComponent,
    ProjectsopPipe,
    FoldersearchPipe,
    OptionalsPipe,
    GeneralstudiesPipe,
    QuotesComponent,
    QuotesPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,    
    AgGridModule.withComponents([]),
    CKEditorModule
  ],
  providers: [DataServicesService, AuthenticationService, AuthGuardService, QuotesService,
    ProjectsopPipe, FoldersearchPipe, PrelimsfilterPipe,OptionalsPipe,     
    GeneralstudiesPipe, EssayfilterPipe, QuotesPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
