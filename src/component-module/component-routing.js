module.exports.componentRouting = 
`/**
 * 
 * 
 *
 * @author
 * @since 0.0.0
 */

import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { #MODULEComponent } from "./";

export const #MODULERoutes: Routes = [
	{ path: "#MODULE", component: #MODULEComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(#MODULERoutes)],
    exports: [NativeScriptRouterModule]
})
export class #MODULERoutingModule { }`