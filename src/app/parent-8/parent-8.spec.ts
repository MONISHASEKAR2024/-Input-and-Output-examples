import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent8 } from './parent-8';

describe('Parent8', () => {
  let component: Parent8;
  let fixture: ComponentFixture<Parent8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parent8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parent8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
