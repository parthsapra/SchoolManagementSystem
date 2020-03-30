import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailAddComponent } from './student-detail-add.component';

describe('StudentDetailAddComponent', () => {
  let component: StudentDetailAddComponent;
  let fixture: ComponentFixture<StudentDetailAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDetailAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
