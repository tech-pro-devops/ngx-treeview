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
  nodeIconTreeData : TreeNode[];
  customTreeData: TreeNode[];

  expandCollapseOptions: NgxTreeViewOptions = {
    expandMaterialIcon: 'add',
    collapseMaterialIcon: 'remove',
  }
  showExpandCollapseIconOptions: NgxTreeViewOptions = {
    showExpandCollapseIcon : false
  }

  iconPositionOptions: NgxTreeViewOptions = {
    iconPosition:'suffix'
  }

  nodeIconOptions : NgxTreeViewOptions = {
    nodeIconPosition : 'suffix'
  }

  checkboxOptions: NgxTreeViewOptions = {
    showCheckbox : true
  }

  countOptions: NgxTreeViewOptions = {
    showChildCount : true
  }

  constructor(private service: AppService){}

  ngOnInit(){
    this.simpleTreeData = this.service.simpleTreeData();
    this.nodeIconTreeData = this.service.nodeIconTreeData();
    this.customTreeData = this.service.customTreeData();
  }

}
