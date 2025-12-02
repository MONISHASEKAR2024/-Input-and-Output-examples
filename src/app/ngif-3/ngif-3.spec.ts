import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngif3 } from './ngif-3';

describe('Ngif3', () => {
  let component: Ngif3;
  let fixture: ComponentFixture<Ngif3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngif3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngif3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
