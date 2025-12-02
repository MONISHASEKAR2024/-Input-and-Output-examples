import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngif1 } from './ngif-1';

describe('Ngif1', () => {
  let component: Ngif1;
  let fixture: ComponentFixture<Ngif1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngif1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngif1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
