import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenneComponent } from './benne.component';

describe('BenneComponent', () => {
  let component: BenneComponent;
  let fixture: ComponentFixture<BenneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
