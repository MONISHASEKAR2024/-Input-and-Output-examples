import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent5 } from './parent-5';

describe('Parent5', () => {
  let component: Parent5;
  let fixture: ComponentFixture<Parent5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parent5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parent5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
