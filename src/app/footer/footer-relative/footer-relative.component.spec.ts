import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRelativeComponent } from './footer-relative.component';

describe('FooterRelativeComponent', () => {
  let component: FooterRelativeComponent;
  let fixture: ComponentFixture<FooterRelativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterRelativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterRelativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
