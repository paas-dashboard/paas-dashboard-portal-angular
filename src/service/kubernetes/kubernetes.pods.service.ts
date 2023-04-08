import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import BACKEND_HOST from '../../constant';
import { KubernetesV1Pod } from '../../module/kubernetes/kubernetes-v1-pod';

@Injectable({ providedIn: 'root' })
export class KubernetesPodsService {
  constructor(private http: HttpClient) {}

  getPods(namespace: string): Observable<KubernetesV1Pod[]> {
    return this.http.get<KubernetesV1Pod[]>(
      BACKEND_HOST +
        '/api/kubernetes/instances/default/namespaces/' +
        namespace +
        '/pods'
    );
  }
}
