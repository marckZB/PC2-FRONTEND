import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TareasComponent } from './tareas'; // <-- Importa la clase de tu tareas.ts
import { provideHttpClient } from '@angular/common/http'; 
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('TareasComponent', () => {
  let component: TareasComponent;
  let fixture: ComponentFixture<TareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasComponent], // <-- Usamos tu componente standalone directo
      providers: [
        provideHttpClient(),
        provideHttpClientTesting() // Esto simula el cliente HTTP para que el test no se raye
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TareasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});