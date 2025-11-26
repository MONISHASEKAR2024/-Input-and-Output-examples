import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent4 } from './parent-4';

describe('Parent4', () => {
  let component: Parent4;
  let fixture: ComponentFixture<Parent4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parent4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parent4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
