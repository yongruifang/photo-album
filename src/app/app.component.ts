import { Component } from '@angular/core';
// import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { AddImageService } from './services/add-image.service';

@Component({
  selector: 'pa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'photoalbum';
  private dialogRef: MatDialogRef<FileuploadComponent> | null = null;
  constructor(private dialog: MatDialog, private addImage: AddImageService) {

  }
  public ImportImage(): void {
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.autoFocus = true;
    config.width = '500px';
    this.dialogRef = this.dialog.open(FileuploadComponent, config);
    this.dialogRef.afterClosed().subscribe(r => {
      if (r) {
        this.addImage.add(r);
      }
    });
  }
}
