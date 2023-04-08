import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import BACKEND_HOST from '../../constant';
import { KafkaInstance } from '../../module/kafka/kafka-instance';

@Injectable({ providedIn: 'root' })
export class KafkaService {
  constructor(private http: HttpClient) {}

  getInstances(): Observable<KafkaInstance[]> {
    return this.http.get<KafkaInstance[]>(
      BACKEND_HOST + '/api/kafka/instances'
    );
  }
}
