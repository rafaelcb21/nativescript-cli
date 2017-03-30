module.exports.componentModule = 
`/**
 * 
 * 
 *
 * @author
 * @since 0.0.0
 */

import { NgModule } from "@angular/core";
import { #MODULEComponent } from "./";
import { #MODULERoutingModule } from "./#MODULE.routing.module";

@NgModule({
	imports: [ 
		#MODULERoutingModule
	],
	declarations: [
		#MODULEComponent
	]
})
export class #MODULEModule {}`;