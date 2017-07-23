import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css'],
})

export class ServerComponent implements OnInit {
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
