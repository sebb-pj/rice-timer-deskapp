const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 450,
    height: 450,
    minWidth: 450,
    maxWidth: 500,
    minHeight: 450,
    maxHeight: 450,
    frame: false, 
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
});


ipcMain.on('minimize', () => {
  BrowserWindow.getFocusedWindow().minimize();
});

ipcMain.on('maximize', () => {
  const win = BrowserWindow.getFocusedWindow();
  if (win.isMaximized()) {
    win.unmaximize();
  } else {
    win.maximize();
  }
});

ipcMain.on('close', () => {
  BrowserWindow.getFocusedWindow().close();
});
