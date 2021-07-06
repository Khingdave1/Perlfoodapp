import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricanComponent } from './african.component';

describe('AfricanComponent', () => {
  let component: AfricanComponent;
  let fixture: ComponentFixture<AfricanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfricanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfricanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
