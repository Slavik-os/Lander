console.log("working")

const mobileButton = document.getElementById("mobile-burger") ;
const mobileItems = document.getElementById("Mobile-iTems");

var rot = 360;

mobileButton.addEventListener('click',()=>{
    mobileButton.style = 'transform: rotate(' + rot + 'deg)';
    rot +=360;
    (mobileItems.style.display=='flex')?mobileItems.style.display='none':mobileItems.style.display='flex';
});
mobileButton.addEventListener('click',()=>{
    //(mobileItems.style.display=='flex')?mobileItems.style.display='none':mobileItems.style.display='flex';
   
});