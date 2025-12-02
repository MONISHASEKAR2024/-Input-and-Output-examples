import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngif4 } from './ngif-4';

describe('Ngif4', () => {
  let component: Ngif4;
  let fixture: ComponentFixture<Ngif4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngif4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngif4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
