import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAffairsAdminComponent } from './current-affairs-admin.component';

describe('CurrentAffairsAdminComponent', () => {
  let component: CurrentAffairsAdminComponent;
  let fixture: ComponentFixture<CurrentAffairsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentAffairsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentAffairsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
