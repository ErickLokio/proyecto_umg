import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCarreraComponent } from './listar-carrera.component';

describe('ListarCarreraComponent', () => {
  let component: ListarCarreraComponent;
  let fixture: ComponentFixture<ListarCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
