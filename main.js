const { app, BrowserWindow } = require('electron')

app.on('ready', () => {

  win = new BrowserWindow({

  })

  win.loadFile('./build/index.html')
})
