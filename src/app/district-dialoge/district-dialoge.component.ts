import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  data: any,
  district: string
}

@Component({
  selector: 'app-district-dialoge',
  templateUrl: './district-dialoge.component.html',
  styleUrls: ['./district-dialoge.component.scss']
})
export class DistrictDialogeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }


}
