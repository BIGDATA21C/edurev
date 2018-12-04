import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldersearchComponent } from './foldersearch.component';

describe('FoldersearchComponent', () => {
  let component: FoldersearchComponent;
  let fixture: ComponentFixture<FoldersearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldersearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
