import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRelativeComponent } from './header-relative.component';

describe('HeaderRelativeComponent', () => {
  let component: HeaderRelativeComponent;
  let fixture: ComponentFixture<HeaderRelativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRelativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRelativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
