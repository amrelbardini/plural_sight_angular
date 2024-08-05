import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgmMapsDemoComponent } from './agm-maps-demo.component';

describe('AgmMapsDemoComponent', () => {
  let component: AgmMapsDemoComponent;
  let fixture: ComponentFixture<AgmMapsDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgmMapsDemoComponent]
    });
    fixture = TestBed.createComponent(AgmMapsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
