import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KubernetesInstancesComponent } from "./kubernetes/kubernetes-instances/kubernetes-instances.component";
import { KafkaInstancesComponent } from "./kafka/kafka-instances/kafka-instances.component";
import { HomePageComponent } from "./home-page/home-page.component";
// 模块添加路由
const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'kafka', component: KafkaInstancesComponent},
  {path: 'kubernetes', component: KubernetesInstancesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
