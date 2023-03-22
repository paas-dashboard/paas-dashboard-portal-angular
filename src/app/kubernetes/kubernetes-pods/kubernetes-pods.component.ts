import {Component, OnInit} from '@angular/core';

import {KubernetesPodsDatasource} from "../../../service/kubernetes/kubernetes.pods.datasource";
import {KubernetesPodsService} from "../../../service/kubernetes/kubernetes.pods.service";

@Component({
  selector: 'app-kubernetes-pods',
  templateUrl: './kubernetes-pods.component.html',
  styleUrls: ['./kubernetes-pods.component.scss']
})
export class KubernetesPodsComponent implements OnInit {

  dataSource: KubernetesPodsDatasource
  constructor(private kubernetesPodsService: KubernetesPodsService) {
    this.dataSource = new KubernetesPodsDatasource(kubernetesPodsService)
  }
  ngOnInit(): void {
    this.dataSource.getPods("default")
  }

}
