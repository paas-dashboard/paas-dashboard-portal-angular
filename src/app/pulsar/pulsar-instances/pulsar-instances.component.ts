import { Component, OnInit } from '@angular/core';

import { PulsarInstancesDatasource } from '../../../service/pulsar/pulsar.instances.datasource';
import { PulsarInstancesService } from '../../../service/pulsar/pulsar.instances.service';

@Component({
  selector: 'app-pulsar-instance',
  templateUrl: './pulsar-instances.component.html',
  styleUrls: ['./pulsar-instances.component.scss'],
})
export class PulsarInstancesComponent implements OnInit {
  dataSource: PulsarInstancesDatasource;
  constructor(private pulsarInstancesService: PulsarInstancesService) {
    this.dataSource = new PulsarInstancesDatasource(pulsarInstancesService);
  }
  ngOnInit(): void {
    this.dataSource.getPulsarInstance();
  }
}
