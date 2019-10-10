import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfStartComponent } from './self-start.component';

describe('SelfStartComponent', () => {
  let component: SelfStartComponent;
  let fixture: ComponentFixture<SelfStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
