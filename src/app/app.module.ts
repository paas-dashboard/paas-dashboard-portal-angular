import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { KafkaInstancesComponent } from './kafka/kafka-instances/kafka-instances.component';
import { KubernetesDeploymentsComponent } from './kubernetes/kubernetes-deployments/kubernetes-deployments.component';
import { KubernetesInstanceComponent } from './kubernetes/kubernetes-instance/kubernetes-instance.component';
import { KubernetesInstancesComponent } from './kubernetes/kubernetes-instances/kubernetes-instances.component';
import { KubernetesNodesComponent } from './kubernetes/kubernetes-nodes/kubernetes-nodes.component';
import { KubernetesPodsComponent } from './kubernetes/kubernetes-pods/kubernetes-pods.component';
import { KubernetesStatefulsetsComponent } from './kubernetes/kubernetes-statefulsets/kubernetes-statefulsets.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    KafkaInstancesComponent,
    KubernetesInstanceComponent,
    KubernetesInstancesComponent,
    KubernetesDeploymentsComponent,
    KubernetesNodesComponent,
    KubernetesPodsComponent,
    KubernetesStatefulsetsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatTabsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
