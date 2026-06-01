import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CafeteriaComponent } from './cafeteria'; // Ajusta la ruta según tu estructura
import { provideHttpClient } from '@angular/common/http'; 
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('CafeteriaComponent', () => {
  let component: CafeteriaComponent;
  let fixture: ComponentFixture<CafeteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeteriaComponent], // Componente standalone
      providers: [
        provideHttpClient(),
        provideHttpClientTesting() // Simulación de HTTP
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CafeteriaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});