import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionModalComponent } from './modal-evolution-cmp';

describe('EvolutionModalComponent', () => {
  let component: EvolutionModalComponent;
  let fixture: ComponentFixture<EvolutionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolutionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
