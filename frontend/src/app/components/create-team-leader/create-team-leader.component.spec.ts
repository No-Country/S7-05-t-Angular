import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTeamLeaderComponent } from './create-team-leader.component';

describe('CreateTeamLeaderComponent', () => {
  let component: CreateTeamLeaderComponent;
  let fixture: ComponentFixture<CreateTeamLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTeamLeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTeamLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
