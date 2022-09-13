import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FolderModel } from './folder.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  folderName = new FormControl('', Validators.required);
  showTextBox: boolean = false;
  addedFolderArray: FolderModel[] = [];

  constructor() {}

  ngOnInit(): void {}

  addFolderToRoot() {
    this.showTextBox = true;    
  }

  addFolder() {
    this.folderName.markAsTouched();
    if (!this.folderName?.errors) {
      this.addedFolderArray.push({
        id: new Date().getTime().toString(),
        type: 'folder',
        name: this.folderName?.value,
        children: [],
      });
      this.showTextBox = false;
      this.folderName = new FormControl('', Validators.required);
    }
  }

  deleteFolder() {
    this.showTextBox = false;    
    this.folderName = new FormControl('', Validators.required);    
  }
}
