import { Component, OnInit, Input } from '@angular/core';
import { AddImageService } from '../../services/add-image.service';
import { IPictureModel } from '../../types';
import { TransferDataService } from '../../services/transfer-data.service';
import { LoadImageService } from '../../services/load-image.service';

@Component({
  selector: 'pa-page-body',
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.scss']
})
export class PageBodyComponent implements OnInit {

  Pictures: Array<IPictureModel>;
  constructor(private addImage: AddImageService, private loadImage: LoadImageService, private transfer: TransferDataService) {
    this.Pictures = new Array<IPictureModel>();
  }

  onload = false;
  ngOnInit() {
    this.transfer.Initialize();
    this.addImage.context.subscribe(message => {
      if (!message) {
        return;
      }
      this.Pictures.push(message);
    });
    this.loadImage.context.subscribe(message => {
      if (!message) {
        this.onload = true;
        return;
      }
      this.Pictures.push(message);
      this.onload = true;
    });
  }
}