import { Injectable } from "@angular/core";
import { TreeNode } from "projects/ngx-treeview/src/lib/model/treeview.model";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor() { }

  simpleTreeData(): TreeNode[] {
    return [
      {
        id: 1,
        name: 'India',
        children: [
          {
            id: 4,
            name: 'Chandigarh',
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
        name: 'Canada',
      }
    ]
  }

  nodeIconTreeData(): TreeNode[] {
    return [
      {
        id: 1,
        name: 'India',
        iconPath : './assets/demo.svg',
        children: [
          {
            id: 4,
            name: 'Chandigarh',
            iconPath : './assets/demo.svg',
          },
          {
            id: 5,
            name: 'Delhi',
            iconPath : './assets/demo.svg',
            children: [
              {
                id: 10,
                name: 'East Delhi',
                iconPath : './assets/demo.svg',
              },
              {
                id: 11,
                name: 'West Delhi',
                iconPath : './assets/demo.svg',
              },
              {
                id: 12,
                name: 'South Delhi',
                iconPath : './assets/demo.svg',
              },
              {
                id: 13,
                name: 'North Delhi',
                iconPath : './assets/demo.svg',
              }
            ]
          },
          {
            id: 6,
            name: 'Punjab',
            iconPath : './assets/demo.svg',
          }
        ]
      },
      {
        id: 2,
        name: 'USA',
        iconPath : './assets/demo1.svg',
        children: [
          {
            id: 7,
            name: 'California',
            iconPath : './assets/demo1.svg',
          },
          {
            id: 8,
            name: 'Arizona',
            iconPath : './assets/demo.svg',
          },
          {
            id: 9,
            name: 'Texas',
            iconPath : './assets/demo.svg',
          }
        ]
      },
      {
        id: 3,
        name: 'Canada',
        iconPath : './assets/demo2.svg',
      }
    ]
  }


  customTreeData(): TreeNode[] {
    return [
      {
        id: 1,
        name: 'India',
        children: [
          {
            id: 4,
            name: 'Chandigarh',
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
        name: 'Canada',
      }
    ]
  }
}