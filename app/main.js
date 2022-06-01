const { app, ipcMain } = require('electron')
const { createWindow, closeWindow } = require('./windows');

app.whenReady().then(() => {
    createWindow('page/index.html')
})

ipcMain.handle('create-window', async (event, url) => {
    await createWindow(url)
})

ipcMain.handle('close-window', async (event, args) => {
    await closeWindow()
})