import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbForumComponent } from './kb-forum.component';

describe('KbForumComponent', () => {
  let component: KbForumComponent;
  let fixture: ComponentFixture<KbForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
