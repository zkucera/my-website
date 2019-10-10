import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltumTempusComponent } from './altum-tempus.component';

describe('AltumTempusComponent', () => {
  let component: AltumTempusComponent;
  let fixture: ComponentFixture<AltumTempusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltumTempusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltumTempusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
