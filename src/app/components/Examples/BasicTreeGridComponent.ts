import { Component, ViewChild, ElementRef } from '@angular/core';
import { AngularTreeGridComponent } from 'angular-tree-grid';

@Component({
  selector: 'app-basic-tree-grid',
  template: `
    <h2>Basic Tree Grid</h2>
    <button (click)="collapseAll()">Collapse All</button><button (click)="expandAll()">Expand All</button>
    <p></p>
    <db-angular-tree-grid #angularGrid [data]="data" [configs]="configs"></db-angular-tree-grid>
  

  `,
})
export class BasicTreeGridComponent {
  @ViewChild('angularGrid') angularGrid: AngularTreeGridComponent;
  data: any = [
    {
      id: 1,
      name: 'Ali Raza',
      age: 60,
      weight: 60,
      gender: 1,
      phone: 7930343463,
      parent: 0,
    },
    {
      id: 2,
      name: 'Ali Hamza',
      age: 40,
      weight: 95,
      gender: 1,
      phone: 7930343463,
      parent: 1,
    },
    {
      id: 3,
      name: 'Adnan',
      age: 36,
      weight: 105,
      gender: 1,
      phone: 7930343463,
      parent: 1,
    },
    {
      id: 4,
      name: 'Farhan',
      age: 20,
      weight: 20,
      gender: 1,
      phone: 7930343463,
      parent: 2,
    },
    {
      id: 5,
      name: 'Faiz',
      age: 21,
      weight: 61,
      gender: 1,
      phone: 7930343463,
      parent: 3,
    },
    {
      id: 6,
      name: 'Hamza',
      age: 60,
      weight: 87,
      gender: 1,
      phone: 7930343463,
      parent: 34,
    },
    {
      id: 7,
      name: 'Ali',
      age: 40,
      weight: 60,
      gender: 1,
      phone: 7930343463,
      parent: 6,
    },
    {
      id: 8,
      name: 'Eman',
      age: 36,
      weight: 60,
      gender: 1,
      phone: 7930343463,
      parent: 6,
    },
    {
      id: 9,
      name: 'Zain',
      age: 20,
      weight: 40,
      gender: 1,
      phone: 7930343463,
      parent: 8,
    },
    {
      id: 10,
      name: 'Wahab',
      age: 21,
      weight: 55,
      gender: 1,
      phone: 7930343463,
      parent: 8,
    },
  ];

  configs: any = {
    id_field: 'id',
    parent_id_field: 'parent',
    parent_display_field: 'name',
    css: {
      // Optional
      expand_class: 'fa fa-caret-right',
      collapse_class: 'fa fa-caret-down',
    },
    columns: [
      {
        name: 'name',
        header: 'Name',
        width: '100px',
      },
      {
        name: 'age',
        header: 'Age',
        renderer: function (value) {
          return value + ' years';
        },
      },
      {
        name: 'weight',
        header: 'Weight',
      },
      {
        name: 'gender',
        header: 'Gender',
        renderer: function (value) {
          return value ? 'Male' : 'Female';
        },
      },
      {
        name: 'phone',
        header: 'Phone',
      },
    ],
  };

  @ViewChild('iframe') iframe: ElementRef;
  gistUrl: String =
    'https://gist.github.com/debabratapatra/45295b5a7c8167202ab927aeeb6325c7.js';

  ngAfterViewInit() {
    const doc =
      this.iframe.nativeElement.contentDocument ||
      this.iframe.nativeElement.contentElement.contentWindow;
    const content = `
          <html>
          <head>
            <base target="_parent">
          </head>
          <body>
          <script type="text/javascript" src="${this.gistUrl}"></script>
          </body>
        </html>
      `;
    doc.open();
    doc.write(content);
    doc.close();
  }

  collapseAll() {
    this.angularGrid.collapseAll();
  }

  expandAll() {
    this.angularGrid.expandAll();
  }
}
