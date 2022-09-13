import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-folder',
  templateUrl: './add-folder.component.html',
  styleUrls: ['./add-folder.component.scss'],
})

export class AddFolderComponent implements OnInit {

  @Input() mainArray: any;

  name = new FormControl('', Validators.required);    
  objectId: string = '';
  selectedType: string = '';
  iconVisible: boolean = false;
  onFocusId: string = '';

  constructor() {}

  ngOnInit(): void {
  }

  addFileOrFolder(mainObject: any) {
    if(this.objectId || this.selectedType) {
      this.clearForm();
    }
    this.objectId = mainObject.id;    
  }

  selectType(type: string) {
    this.selectedType = type;
  }

  mouseEnter(id: string) {    
    this.iconVisible = true;
    this.onFocusId = id;
  }
  
  mouseLeave() {    
    this.iconVisible = false;
  }

  addChildren(mainObject: any) {
    this.name.markAsTouched();
    
    if (!this.name?.errors) {      
      mainObject.children.push({
        id: new Date().getTime().toString(),
        type: this.selectedType,
        name: this.name?.value,
        children: [],
      });
      this.clearForm();
    }    
  }

  deleteFileOrFolder(mainObject: any) {
    const index = this.mainArray.findIndex(function (value: any) {
      return value.id === mainObject.id;
    });
    this.mainArray.splice(index, 1);
  }

  cancelFileOrFolder() {
    this.clearForm();
  }

  clearForm() {
    this.objectId = '';
    this.selectedType = '';
    this.name.reset();
  }

}
