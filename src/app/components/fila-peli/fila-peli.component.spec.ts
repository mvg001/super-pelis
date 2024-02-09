import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaPeliComponent } from './fila-peli.component';

describe('FilaPeliComponent', () => {
  let component: FilaPeliComponent;
  let fixture: ComponentFixture<FilaPeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilaPeliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilaPeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
