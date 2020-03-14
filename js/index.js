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
// console.log(test);
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

//dragable (7)
var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {

}, false);
// (8)
document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);
//(9)
document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);
(10)
/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);
//(11)
document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }

}, false);
//(12)
document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);
(13)
document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);







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
