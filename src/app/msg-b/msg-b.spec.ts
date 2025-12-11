import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgB } from './msg-b';

describe('MsgB', () => {
  let component: MsgB;
  let fixture: ComponentFixture<MsgB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsgB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgB);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
