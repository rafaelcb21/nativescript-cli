var componentFile = require("./component-module/component");
var componentModuleFile = require("./component-module/component-module");
var componentRoutingFile = require("./component-module/component-routing");
var componentSpecFile = require("./component-module/component-spec");
var sharedModuleFile = require("./shared-module/shared-module");

module.exports = {    
    componentTemplate: componentFile,
    componentModuleTemplate: componentModuleFile,
    componentRoutingTemplate: componentRoutingFile,
    componentSpecTemplate : componentSpecFile,
    sharedTemplate : sharedModuleFile,
};