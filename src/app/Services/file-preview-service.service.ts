import { Injectable } from '@angular/core';
import { IPictureModel, PictureModel } from '../types';

@Injectable({
  providedIn: 'root'
})
export class FilePreviewServiceService {

  constructor() { }

  public async Preview(files: any): Promise<IPictureModel> {
    return await new Promise((resolve, reject) => {
      if (files.length === 0) {
        return;
      }
      const file = files[0]
      if (file.type.match(/image\/*/) === null) {
        reject(new Error("Only images are supported"));
        return;
      }
      const imageModel: IPictureModel = new PictureModel()
      const reader = new FileReader();
      reader.onload = (evt) => {
        imageModel.Image = reader.result as string;
        resolve(imageModel);
      };
      reader.readAsDataURL(file);
    });
  }
}
