import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCounrtryComponent } from './card-counrtry.component';

describe('CardCounrtryComponent', () => {
  let component: CardCounrtryComponent;
  let fixture: ComponentFixture<CardCounrtryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCounrtryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCounrtryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
