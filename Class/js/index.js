window.onload = () => {
    let lis = document.querySelectorAll("li");
    // lis.forEach((li) => li.addEventListener("click", toggleList));
    var ul = document.querySelector("#sampleList")
    ul.addEventListener("click", toggleList)

    var addBtn = document.querySelector("#addBtn")
    addBtn.addEventListener("click", addList)
}

function toggleList(event) {
    var clickedLi = document.getElementById(event.target.id)
    clickedLi.classList.toggle("remove")
}

function addList() {
    var sampleList = document.getElementById("sampleList");
    var listLen = sampleList.children.length;

    var newLi = document.createElement("li")
    newLi.setAttribute("id", `list${listLen + 1}`)
    newLi.appendChild(document.createTextNode("기존 리스트 " + (listLen + 1)))
    sampleList.appendChild(newLi)
}

/*
var divs = document.querySelectorAll("div")
divs.forEach(div => div.addEventListener(
    "click",            // Event Type 지정
    logEvent,           // Callback 함수 지정
    {capture: true}     // Capturing 방식 사용
))

function logEvent(event) {
    if(event.currentTarget.className == "two") {
        event.stopPropagation()
    }
    console.log(event.currentTarget.className)
}
*/

/*
var element = document.getElementById("div");
element.addEventListener("click", function(ev){
    alert("clicked!")
    console.log(1, this)
    console.log(2, ev)
})

element.addEventListener("click", function(){
    alert("hello world")
})

*/