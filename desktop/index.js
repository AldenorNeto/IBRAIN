const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'icon.png'), // Substitua 'icon.png' pelo caminho do seu ícone
  });

  // Carregue um arquivo HTML local ou uma URL
  mainWindow.loadFile('index.html');

  // mainWindow.loadURL('http://localhost:3000'); // ou você pode carregar uma URL como no seu exemplo

  // Emitido quando a janela é fechada.
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

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
