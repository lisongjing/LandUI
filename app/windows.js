const { BrowserWindow, Menu } = require('electron')
const path = require('path')

const pathWindowIdMap = {}

const createWindow = pagePath => {
    const win = new BrowserWindow({
        width: 1200,
        height: 750,
        minWidth: 760,
        minHeight: 600,
        center: true,
        backgroundColor: '#FFFFFF',
        // titleBarStyle: 'hidden',
        // titleBarOverlay: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
        parent: currentWindow(),
        show: false
    })

    win.loadFile(pagePath.split('?')[0])

    Menu.setApplicationMenu(null)

    win.once('ready-to-show', () => win.show())

    // 打开开发工具
    // win.webContents.openDevTools()

    // pathWindowIdMap[pagePath] = win.id;
}

const closeWindow = () => {
    const win = currentWindow()
    // const pagePath = Object.entries(win).find((k, v) => v === win.id)[0];
    // delete pathWindowIdMap[pagePath]
    win.close()
}

const currentWindow = () => {
    return BrowserWindow.getFocusedWindow()
}

module.exports = { createWindow, closeWindow, currentWindow }