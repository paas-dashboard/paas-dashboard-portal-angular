import { Component, OnInit } from '@angular/core';
import { KubernetesInstanceDataSource } from "../../../service/kubernetes/kubernetes.instance.datasource";
import { KubernetesService } from "../../../service/kubernetes/kubernetes.service";

@Component({
  selector: 'app-kubernetes-instances',
  templateUrl: './kubernetes-instances.component.html',
  styleUrls: ['./kubernetes-instances.component.scss']
})
export class KubernetesInstancesComponent implements OnInit {

  dataSource: KubernetesInstanceDataSource;

  constructor(private kubernetesService: KubernetesService) {
    this.dataSource = new KubernetesInstanceDataSource(this.kubernetesService);
  }
  ngOnInit() {
    this.dataSource.getInstances();
  }
}
