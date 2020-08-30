import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictDialogeComponent } from './district-dialoge.component';

describe('DistrictDialogeComponent', () => {
  let component: DistrictDialogeComponent;
  let fixture: ComponentFixture<DistrictDialogeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictDialogeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictDialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
