import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import BACKEND_HOST from "../../constant";
import { KubernetesInstance } from "../../module/kubernetes/kubernetes-instance";

@Injectable({providedIn: "root"})
export class KubernetesService {
  constructor(private http: HttpClient) { }

  getInstances(): Observable<KubernetesInstance[]> {
    return this.http.get<KubernetesInstance[]>(BACKEND_HOST + '/api/kubernetes/instances');
  }
}
