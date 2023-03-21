import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { HomePageComponent } from './home-page/home-page.component';
import { KafkaInstancesComponent } from './kafka/kafka-instances/kafka-instances.component';
import { KubernetesInstanceComponent } from './kubernetes/kubernetes-instance/kubernetes-instance.component';
import { KubernetesInstancesComponent } from './kubernetes/kubernetes-instances/kubernetes-instances.component';
import { KubernetesDeploymentsComponent } from './kubernetes/kubernetes-deployments/kubernetes-deployments.component';
import { KubernetesNodesComponent } from './kubernetes/kubernetes-nodes/kubernetes-nodes.component';
import { KubernetesPodsComponent } from './kubernetes/kubernetes-pods/kubernetes-pods.component';
import { KubernetesStatefulsetsComponent } from './kubernetes/kubernetes-statefulsets/kubernetes-statefulsets.component';
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { HttpClientModule } from "@angular/common/http";

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
