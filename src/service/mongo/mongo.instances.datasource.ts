import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';

import { PulsarInstance } from '../../module/pulsar/pulsar.instance';
import { MongoInstanceService } from './mongo.instance.service';
import { MongoInstancesService } from './mongo.instances.service';

export class MongoInstancesDatasource implements DataSource<PulsarInstance> {
  private instancesSubject = new BehaviorSubject<PulsarInstance[]>([]);

  constructor(private pulsarInstancesService: MongoInstancesService) {}

  connect(collectionViewer: CollectionViewer): Observable<PulsarInstance[]> {
    return this.instancesSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.instancesSubject.complete();
  }

  getPulsarInstance() {
    this.pulsarInstancesService
      .getPulsarInstance()
      .subscribe((pulsarInstances: PulsarInstance[]) => {
        this.instancesSubject.next(pulsarInstances);
      });
  }
}
