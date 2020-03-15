import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivitedisplayPage } from './activitedisplay.page';

describe('ActivitedisplayPage', () => {
  let component: ActivitedisplayPage;
  let fixture: ComponentFixture<ActivitedisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitedisplayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivitedisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
