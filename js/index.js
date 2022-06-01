document.addEventListener('DOMContentLoaded', function () {
    let dropdowns = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdowns, {
        coverTrigger: false,
        hover: true
    });


    let btn = document.querySelector(".edit-btn");

    btn.onclick = () => window.windowAPI.createWindow('page/edit.html');
    
    // btn.onclick = () => {
    //     newWin = new BrowserWindow({
    //         width: 500,
    //         height: 500,
    //     })
    //     newWin.loadFile('edit.html')
    //     newWin.on('close', () => { win = null })
    
    // } 
});