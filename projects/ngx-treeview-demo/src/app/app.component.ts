import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'projects/ngx-treeview/src/lib/model/tree-node.model';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'ngx-treeview-demo';
  simpleTreeData : TreeNode[];

  constructor(private service: AppService){}

  ngOnInit(){
    this.simpleTreeData = this.service.simpleTreeData();
  }
}
