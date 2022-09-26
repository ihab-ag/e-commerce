// The code contained in renderer.js can then use the same JavaScript APIs and tooling you use for typical front-end development,

const {ipcRenderer} = require('electron');
const closeApp = document.getElementById('admin-logout');
closeApp.addEventListener('click', () => {
    ipcRenderer.send('close-me')
});