var toggle=true;
function popu(child){
    var pop=document.getElementsByClassName("pop");
    pop[child-1].style.display="block";
}
function popd(child){
    var pop=document.getElementsByClassName("pop");
    pop[child-1].style.display="none";
}

function menuopen()
{
    if(toggle==true)
    {
        document.getElementsByClassName("momenu")[0].classList.add("show");
        document.getElementsByClassName("mobliemenu")[0].style.cssText="background-image: url(./Assets/Icons/Close.svg);";
        toggle=false;
    }
    else{
        document.getElementsByClassName("momenu")[0].classList.remove("show");
        document.getElementsByClassName("mobliemenu")[0].style.cssText="background-image: url(./Assets/Icons/Menu.svg);";
        toggle=true; 
    }
    
}

function monav(r){
    closemompop()
    document.getElementsByClassName("mopop")[0].style.display="block";
    if(r==1)
    {
        document.getElementsByClassName("up11")[0].style.display="block";
        toggle=false;
        menuopen();
    }
    else if(r==2)
    {
        document.getElementsByClassName("up21")[0].style.display="block";
        toggle=false;
        menuopen();
    }
    else if(r==3)
    {
        document.getElementsByClassName("up31")[0].style.display="block";
        toggle=false;
        menuopen();
    }
    else if(r==4)
    {
        document.getElementsByClassName("up41")[0].style.display="block";
        toggle=false;
        menuopen();
    }
}
function closemompop(){
    document.getElementsByClassName("up11")[0].style.display="none";
    document.getElementsByClassName("up21")[0].style.display="none";
    document.getElementsByClassName("up31")[0].style.display="none";
    document.getElementsByClassName("up41")[0].style.display="none";
    document.getElementsByClassName("mopop")[0].style.display="none";
}