import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-materials',
    templateUrl: './materials.component.html',
    styleUrls: ['./materials.component.css'],
})

export class MaterialsComponent implements OnInit {
    server: any = {};
    constructor() { }

    ngOnInit() {
        this.getServeStatus();
    }

    getServeStatus() {
        this.server.id = 10;
        this.server.status = 'offlone';
        return this.server;
    }
}
