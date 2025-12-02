import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent9 } from './parent-9';

describe('Parent9', () => {
  let component: Parent9;
  let fixture: ComponentFixture<Parent9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parent9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parent9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
