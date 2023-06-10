import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
//import { ChildComponent } from './child.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, ChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with a parent count of 0', () => {
    expect(component.parentCount).toBe(0);
  });

  it('should increment the parent count when the button is clicked', () => {
    component.incrementCount();
    expect(component.parentCount).toBe(1);
  });

  it('should update the parent count when child emits countChanged event', () => {
    const newCount = 5;
    component.updateParentCount(newCount);
    expect(component.parentCount).toBe(newCount);
  });
});
