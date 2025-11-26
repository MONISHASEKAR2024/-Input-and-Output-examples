import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child5 } from './child-5';

describe('Child5', () => {
  let component: Child5;
  let fixture: ComponentFixture<Child5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
