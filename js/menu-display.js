function display(li) {
    var subMenu = li.getElementsByTagName('ul')[0];
    console.log(subMenu);
    if (subMenu != undefined) {

        subMenu.style.display = "block";
    }

}

function hide(li) {
    var subMenu = li.getElementsByTagName('ul')[0];
    if (subMenu != undefined) {
        subMenu.style.display = "none";
        
    }
}