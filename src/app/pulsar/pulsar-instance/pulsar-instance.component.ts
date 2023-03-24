import {Component, OnInit} from '@angular/core';

import {PulsarInstanceDatasource} from "../../../service/pulsar/pulsar.instance.datasource";
import {PulsarInstanceFileDatasource} from "../../../service/pulsar/pulsar.instance.file.datasource";
import {PulsarInstanceService} from "../../../service/pulsar/pulsar.instance.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-pulsar-instance',
  templateUrl: './pulsar-instance.component.html',
  styleUrls: ['./pulsar-instance.component.scss']
})
export class PulsarInstanceComponent implements OnInit {
  dataSource: PulsarInstanceDatasource

  importDataSource: PulsarInstanceFileDatasource

  instance: string | undefined


  constructor(private pulsarInstanceService: PulsarInstanceService, private route: ActivatedRoute) {
    this.dataSource = new PulsarInstanceDatasource(pulsarInstanceService)
    this.importDataSource = new PulsarInstanceFileDatasource(pulsarInstanceService)
  }
  ngOnInit(): void {
    this.dataSource.getPulsarInstance()
    this.route.params.subscribe((params: Params): void => {
      this.instance = params['instance']
    })
  }

  clean_topic_no_subscription(type: string):void {
    this.dataSource.clean_topic_no_subscription(type)
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  import_pulsar_file() {

  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  export_pulsar_file() {

  }

}
