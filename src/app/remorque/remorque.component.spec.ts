import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemorqueComponent } from './remorque.component';

describe('RemorqueComponent', () => {
  let component: RemorqueComponent;
  let fixture: ComponentFixture<RemorqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemorqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemorqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
