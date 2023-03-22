import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {BehaviorSubject, Observable} from "rxjs";

import {KubernetesV1Pod} from "../../module/kubernetes/kubernetes-v1-pod";
import {KubernetesPodsService} from "./kubernetes.pods.service";

export class KubernetesPodsDatasource implements DataSource<KubernetesV1Pod> {

  private instancesSubject = new BehaviorSubject<KubernetesV1Pod[]>([]);

  constructor(private kubernetesPodsService: KubernetesPodsService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<KubernetesV1Pod[]> {
    return this.instancesSubject.asObservable()
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.instancesSubject.complete()
  }

  getPods(namespace: string) {
    this.kubernetesPodsService.getPods(namespace).subscribe((v1Pods: KubernetesV1Pod[]) => {
      this.instancesSubject.next(v1Pods);
    })
  }

}
