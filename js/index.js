//MVP challenges

//mouseenter (1)


const mEnter = document.querySelector("nav");
// console.log(mEnter);

mEnter.addEventListener('mouseenter', function( event ){
    event.target.style.border = "5px dotted purple";


    setTimeout(function()
    {
        event.target.style.border = "5px dotted red";
    }, 100);

},false);

//mouseExit (2)

const mExit = document.querySelector("nav");

mExit.addEventListener('mouseleave', e => {
    mExit.style.border = "";
},false);

//mouseover (3)
const test = document.getElementById("navId");
console.log(test);
test.addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
    event.target.style.color = "blue";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

  //click(4)
const mClick = document.getElementById("navId");

const onclick = event => event.target.style.transform = "scale(1.2)"

mClick.addEventListener("click", (event) => {
    event.target.style.transform = "scale(1.2)";
    
    setTimeout (function(){
        event.target.style.transform = "scale(1)";
    },500);
},false);
  
//doubleclick(5)

const mDblClick = document.getElementById("navId");

mDblClick.addEventListener("dblclick", (event) => {
    window.alert("Nav Does Not Work");

},false);

//load(6)
window.addEventListener('load', (event) => {
    window.alert('page has loaded');
});

//dragable

dragElement (document.getElementById("modalOne"));

function dragElement(elemnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 4;
    if (elemnt.onmousedown)
}


  //form popup
  var modalBtns = [...document.querySelectorAll(".child-btn")];
modalBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.getAttribute('data-modal');
        document.getElementById(modal).style.display = "flex";
    }
});

var closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.closest('.modal');
        modal.style.display = "none";
    }
});
window.onclick = function(event){
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
}
