import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFirst } from './banner-first';

describe('BannerFirst', () => {
  let component: BannerFirst;
  let fixture: ComponentFixture<BannerFirst>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerFirst]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerFirst);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
