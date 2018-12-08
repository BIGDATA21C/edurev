import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GSComponent } from './gs.component';

describe('GSComponent', () => {
  let component: GSComponent;
  let fixture: ComponentFixture<GSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
