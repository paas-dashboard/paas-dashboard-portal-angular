import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';

import { PulsarInstance } from '../../module/pulsar/pulsar.instance';
import { MongoInstanceService } from './mongo.instance.service';

export class MongoInstanceDatasource implements DataSource<PulsarInstance> {
  private instancesSubject = new BehaviorSubject<PulsarInstance[]>([]);

  constructor(private pulsarInstanceService: MongoInstanceService) {}

  connect(collectionViewer: CollectionViewer): Observable<PulsarInstance[]> {
    return this.instancesSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.instancesSubject.complete();
  }

  getPulsarInstance() {
    this.pulsarInstanceService
      .getPulsarInstance()
      .subscribe((pulsarInstances: PulsarInstance[]) => {
        this.instancesSubject.next(pulsarInstances);
      });
  }

  clean_topic_no_subscription(instance: string, type: string) {
    this.pulsarInstanceService
      .clean_topic_no_subscription(instance, type)
      .subscribe();
  }
}
