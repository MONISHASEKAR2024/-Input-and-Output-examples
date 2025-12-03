import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAttributeDirective1 } from './custom-attribute-directive-1';

describe('CustomAttributeDirective1', () => {
  let component: CustomAttributeDirective1;
  let fixture: ComponentFixture<CustomAttributeDirective1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomAttributeDirective1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomAttributeDirective1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
