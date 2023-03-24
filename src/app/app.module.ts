import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatLegacyButtonModule } from "@angular/material/legacy-button";
import {MatListModule} from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatsComponent } from './chats/chats.component';
import { HomePageComponent } from './home-page/home-page.component';
import { KafkaInstancesComponent } from './kafka/kafka-instances/kafka-instances.component';
import { KubernetesDeploymentsComponent } from './kubernetes/kubernetes-deployments/kubernetes-deployments.component';
import { KubernetesInstanceComponent } from './kubernetes/kubernetes-instance/kubernetes-instance.component';
import { KubernetesInstancesComponent } from './kubernetes/kubernetes-instances/kubernetes-instances.component';
import { KubernetesNodesComponent } from './kubernetes/kubernetes-nodes/kubernetes-nodes.component';
import { KubernetesPodsComponent } from './kubernetes/kubernetes-pods/kubernetes-pods.component';
import { KubernetesStatefulsetsComponent } from './kubernetes/kubernetes-statefulsets/kubernetes-statefulsets.component';
import { PulsarInstanceComponent } from './pulsar/pulsar-instance/pulsar-instance.component';
import { PulsarInstancesComponent } from './pulsar/pulsar-instances/pulsar-instances.component';

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
    PulsarInstanceComponent,
    PulsarInstancesComponent,
    ChatsComponent,
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
    MatSidenavModule,
    FormsModule,
    MatToolbarModule,
    MatLegacyButtonModule,
    MatListModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
