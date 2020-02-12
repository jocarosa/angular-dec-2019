import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorPokemonComponent } from './paginator-cmp';

describe('PaginatorPokemonComponent', () => {
  let component: PaginatorPokemonComponent;
  let fixture: ComponentFixture<PaginatorPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatorPokemonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
