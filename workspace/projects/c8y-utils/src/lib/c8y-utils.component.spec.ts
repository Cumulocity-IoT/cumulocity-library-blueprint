import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C8yUtilsComponent } from './c8y-utils.component';

describe('C8yUtilsComponent', () => {
  let component: C8yUtilsComponent;
  let fixture: ComponentFixture<C8yUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C8yUtilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C8yUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
