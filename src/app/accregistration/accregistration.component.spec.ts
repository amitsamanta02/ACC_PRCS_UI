import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccregistrationComponent } from './accregistration.component';

describe('AccregistrationComponent', () => {
  let component: AccregistrationComponent;
  let fixture: ComponentFixture<AccregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
