import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KubernetesPodsComponent } from './kubernetes-pods.component';

describe('KubernetesPodsComponent', () => {
  let component: KubernetesPodsComponent;
  let fixture: ComponentFixture<KubernetesPodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KubernetesPodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KubernetesPodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
