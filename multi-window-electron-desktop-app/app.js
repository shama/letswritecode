const {app, BrowserWindow, ipcMain} = require('electron')

app.on('ready', function () {
  var mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })
  mainWindow.loadURL('file://' + __dirname + '/main.html')
  mainWindow.openDevTools()

  var prefsWindow = new BrowserWindow({
    width: 400,
    height: 400,
    show: false
  })
  prefsWindow.loadURL('file://' + __dirname + '/prefs.html')

  ipcMain.on('toggle-prefs', function () {
    if (prefsWindow.isVisible())
      prefsWindow.hide()
    else
      prefsWindow.show()
  })

})