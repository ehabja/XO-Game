import { Component, OnInit, Input } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MatrixComponent } from '../matrix/matrix.component';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

    @Input()
    public imageSource: string;

    constructor() { }

    ngOnInit() {
        
    }

}
