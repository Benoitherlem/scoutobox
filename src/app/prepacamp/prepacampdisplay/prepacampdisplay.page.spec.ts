import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrepacampdisplayPage } from './prepacampdisplay.page';

describe('PrepacampdisplayPage', () => {
  let component: PrepacampdisplayPage;
  let fixture: ComponentFixture<PrepacampdisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepacampdisplayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrepacampdisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
