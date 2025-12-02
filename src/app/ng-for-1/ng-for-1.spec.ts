import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFor1 } from './ng-for-1';

describe('NgFor1', () => {
  let component: NgFor1;
  let fixture: ComponentFixture<NgFor1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgFor1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgFor1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
