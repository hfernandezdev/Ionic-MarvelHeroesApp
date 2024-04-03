import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperheroDetailPage } from './superhero-detail.page';

describe('SuperheroDetailPage', () => {
  let component: SuperheroDetailPage;
  let fixture: ComponentFixture<SuperheroDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
