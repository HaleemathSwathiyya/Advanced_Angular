import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should decrement the child count when the button is clicked', () => {
    component.childCount = 3;
    component.decrementCount();
    expect(component.childCount).toBe(2);
  });

  it('should emit countChanged event when decrementing the count', () => {
    spyOn(component.countChanged, 'emit');
    component.childCount = 3;
    component.decrementCount();
    expect(component.countChanged.emit).toHaveBeenCalledWith(2);
  });

  it('should not decrement the child count when it is already zero', () => {
    component.childCount = 0;
    component.decrementCount();
    expect(component.childCount).toBe(0);
  });
});
