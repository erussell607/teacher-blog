import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveEComponent } from './five-e.component';

describe('FiveEComponent', () => {
  let component: FiveEComponent;
  let fixture: ComponentFixture<FiveEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
