import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngif2 } from './ngif-2';

describe('Ngif2', () => {
  let component: Ngif2;
  let fixture: ComponentFixture<Ngif2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngif2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngif2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
