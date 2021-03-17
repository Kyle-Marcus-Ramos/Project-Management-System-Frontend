import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        RegistrationComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RegistrationComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ProjectManagementSystem'`, () => {
    const fixture = TestBed.createComponent(RegistrationComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ProjectManagementSystem');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(RegistrationComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ProjectManagementSystem app is running!');
  });
});
