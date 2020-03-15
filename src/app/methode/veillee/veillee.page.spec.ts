import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VeilleePage } from './veillee.page';

describe('VeilleePage', () => {
  let component: VeilleePage;
  let fixture: ComponentFixture<VeilleePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeilleePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VeilleePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
