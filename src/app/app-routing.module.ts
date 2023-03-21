import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from "./home-page/home-page.component";
import { KafkaInstancesComponent } from "./kafka/kafka-instances/kafka-instances.component";
import { KubernetesInstanceComponent } from "./kubernetes/kubernetes-instance/kubernetes-instance.component";
import { KubernetesInstancesComponent } from "./kubernetes/kubernetes-instances/kubernetes-instances.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'kafka', component: KafkaInstancesComponent},
  {path: 'kubernetes', component: KubernetesInstancesComponent},
  {path: 'kubernetes/:instance', component: KubernetesInstanceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
