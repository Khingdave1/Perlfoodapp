import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdslideComponent } from './adslide.component';

describe('AdslideComponent', () => {
  let component: AdslideComponent;
  let fixture: ComponentFixture<AdslideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdslideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
