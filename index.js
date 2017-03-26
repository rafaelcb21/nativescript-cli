#! /usr/bin/env node
var fs = require('fs');
var template = require('./src/templates');
//var toAbsolutePath = require('to-absolute-path');

//var data = fs.readFileSync('package.json', 'utf-8');
//console.log(data);
//console.log(process.argv);
//var pathOrigem = toAbsolutePath('src');
//console.log(pathOrigem);
var option = process.argv[2];
var module = process.argv[3];

function directory(dir){
	fs.mkdirSync(dir);
}

function service(dir){
    serviceTemplate = "/**\n *\n *\n *\n * @author\n * \@since 0.0.0\n */\n\nimport { Injectable } from '\@angular/core';\n\n@Injectable()\nexport class #MODULEService {\n\n}"
    var dataService = serviceTemplate.replace(/#MODULE/g, dir[0].toUpperCase()+dir.substring(1));
	fs.writeFileSync(dir+".service.ts", dataService);
    if (fs.existsSync("index.ts")){
        var data = fs.readFileSync('index.ts');
        newData = "export * from './"+dir+".service;\n"+data;
        fs.writeFileSync('index.ts', newData);
    }
}

function serviceDirectory(dir){
    serviceTemplate = "/**\n *\n *\n *\n * @author\n * \@since 0.0.0\n */\n\nimport { Injectable } from '\@angular/core';\n\n@Injectable()\nexport class #MODULEService {\n\n}"
    var dataService = serviceTemplate.replace(/#MODULE/g, dir[0].toUpperCase()+dir.substring(1));
    fs.mkdirSync(dir);
	fs.writeFileSync(dir+"/"+dir+".service.ts", dataService);
    fs.writeFileSync(dir+"/index.ts", "export * from './"+dir+".service;");
    if (fs.existsSync("index.ts")){
        var data = fs.readFileSync('index.ts');
        newData = "export * from './"+dir+";\n"+data;
        fs.writeFileSync('index.ts', newData);
    }
}

function directive(dir){
    directiveTemplate = "/**\n *\n *\n *\n * @author\n * \@since 0.0.0\n */\n\nimport { Directive } from '@angular/core';\n\n@Directive({\n  selector: '[#MODULE]',\n  providers: [{}]\n})\nexport class #MODULEDirective {}"
    var _dataDirective = directiveTemplate.replace(/#MODULEDirective/g, dir[0].toUpperCase()+dir.substring(1)+"Directive");
    var dataDirective = _dataDirective.replace(/#MODULE/g, dir);
	fs.writeFileSync(dir+".directive.ts", dataDirective);
    if (fs.existsSync("index.ts")){
        var data = fs.readFileSync('index.ts');
        newData = "export * from './"+dir+".directive;\n"+data;
        fs.writeFileSync('index.ts', newData);        
    } 
}

function directiveDirectory(dir){
    directiveTemplate = "/**\n *\n *\n *\n * @author\n * \@since 0.0.0\n */\n\nimport { Directive } from '@angular/core';\n\n@Directive({\n  selector: '[#MODULE]',\n  providers: [{}]\n})\nexport class #MODULEDirective {}"
    var _dataDirective = directiveTemplate.replace(/#MODULEDirective/g, dir[0].toUpperCase()+dir.substring(1)+"Directive");
    var dataDirective = _dataDirective.replace(/#MODULE/g, dir);
    fs.mkdirSync(dir);
	fs.writeFileSync(dir+"/"+dir+".directive.ts", dataDirective);
    fs.writeFileSync(dir+"/index.ts", "export * from './"+dir+".directive;");
    if (fs.existsSync("index.ts")){
        var data = fs.readFileSync('index.ts');
        newData = "export * from './"+dir+";\n"+data;
        fs.writeFileSync('index.ts', newData);
    }
}

function pipe(dir){
    pipeTemplate = "/**\n *\n *\n *\n * @author\n * \@since 0.0.0\n */\n\nimport { Pipe, PipeTransform } from '@angular/core';\n\n@Pipe({\n	name: 'NAME-PIPE'\n})\nexport class #MODULEPipe implements PipeTransform {\n\n	transform(x) {\n        return x;\n	}\n}";
    var dataPipe = pipeTemplate.replace(/#MODULE/g, dir[0].toUpperCase()+dir.substring(1));
	fs.writeFileSync(dir+".pipe.ts", dataPipe);
    if (fs.existsSync("index.ts")){
        var data = fs.readFileSync('index.ts');
        newData = "export * from './"+dir+".pipe;\n"+data;
        fs.writeFileSync('index.ts', newData);        
    }  
}

function pipeDirectory(dir){
    pipeTemplate = "/**\n *\n *\n *\n * @author\n * \@since 0.0.0\n */\n\nimport { Pipe, PipeTransform } from '@angular/core';\n\n@Pipe({\n	name: 'NAME-PIPE'\n})\nexport class #MODULEPipe implements PipeTransform {\n\n	transform(x) {\n        return x;\n	}\n}";
    var dataPipe = pipeTemplate.replace(/#MODULE/g, dir[0].toUpperCase()+dir.substring(1));
    fs.mkdirSync(dir);
	fs.writeFileSync(dir+"/"+dir+".pipe.ts", dataPipe);
    fs.writeFileSync(dir+"/index.ts", "export * from './"+dir+".pipe;");
    if (fs.existsSync("index.ts")){
        var data = fs.readFileSync('index.ts');
        newData = "export * from './"+dir+";\n"+data;
        fs.writeFileSync('index.ts', newData);
    }
}

function createFilesModuleComponent(dir){
    var templateComponent = template.componentTemplate;
    var templateComponentModule = template.componentModuleTemplate;
    var templateComponentRouting = template.componentRoutingTemplate;
    var templateComponentSpec = template.componentSpecTemplate;
    
    var _dataComponent = templateComponent.component.replace(/#MODULEComponent/g, dir[0].toUpperCase()+dir.substring(1)+"Component");
    var dataComponent = _dataComponent.replace(/#MODULE/g, dir);
    
    var _dataComponentRouting = templateComponentRouting.componentRouting.replace(/#MODULEComponent/g, dir[0].toUpperCase()+dir.substring(1)+"Component");
    var dataComponentRouting = _dataComponentRouting.replace(/#MODULE/g, dir);
    
    var _dataComponentSpec = templateComponentSpec.componentSpec.replace(/#MODULEComponent\(\)/g, dir[0].toUpperCase()+dir.substring(1)+"Component()");
    var dataComponentSpec = _dataComponentSpec.replace(/#MODULE/g, dir);
    
    var dataComponentModule = templateComponentModule.componentModule.replace(/#MODULE/g, dir[0].toUpperCase()+dir.substring(1));    
    var dataComponentHtml = "<ActionBar title=\"My App\" class=\"action-bar\">\n</ActionBar>\n<StackLayout class=\"page\">\n\n</StackLayout>"
    var dataComponentIndex = "export * from './"+dir+".component';\nexport * from './"+dir+".routing';\nexport * from './"+dir+".module';"

    fs.writeFileSync(dir+"/"+dir+".component.css");
    fs.writeFileSync(dir+"/"+dir+".component.ts", dataComponent);
    fs.writeFileSync(dir+"/"+dir+".component.html", dataComponentHtml);    
    fs.writeFileSync(dir+"/"+dir+".module.ts", dataComponentModule);
    fs.writeFileSync(dir+"/index.ts", dataComponentIndex);
    fs.writeFileSync(dir+"/"+dir+".routing.html", dataComponentRouting);
    fs.writeFileSync("tests/"+dir+".spec.js", dataComponentSpec);
}

function createDirectoryComponent(dir){
    var templateComponent = template.componentTemplate;    
    var _dataComponent = templateComponent.component.replace(/#MODULEComponent/g, dir[0].toUpperCase()+dir.substring(1)+"Component");
    var dataComponent = _dataComponent.replace(/#MODULE/g, dir); 
   
    var dataComponentHtml = "<ActionBar title=\"My App\" class=\"action-bar\">\n</ActionBar>\n<StackLayout class=\"page\">\n\n</StackLayout>"
    var dataComponentIndex = "export * from './"+dir+".component';"

    fs.writeFileSync(dir+"/"+dir+".component.css");
    fs.writeFileSync(dir+"/"+dir+".component.ts", dataComponent);
    fs.writeFileSync(dir+"/"+dir+".component.html", dataComponentHtml);    
    fs.writeFileSync(dir+"/index.ts", dataComponentIndex);
    
    if (fs.existsSync("index.ts")){
        var data = fs.readFileSync('index.ts');
        newData = "export * from './"+dir+";\n"+data;
        fs.writeFileSync('index.ts', newData);        
    }  
}

function init(){
	var templateShared = template.sharedTemplate;
    
    fs.mkdirSync("shared");
    fs.mkdirSync("shared/components");
    fs.mkdirSync("shared/directives");
    fs.mkdirSync("shared/pipes");
    fs.mkdirSync("shared/services");
    fs.mkdirSync("shared/themes");
    fs.writeFileSync("index.ts", "export * from './shared';");
    
    indexShared = "export * from './pipes';\nexport * from './directives';\nexport * from './components';\nexport * from './shared.module';\nexport * from './themes';\nexport * from './services';"

    fs.writeFileSync("shared/index.ts", indexShared);
    fs.writeFileSync("shared/shared.modules.ts", templateShared.sharedModule);
    
    fs.writeFileSync("shared/components/index.ts", "");
    fs.writeFileSync("shared/directives/index.ts", "");
    fs.writeFileSync("shared/pipes/index.ts", "");
    fs.writeFileSync("shared/services/index.ts", "");
    fs.writeFileSync("shared/themes/themes.css", "");
}

if(option == "cm"){
    directory(module);
    createFilesModuleComponent(module);
}

if(option == "c"){
    directory(module);
    createDirectoryComponent(module);
}

if(option == "init"){
    init();
}

if(option == "s"){
    service(module);
}

if(option == "sf"){
    serviceDirectory(module);
}

if(option == "p"){
    pipe(module);
}

if(option == "pf"){
    pipeDirectory(module);
}

if(option == "d"){
    directive(module);
}

if(option == "df"){
    directiveDirectory(module);
}

