import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Revendedoras } from './revendedoras';

describe('Revendedoras', () => {
  let component: Revendedoras;
  let fixture: ComponentFixture<Revendedoras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Revendedoras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Revendedoras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
