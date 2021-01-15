import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcuradoraComponent } from './calcuradora.component';

describe('CalcuradoraComponent', () => {
  let component: CalcuradoraComponent;
  let fixture: ComponentFixture<CalcuradoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcuradoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcuradoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
