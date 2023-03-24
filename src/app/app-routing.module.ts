import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatsComponent } from "./chats/chats.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { KafkaInstancesComponent } from "./kafka/kafka-instances/kafka-instances.component";
import { KubernetesInstanceComponent } from "./kubernetes/kubernetes-instance/kubernetes-instance.component";
import { KubernetesInstancesComponent } from "./kubernetes/kubernetes-instances/kubernetes-instances.component";
import {PulsarInstanceComponent} from "./pulsar/pulsar-instance/pulsar-instance.component";
import {PulsarInstancesComponent} from "./pulsar/pulsar-instances/pulsar-instances.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'chat', component: ChatsComponent},
  {path: 'kafka', component: KafkaInstancesComponent},
  {path: 'kubernetes', component: KubernetesInstancesComponent},
  {path: 'kubernetes/:instance', component: KubernetesInstanceComponent},
  {path: 'pulsar', component: PulsarInstancesComponent},
  {path: 'pulsar/:instance', component: PulsarInstanceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
