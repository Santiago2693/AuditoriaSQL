import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAudREComponent } from './tabla-aud-re.component';

describe('TablaAudREComponent', () => {
  let component: TablaAudREComponent;
  let fixture: ComponentFixture<TablaAudREComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAudREComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAudREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
