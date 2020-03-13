//mouseover

// let test = document.getElementsByTagName('nav');
let mEnter = document.querySelector("nav");
console.log(mEnter);
// mouseenter not working
mEnter.addEventListener('mouseenter', function( event ){
    event.target.style.border = "5px dotted purple";

    setTimeout(function()
    {
        event.target.style.border = "";
    }, 500);
},false);

let test = document.getElementById("navId");
console.log(test);
test.addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
    event.target.style.color = "blue";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
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
