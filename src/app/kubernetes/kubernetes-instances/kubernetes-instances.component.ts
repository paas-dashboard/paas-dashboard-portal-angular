import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

import { KubernetesInstanceDataSource } from "../../../service/kubernetes/kubernetes.instance.datasource";
import { KubernetesService } from "../../../service/kubernetes/kubernetes.service";

@Component({
  selector: 'app-kubernetes-instances',
  templateUrl: './kubernetes-instances.component.html',
  styleUrls: ['./kubernetes-instances.component.scss']
})
export class KubernetesInstancesComponent implements OnInit {

  dataSource: KubernetesInstanceDataSource;

  instance: string | undefined

  constructor(private kubernetesService: KubernetesService, private route: ActivatedRoute) {
    this.dataSource = new KubernetesInstanceDataSource(this.kubernetesService);
  }
  ngOnInit() {
    this.dataSource.getInstances();
    this.route.params.subscribe((params: Params): void => {
      this.instance = params['instance']
    })
  }
}
