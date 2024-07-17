import { Component, OnInit, afterNextRender } from '@angular/core';
import { LabelService } from '../../../service/label/label.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { AddLabelComponent } from '../../../../components/add-label/add-label.component';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss',
})
export class LabelComponent implements OnInit {
  constructor(
    private service: LabelService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {}

  data: any = [];

  ngOnInit(): void {
    this.refreshTable();
  }

  refreshTable() {
    this.service.getAllLabels().subscribe({
      next: (value) => {
        this.data = value;
      },
    });
  }
  createLabel() {
    let dialog = this.dialog.open(AddLabelComponent, {
      width: '300px',
      enterAnimationDuration: '250ms',
      exitAnimationDuration: '250ms',
    });

    dialog.afterClosed().subscribe({
      next: (val) => {
        this.service.createLabel(val).subscribe({
          next: (resp) => {
            this.refreshTable();
            this.toastr.show('Label Created');
          },
        });
      },
    });
  }

  deleteLabel(id: number) {
    this.service.deleteLabel(id).subscribe({
      next: () => {
        this.refreshTable();
        this.toastr.warning('Label Deleted');
      },
    });
  }
}
