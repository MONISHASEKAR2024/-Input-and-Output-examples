import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent6 } from './parent-6';

describe('Parent6', () => {
  let component: Parent6;
  let fixture: ComponentFixture<Parent6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parent6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parent6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
