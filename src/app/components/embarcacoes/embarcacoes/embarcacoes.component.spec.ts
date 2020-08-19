import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbarcacoesComponent } from './embarcacoes.component';

describe('EmbarcacoesComponent', () => {
  let component: EmbarcacoesComponent;
  let fixture: ComponentFixture<EmbarcacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbarcacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbarcacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
