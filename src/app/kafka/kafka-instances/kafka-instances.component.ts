import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { KafkaInstanceDataSource } from '../../../service/kafka/kafka.instance.datasource';
import { KafkaService } from '../../../service/kafka/kafka.service';

@Component({
  selector: 'app-kafka-instances',
  templateUrl: './kafka-instances.component.html',
  styleUrls: ['./kafka-instances.component.scss'],
})
export class KafkaInstancesComponent implements OnInit {
  kafkaDataSource: KafkaInstanceDataSource;

  instance: string | undefined;

  constructor(
    private kafkaService: KafkaService,
    private route: ActivatedRoute
  ) {
    this.kafkaDataSource = new KafkaInstanceDataSource(this.kafkaService);
  }

  ngOnInit(): void {
    this.kafkaDataSource.getInstances();
    this.route.params.subscribe((params: Params): void => {
      this.instance = params['instance'];
    });
  }
}
