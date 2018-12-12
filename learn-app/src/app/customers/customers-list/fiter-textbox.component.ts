import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'filter-textbox',
    template:`Filter:<input type="textbox" [(ngModel)]="filter"/>`,
})
export class FilterTextboxComponent implements OnInit{
    private _filter: string;

    get filter(){
        return this._filter;
    }
    @Input()
    set filter(val: string){
        if(val){
            this._filter = val;
            this.changed.emit(this.filter);
        }else{
            this.changed.emit();
        }
    }
    @Output() changed:EventEmitter<String> = new EventEmitter<String>();
    
    contructor(){

    }

    ngOnInit(){

    }
}