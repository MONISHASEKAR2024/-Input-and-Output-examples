import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderComponent } from './sender-component';

describe('SenderComponent', () => {
  let component: SenderComponent;
  let fixture: ComponentFixture<SenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
