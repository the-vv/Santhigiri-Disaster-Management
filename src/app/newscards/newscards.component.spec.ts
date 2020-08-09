import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewscardsComponent } from './newscards.component';

describe('NewscardsComponent', () => {
  let component: NewscardsComponent;
  let fixture: ComponentFixture<NewscardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewscardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
