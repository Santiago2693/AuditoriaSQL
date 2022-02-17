import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAudSDComponent } from './tabla-aud-sd.component';

describe('TablaAudSDComponent', () => {
  let component: TablaAudSDComponent;
  let fixture: ComponentFixture<TablaAudSDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAudSDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAudSDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
