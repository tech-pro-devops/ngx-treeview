import { Component, OnInit } from '@angular/core';
import { NgxTreeViewOptions, TreeNode } from 'projects/ngx-treeview/src/lib/model/treeview.model';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'ngx-treeview-demo';
  simpleTreeData : TreeNode[];

  options: NgxTreeViewOptions = {
    expandMaterialIcon: 'add',
    collapseMaterialIcon: 'remove',
  }

  constructor(private service: AppService){}

  ngOnInit(){
    this.simpleTreeData = this.service.simpleTreeData();
  }
}
