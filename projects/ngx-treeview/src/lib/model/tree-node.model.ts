export class TreeNode {
    id?: number; 
    name?: string;
    iconPath?: string;
    children?: TreeNode[];
    metadata?: Object;
}

export class FlatTreeNode {
    public node?: TreeNode | Object;
    public level?: number = 0;
    public expandable? = false;
    public isLoading? = false;
}

[

    {   
        id: 1, 
        name:"SAhil", 
        children: [

        ]   
    }
]

export class NestedTreeNode {
    
}