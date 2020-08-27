import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.scss']
})
export class InfocardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal(templateRef) {
    this.dialog.open(templateRef, {
      width: '100%',
  });
  }

}
