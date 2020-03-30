import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GardianDetailAddComponent } from './gardian-detail-add.component';

describe('GardianDetailAddComponent', () => {
  let component: GardianDetailAddComponent;
  let fixture: ComponentFixture<GardianDetailAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardianDetailAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GardianDetailAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
