import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent7 } from './parent-7';

describe('Parent7', () => {
  let component: Parent7;
  let fixture: ComponentFixture<Parent7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parent7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parent7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
