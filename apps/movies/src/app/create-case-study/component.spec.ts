import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCaseStudyComponent } from './component';

describe('CreateCaseStudyComponent', () => {
  let component: CreateCaseStudyComponent;
  let fixture: ComponentFixture<CreateCaseStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCaseStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
