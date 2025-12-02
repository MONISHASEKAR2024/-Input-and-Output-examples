import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child9 } from './child-9';

describe('Child9', () => {
  let component: Child9;
  let fixture: ComponentFixture<Child9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
