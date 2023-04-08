import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

import BACKEND_HOST from "../../constant";
import {PulsarInstance} from "../../module/pulsar/pulsar.instance";

@Injectable({providedIn: "root"})
export class MongoInstancesService {

  constructor(private http: HttpClient) {
  }

  getPulsarInstance(): Observable<PulsarInstance[]> {
    return this.http.get<PulsarInstance[]>(BACKEND_HOST + "/api/pulsar/instances")
  }

}
