const { app, BrowserWindow } = require("electron");

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({ width: 800, height: 600 })
  let drinks;
  const fs = require("fs");

  await fs.readFile("./data/drinks.json", (error, data) => 
  {
    drinks = JSON.parse(data);
    win.webContents.send("drinks", drinks);
  })
  win.drinks = drinks;
  
  
  win.loadURL("http://localhost:3000/");
}
app.on("ready", createWindow);
