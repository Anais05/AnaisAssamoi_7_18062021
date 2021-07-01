let ingrBtn = document.getElementById("ingr-close");
let applBtn = document.getElementById("appl-close");
let ustBtn = document.getElementById("ust-close");
let ingrBtnClose = document.getElementById("ingr-open");
let applBtnClose = document.getElementById("appl-open");
let ustBtnClose = document.getElementById("ust-open");


ingrBtn.addEventListener("click", openIngrMenu);
applBtn.addEventListener("click", openApplMenu);
ustBtn.addEventListener("click", openUstMenu);
ingrBtnClose.addEventListener("click", closeAllMenu);
applBtnClose.addEventListener("click", closeAllMenu);
ustBtnClose.addEventListener("click", closeAllMenu);

function openIngrMenu() 
{
    document.getElementById("dropdown-ingredients-open").style.display = "block";
    document.getElementById("dropdown-appliance").style.display = "block";
    document.getElementById("dropdown-ustensils").style.display = "block";

    document.getElementById("dropdown-appliance-open").style.display = "none";
    document.getElementById("dropdown-ustensils-open").style.display = "none";
    document.getElementById("dropdown-ingredients").style.display = "none";

}

function openApplMenu() 
{
    document.getElementById("dropdown-appliance-open").style.display = "block";
    document.getElementById("dropdown-ustensils").style.display = "block";
    document.getElementById("dropdown-ingredients").style.display = "block";

    document.getElementById("dropdown-appliance").style.display = "none";
    document.getElementById("dropdown-ustensils-open").style.display = "none";
    document.getElementById("dropdown-ingredients-open").style.display = "none";
}

function openUstMenu() 
{
    document.getElementById("dropdown-ustensils-open").style.display = "block";
    document.getElementById("dropdown-ingredients").style.display = "block";
    document.getElementById("dropdown-appliance").style.display = "block";
    
    document.getElementById("dropdown-ustensils").style.display = "none";
    document.getElementById("dropdown-ingredients-open").style.display = "none";
    document.getElementById("dropdown-appliance-open").style.display = "none";
}

function closeAllMenu() 
{
    document.getElementById("dropdown-ingredients-open").style.display = "none";
    document.getElementById("dropdown-appliance-open").style.display = "none";
    document.getElementById("dropdown-ustensils-open").style.display = "none";
    document.getElementById("dropdown-ingredients").style.display = "block";
    document.getElementById("dropdown-appliance").style.display = "block";
    document.getElementById("dropdown-ustensils").style.display = "block";
}
