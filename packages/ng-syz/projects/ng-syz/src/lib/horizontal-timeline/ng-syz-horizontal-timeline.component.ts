import { Component, Input, OnInit } from '@angular/core';
import { elementAt } from 'rxjs/operators';

@Component({
  selector: 'ng-syz-horizontal-timeline',
  templateUrl: 'ng-syz-horizontal-timeline.component.html',
  styleUrls: ['./ng-syz-horizontal-timeline.component.scss']
})
export class NgSyzHorizontalTimelineComponent implements OnInit {

@Input() timelineData:Array<any>;

  public orderStatus;
  public widthPercentage;
  
  constructor() { }

  ngOnInit(): void {
    
    var idx
    this.timelineData.forEach(element => {
       if(element.Current == true){
         this.orderStatus = element.Name;
          idx =  this.timelineData.indexOf(element)
       }

    });
     
    this.widthPercentage = (100/this.timelineData.length) * (idx + 1) + "%"
  }
}
