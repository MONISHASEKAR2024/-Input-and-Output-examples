import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child4 } from './child-4';

describe('Child4', () => {
  let component: Child4;
  let fixture: ComponentFixture<Child4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
