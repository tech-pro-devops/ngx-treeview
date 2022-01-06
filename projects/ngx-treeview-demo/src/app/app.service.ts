import { Injectable } from "@angular/core";
import { TreeNode } from "projects/ngx-treeview/src/lib/model/tree-node.model";

@Injectable({
    providedIn: 'root'
})
export class AppService{
    constructor(){}

    simpleTreeData() : TreeNode[] {
        return [
            {
              id: 1,
              name: 'India',
              children: [
                {
                  id: 4,
                  name: 'Chandigarh'
                },
                {
                  id: 5,
                  name: 'Delhi',
                  children: [
                    {
                      id: 10,
                      name: 'East Delhi',
                    },
                    {
                      id: 11,
                      name: 'West Delhi',
                    },
                    {
                      id: 12,
                      name: 'South Delhi',
                    },
                    {
                      id: 13,
                      name: 'North Delhi',
                    }
                  ]
                },
                {
                  id: 6,
                  name: 'Punjab'
                }
              ]
            },
            {
              id: 2,
              name: 'USA',
              children: [
                {
                  id: 7,
                  name: 'California'
                },
                {
                  id: 8,
                  name: 'Arizona'
                },
                {
                  id: 9,
                  name: 'Texas'
                }
              ]
            },
            {
              id: 3,
              name: 'Canada'
            }
          ]
    }
}