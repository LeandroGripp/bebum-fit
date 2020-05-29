const {app, BrowserWindow} = require('electron')
export const drinks = [{
  nome: "corote",
  qtde: 500,
  qtdeAlcool: 67.5,
  calorias: 1610
}]      
function createWindow () {   
  // Create the browser window.     
const win = new BrowserWindow({width: 800, height: 600}) 
       
win.loadURL('http://localhost:3000/')      
}
app.on('ready', createWindow)
