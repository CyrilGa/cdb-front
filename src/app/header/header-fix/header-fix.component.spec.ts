import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFixComponent } from './header-fix.component';

describe('HeaderFixComponent', () => {
  let component: HeaderFixComponent;
  let fixture: ComponentFixture<HeaderFixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
