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
import { SharedModule } from '../shared';

@NgModule({
	imports: [ 
		SharedModule
	],
	declarations: [
		#MODULEComponent
	]
})
export class #MODULEModule {}`;