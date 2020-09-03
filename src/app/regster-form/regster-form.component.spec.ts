import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegsterFormComponent } from './regster-form.component';

describe('RegsterFormComponent', () => {
  let component: RegsterFormComponent;
  let fixture: ComponentFixture<RegsterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegsterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegsterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
