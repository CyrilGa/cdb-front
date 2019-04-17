import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFixComponent } from './footer-fix.component';

describe('FooterFixComponent', () => {
  let component: FooterFixComponent;
  let fixture: ComponentFixture<FooterFixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterFixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
