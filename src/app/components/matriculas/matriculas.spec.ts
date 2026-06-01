import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatriculasComponent } from './matriculas';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('MatriculasComponent', () => {
  let component: MatriculasComponent;
  let fixture: ComponentFixture<MatriculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatriculasComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatriculasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});