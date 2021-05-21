import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-dashboard-dialog',
  templateUrl: './dashboard-dialog.component.html',
  styleUrls: ['./dashboard-dialog.component.css']
})
export class DashboardDialogComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  productForm: FormGroup;
  ngOnInit(): void {
    this.productForm = this.fb.group({
      title: [],
      collaborator: this.fb.array([this.fb.group({point:''})])})
  }

  get collaborator() {
    return this.productForm.get('collaborator') as FormArray;
  }

  addCollaborator() {
    this.collaborator.push(this.fb.group({point:''}));
  }

  deleteCollaborator(index) {
    this.collaborator.removeAt(index);
  }

  name: string
  collaborators: Collaborator[]
}
export class Collaborator{
  collaborators: string
}