const {app, BrowserWindow, Menu, dialog} = require("electron");
const Store = require("./lib/store.js");

const store = new Store({
    configName: "Todos",
    defaults: {
        width: 640,
        height: 480
    }
});
let mainWindow, todoWindow;

app.on("ready", () => {
    //const icon = new Tray("./imgs/icon.png");
    mainWindow = new BrowserWindow({
        width: store.get("width"),
        height: store.get("height"),
        icon: "./imgs/icon.png",
        webPreferences: {
            nodeIntegration: true
        }
    });
    
    mainWindow.loadFile("index.html");
    
    mainWindow.on("close", () => {
        let {width, height} = mainWindow.getBounds();
        store.set("width", width);
        store.set("height", height);
        mainWindow = null;
    });

    //İPCMAİN
   
    
});

const menuTemplate = [
    {
        label: "About",
        click(){
            dialog.showMessageBox(mainWindow,{
                type: "none",
                title: "About",
                message : "This program is created by Berkay CEYLAN \n berkayceylan.com",
                //detail : "about",
                icon: "./imgs/icon.png"
            });
        },
        
        
        
    },
    {
        label: "Dev Tools",
        click(){
            mainWindow.webContents.toggleDevTools();
        }
    }
]
const menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);
app.on("window-all-closed", () => {
    if(process.platform !== "darwin")
        app.quit();
});
app.on("activate", ()=>{
    //if(mainWindow == null) 
});