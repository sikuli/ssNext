const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
  const options = {
    width: width * 1,
    height: height * 1,
    minHeight: height * 0.75,
    minWidth: width * 0.75,
    resizable: true
  };
  mainWindow = new BrowserWindow(options);
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.setTitle('ssNext');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
