import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CassandraInstanceComponent } from './cassandra/cassandra-instance/cassandra-instance.component';
import { CassandraInstancesComponent } from './cassandra/cassandra-instances/cassandra-instances.component';
import { ChatsComponent } from './chats/chats.component';
import { EtcdInstanceComponent } from './etcd/etcd-instance/etcd-instance.component';
import { EtcdInstancesComponent } from './etcd/etcd-instances/etcd-instances.component';
import { HomePageComponent } from './home-page/home-page.component';
import { KafkaInstancesComponent } from './kafka/kafka-instances/kafka-instances.component';
import { KubernetesInstanceComponent } from './kubernetes/kubernetes-instance/kubernetes-instance.component';
import { KubernetesInstancesComponent } from './kubernetes/kubernetes-instances/kubernetes-instances.component';
import { MongoInstanceComponent } from './mongo/mongo-instance/mongo-instance.component';
import { MongoInstancesComponent } from './mongo/mongo-instances/mongo-instances.component';
import { PulsarInstanceComponent } from './pulsar/pulsar-instance/pulsar-instance.component';
import { PulsarInstancesComponent } from './pulsar/pulsar-instances/pulsar-instances.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cassandra', component: CassandraInstancesComponent },
  { path: 'cassandra/:instance', component: CassandraInstanceComponent },
  { path: 'chat', component: ChatsComponent },
  { path: 'etcd', component: EtcdInstancesComponent },
  { path: 'etcd/:instance', component: EtcdInstanceComponent },
  { path: 'kafka', component: KafkaInstancesComponent },
  { path: 'kubernetes', component: KubernetesInstancesComponent },
  { path: 'kubernetes/:instance', component: KubernetesInstanceComponent },
  {
    path: 'kubernetes/instances/default',
    component: KubernetesInstanceComponent,
  },
  { path: 'mongo', component: MongoInstancesComponent },
  { path: 'mongo/:instance', component: MongoInstanceComponent },
  { path: 'pulsar', component: PulsarInstancesComponent },
  { path: 'pulsar/:instance', component: PulsarInstanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
