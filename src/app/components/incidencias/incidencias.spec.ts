import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidenciasComponent } from './incidencias'; // Asegúrate de que la ruta sea correcta
import { provideHttpClient } from '@angular/common/http'; 
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('IncidenciasComponent', () => {
  let component: IncidenciasComponent;
  let fixture: ComponentFixture<IncidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidenciasComponent], 
      providers: [
        provideHttpClient(),
        provideHttpClientTesting() 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IncidenciasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener la lista de incidencias vacía al inicio', () => {
    expect(component.incidencias.length).toBe(0);
  });
});