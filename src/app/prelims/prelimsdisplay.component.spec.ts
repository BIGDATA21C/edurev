import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelimsdisplayComponent } from './prelimsdisplay.component';

describe('PrelimsdisplayComponent', () => {
  let component: PrelimsdisplayComponent;
  let fixture: ComponentFixture<PrelimsdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrelimsdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrelimsdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
