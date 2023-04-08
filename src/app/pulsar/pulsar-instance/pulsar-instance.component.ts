import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PulsarInstanceDatasource } from '../../../service/pulsar/pulsar.instance.datasource';
import { PulsarInstanceService } from '../../../service/pulsar/pulsar.instance.service';

@Component({
  selector: 'app-pulsar-instance',
  templateUrl: './pulsar-instance.component.html',
  styleUrls: ['./pulsar-instance.component.scss'],
})
export class PulsarInstanceComponent implements OnInit {
  dataSource: PulsarInstanceDatasource;

  instance: string | undefined;

  constructor(
    private pulsarInstanceService: PulsarInstanceService,
    private route: ActivatedRoute
  ) {
    this.dataSource = new PulsarInstanceDatasource(pulsarInstanceService);
  }
  ngOnInit(): void {
    this.dataSource.getPulsarInstance();
    this.route.params.subscribe((params: Params): void => {
      this.instance = params['instance'];
    });
  }

  clean_topic_no_subscription(): void {
    this.dataSource.clean_topic_no_subscription(
      this.instance!,
      'noSubscription'
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  import_pulsar_file() {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  export_pulsar_file() {}
}
