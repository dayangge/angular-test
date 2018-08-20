import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducetDetailComponent } from './producet-detail.component';

describe('ProducetDetailComponent', () => {
  let component: ProducetDetailComponent;
  let fixture: ComponentFixture<ProducetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
