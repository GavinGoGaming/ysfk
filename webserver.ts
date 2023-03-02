class StaticUser {
    public directory: string;
    constructor(directory: string) {
        this.directory = directory;
    }
}
class Page {
    public endpoint: string;
    public callback: Function;
    constructor(endpoint: string, callback: Function) {
        this.endpoint=endpoint;
        this.callback=callback;
    }
}
import express from 'express';
import fs from 'fs';
var Exapp: express.Application;
var statics: Array<StaticUser> = [];
var pages: Array<Page> = [];

function createStaticPage(endpoint: string, filename: string, contentType: string, liveUpdate: boolean = true) {
    if(!liveUpdate) {
        var pageContent = fs.readFileSync(filename, {encoding: 'utf-8'});
    }
    pages.push(new Page(endpoint, (req: express.Request, res: express.Response)=>{
        res.type(contentType);
        res.end(liveUpdate == true ? fs.readFileSync(filename, {encoding: 'utf-8'}) : pageContent);
    }));
}
function addPage(page: Page) {
    pages.push(page);
}
function addStatic(staticDir: StaticUser) {
    statics.push(staticDir);
}
function listen(port: number) {
    for(var staticDir of statics) {
        Exapp.use(express.static(staticDir.directory));
    }
    for(var page of pages) {
        Exapp.get(page.endpoint, (req, res)=>{
            page.callback(req, res);
        });
    }
    Exapp.listen(port, ()=>{
        console.log("Yifsk has made a webserver on " + port +"!");
    })
}

export default ()=>{Exapp=express();return{
    statics,
    pages,
    addPage,
    addStatic,
    createStaticPage,
    listen,
    Exapp
}};