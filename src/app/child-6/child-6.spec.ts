import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child6 } from './child-6';

describe('Child6', () => {
  let component: Child6;
  let fixture: ComponentFixture<Child6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
