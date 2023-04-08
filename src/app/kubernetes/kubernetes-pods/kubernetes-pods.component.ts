import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { KubernetesPodsDatasource } from '../../../service/kubernetes/kubernetes.pods.datasource';
import { KubernetesPodsService } from '../../../service/kubernetes/kubernetes.pods.service';

@Component({
  selector: 'app-kubernetes-pods',
  templateUrl: './kubernetes-pods.component.html',
  styleUrls: ['./kubernetes-pods.component.scss'],
})
export class KubernetesPodsComponent implements OnInit {
  dataSource: KubernetesPodsDatasource;

  instance: string | undefined;

  constructor(
    private kubernetesPodsService: KubernetesPodsService,
    private route: ActivatedRoute
  ) {
    this.dataSource = new KubernetesPodsDatasource(kubernetesPodsService);
  }

  ngOnInit(): void {
    this.dataSource.getPods('default');
    this.route.params.subscribe((params: Params): void => {
      this.instance = params['instance'];
    });
  }
}
