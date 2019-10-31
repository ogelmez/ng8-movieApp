import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCaseStudyComponent } from './component';

describe('EditCaseStudyComponent', () => {
  let component: EditCaseStudyComponent;
  let fixture: ComponentFixture<EditCaseStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCaseStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
