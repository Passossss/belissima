import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevendedoraFormComponent } from './revendedora-form.component';

describe('RevendedoraFormComponent', () => {
  let component: RevendedoraFormComponent;
  let fixture: ComponentFixture<RevendedoraFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevendedoraFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevendedoraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
