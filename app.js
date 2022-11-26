
function toggleVisiblity(id) {
    let target = document.getElementById(id)
    console.log(target.style.display)
    if(target.style.display == 'block'){
        target.style.display = 'none';
    }
    else{
        target.style.display = 'block';
    }
}
gsap.to(".dabba",{y:15,duration:0.8,yoyo:true,repeat:-1})
