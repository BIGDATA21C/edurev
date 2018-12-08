import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSOPComponent } from './project-sop.component';

describe('ProjectSOPComponent', () => {
  let component: ProjectSOPComponent;
  let fixture: ComponentFixture<ProjectSOPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSOPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSOPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
