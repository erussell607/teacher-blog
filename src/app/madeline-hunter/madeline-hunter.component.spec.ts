import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadelineHunterComponent } from './madeline-hunter.component';

describe('MadelineHunterComponent', () => {
  let component: MadelineHunterComponent;
  let fixture: ComponentFixture<MadelineHunterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadelineHunterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadelineHunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
