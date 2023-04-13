function addText( ) {
    let x = document.getElementsByTagName("li");
    document.getElementById("demo").innerHTML = x[1].innerHTML;
}

function menuTemp() {
    let iceMenus = document.getElementsByClassName("ice-menu");
    let hotMenus = document.getElementsByClassName("hot-menu");

    console.log(typeof iceMenus);

    // element
    for(let i of iceMenus) {    
        i.style.color = "blue";
    }

    // index 
    for(let i in [...hotMenus]) {
        hotMenus[i].style.color = "red";
    }
}

function removeMenu() {
    let demo = document.querySelector("#demo");
    demo.innerHTML = "";
}

function popupSelected() {
    let demo = document.getElementsByClassName("select-textbox")[0];
    let selectedNum = demo.value;
    let lis = document.querySelectorAll("#menu-ul li");

    console.log(selectedNum);
    selectedNum += selectedNum;
    if(selectedNum < 1 || selectedNum > lis.length) {
        alert("error");
    } else {
        alert(getMenuName())
    }
}

function getMenuName() {
    let menuUL = document.getElementById("menu-ul");
    let str = null;
    if(pos == 1) {
        str = menuUL.firstElementChild.innerHTML;
    } else if(pos == 2) {
        str = menuUL.firstElementChild.nextElementSibling.innerHTML;
    } else if(pos == 3) {
        str = menuUL.lastElementChild.innerHTML;
    }
}

function fontSizeUp() {
    let lis = document.querySelectorAll("#menu-ul li");
    lis.forEach((x) => (x.style.fontSize = "30px"));
}
    
let lis = document.getElementsByTagName("li");
console.log(lis);
setTimeout(function(){ console.log(lis) }, 15000)