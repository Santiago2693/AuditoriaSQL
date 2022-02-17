import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAudCDComponent } from './tabla-aud-cd.component';

describe('TablaAudCDComponent', () => {
  let component: TablaAudCDComponent;
  let fixture: ComponentFixture<TablaAudCDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAudCDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAudCDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
