import { Component, OnInit } from '@angular/core';
import { FilePreviewServiceService as FilePreviewService } from 'src/app/services/file-preview-service.service';
import { IPictureModel, PictureModel } from 'src/app/types';
import { MatDialogRef } from '@angular/material/dialog';
// @Component装饰器用来为该组件指定Angular所需的元数据
// 当我们想要在HTML中使用这个组件实例时，使用pa-fileupload标签
@Component({
  selector: 'pa-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {
  ngOnInit(): void {

  }
  protected imageSource: IPictureModel | null;
  protected message: any;
  protected description: string;
  protected tags: string;
  constructor(
    private dialog: MatDialogRef<FileuploadComponent>,
    private preview: FilePreviewService) {
    this.imageSource = null;
    this.message = null;
    this.description = "";
    this.tags = "";
  }
  public OnImageSelected(files: any): void {
    this.preview.Preview(files).then(r => {
      this.imageSource = r;
    }).catch(r => {
      this.message = r;
    });
  }
  public Save(): void {
    this.imageSource!.Description = this.description;
    this.imageSource!.Tags = this.tags;
    this.dialog.close(this.imageSource);
  }
}
