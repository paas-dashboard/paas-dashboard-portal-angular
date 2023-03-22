import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {BehaviorSubject, Observable} from "rxjs";

import {PulsarInstance} from "../../module/pulsar/pulsar.instance";
import {PulsarInstanceService} from "./pulsar.instance.service";

export class PulsarInstanceDatasource implements DataSource<PulsarInstance> {

  private instancesSubject = new BehaviorSubject<PulsarInstance[]>([]);

  constructor(private pulsarInstanceService: PulsarInstanceService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<PulsarInstance[]> {
    return this.instancesSubject.asObservable()
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.instancesSubject.complete()
  }

  getPulsarInstance() {
    this.pulsarInstanceService.getPulsarInstance().subscribe((pulsarInstances: PulsarInstance[]) => {
      this.instancesSubject.next(pulsarInstances);
    })
  }

}
