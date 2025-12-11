import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgA } from './msg-a';

describe('MsgA', () => {
  let component: MsgA;
  let fixture: ComponentFixture<MsgA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsgA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgA);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
