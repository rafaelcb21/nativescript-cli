module.exports.component = 
`/**
 * 
 * 
 *
 * @author
 * @since 0.0.0
 */
 
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-#MODULE",
    moduleId: module.id,
    templateUrl: "./#MODULE.component.html",
    styleUrls: ["./#MODULE.component.css",],
})
export class #MODULEComponent implements OnInit {

    constructor() {

    }

    ngOnInit(): void {
        
    }
}`;