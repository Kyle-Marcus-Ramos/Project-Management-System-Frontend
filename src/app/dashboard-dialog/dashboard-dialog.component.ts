import { Component, Inject, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { saveDashboardDTO } from '../model/api/dashboardModal';
import { GetProjectInformationRequestDTO } from '../model/api/projectInfo';
import { DashboardModalService } from '../service/api/dashboardModal.service';
@Component({
  selector: 'app-dashboard-dialog',
  templateUrl: './dashboard-dialog.component.html',
  styleUrls: ['./dashboard-dialog.component.css'],
  providers: [DashboardModalService]

})
export class DashboardDialogComponent implements OnInit {

  private accountId: number;

  constructor(private fb: FormBuilder,
    private _dashboardModalService: DashboardModalService,
    private dialogRef: MatDialogRef<DashboardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.accountId = data.accountId
  }
  productForm: FormGroup;

  public card: saveDashboardDTO;
  public project: GetProjectInformationRequestDTO;

  ngOnInit(): void {
    this.card = new saveDashboardDTO();

    this.project = new GetProjectInformationRequestDTO();

    this.productForm = this.fb.group({
      title: [],
      collaborator: this.fb.array([this.fb.group({ email: '' })])
    })


  }

  save() {
    // this.card = new saveDashboardDTO();

    // console.log(this.productForm.value);
    var array = [];
    this.card.email = (this.productForm).value.collaborator.email;
    this.project.leader = this.project.leader;
    this.project.budget = this.project.budget;
    this.project.duration = this.project.duration;

    sessionStorage.setItem("leader", JSON.stringify(this.project.leader));
    sessionStorage.setItem("budget", JSON.stringify(this.project.budget));
    sessionStorage.setItem("duration", JSON.stringify(this.project.duration));

    // console.log((this.productForm).value.collaborator);

    // for (var i = 0; i < 10; i++) {
    //   var keyValuePair = ((this.productForm).value.collaborator[i]);
    //   array[i] = Object.keys(keyValuePair)[0];
    //   console.log(array[i]);
    //   // this.card.email = ((this.productForm).value.collaborator[i].email);
    // }
    // console.log(this.card);


    (this.productForm).value.collaborator.forEach((item) => {
      console.log(item);
      if (item.email !== null) {
        array.push(item.email);
      }
    })


    this.card.email = array;
    this.card.name = this.card.name;
    sessionStorage.setItem("projectName", JSON.stringify(this.card.name));
    sessionStorage.setItem("projectEmail", JSON.stringify(this.card.email));
    this.card.accountId = this.accountId;
    console.log(this.card)

    // this.dialogRef.close('success');
    this._dashboardModalService.saveProjects(this.card).subscribe((res) => {
      if (res !== null) {
        console.log(res);
        this.dialogRef.close('success');
      }
    })

  }
  get collaborator() {
    return this.productForm.get('collaborator') as FormArray;
  }

  addCollaborator() {
    this.collaborator.push(this.fb.group({ email: '' }));
  }

  deleteCollaborator(index) {
    this.collaborator.removeAt(index);
  }

  name: string
  collaborators: Collaborator[]
}
export class Collaborator {
  collaborators: string
}