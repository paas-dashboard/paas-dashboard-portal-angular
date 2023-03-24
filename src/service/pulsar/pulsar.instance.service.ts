import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

import BACKEND_HOST from "../../constant";
import {PulsarInstance} from "../../module/pulsar/pulsar.instance";

@Injectable({providedIn: "root"})
export class PulsarInstanceService {

  constructor(private http: HttpClient) {
  }

  getPulsarInstance(): Observable<PulsarInstance[]> {
    return this.http.get<PulsarInstance[]>(BACKEND_HOST + "/api/pulsar/instance")
  }

  clean_topic_no_subscription(type: string): Observable<void> {
    return this.http.post<void>(BACKEND_HOST + "/api/pulsar/instances/instance/clear-inactive-topic?type" + type, null)
  }

}
