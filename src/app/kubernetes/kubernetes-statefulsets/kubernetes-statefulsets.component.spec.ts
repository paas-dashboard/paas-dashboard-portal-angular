import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KubernetesStatefulsetsComponent } from './kubernetes-statefulsets.component';

describe('KubernetesStatefulsetsComponent', () => {
  let component: KubernetesStatefulsetsComponent;
  let fixture: ComponentFixture<KubernetesStatefulsetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KubernetesStatefulsetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KubernetesStatefulsetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
