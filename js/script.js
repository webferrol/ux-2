document.querySelectorAll(".galeria")[0].addEventListener("mouseover",e=>{
    //nodeType = 1  ==> es un elemento
    if(e.target.nodeType===1 && e.target.nodeName==="IMG"){
        e.target.parentElement.firstElementChild.src=e.target.src;
    }
        //  .src=e.target.src;
});



