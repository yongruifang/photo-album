import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddImageService } from './add-image.service';
import { IPictureModel } from '../types';
import { LoadImageService } from './load-image.service';
//这个服务将用到三个实例
// 1. HttpClient 管理get和post操作

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {

  constructor(private client: HttpClient, private addImage: AddImageService, private loadImage: LoadImageService) {
  }

  public Initialize(): void {
    this.SubscribeToAddImageContextChanges();
    this.LoadImagesWithSubscription();
  }

  private LoadImagesWithSubscription() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/text',
      })
    };
    const endpoint = 'https://resilient-bienenstitch-d84d76.netlify.app/.netlify/functions/pictures'
    this.client.get<string[]>(`${endpoint}/get/`, httpOptions).subscribe(pic => {
      pic.forEach(img => {
        this.client.get<IPictureModel>(`${endpoint}/id/` + img).subscribe(pic1 => {
          if (pic1 !== null) {
            this.loadImage.add(pic1);
          }
        });
      });
    });
  }

  private SubscribeToAddImageContextChanges() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    this.addImage.context.subscribe(message => {
      if (message === null) {
        return;
      }
      this.client.post<IPictureModel>('http://localhost:8888/.netlify/functions/pictures/add/', message, httpOptions).subscribe(callback => {
      });
    });
  }
}
