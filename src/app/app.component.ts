import {Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {CommonModule, NgLocalization, NgLocaleLocalization} from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[{ provide: NgLocalization, useClass: NgLocaleLocalization }]
})

export class AppComponent {
    public btndisable:boolean;
    public conditionalstmt:boolean;
    ngOnInit(){
        this.conditionalstmt=true;
         this.btndisable=true;
    }
    Submit()
    {
        console.log(this.btndisable)
    }
}

