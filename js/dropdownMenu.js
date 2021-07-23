let ingrBtn = document.getElementById("dropdown-ingredient");
let applBtn = document.getElementById("dropdown-appliance");
let ustBtn = document.getElementById("dropdown-ustensil");
let ingrBtnClose = document.getElementById("ingredient-close");
let applBtnClose = document.getElementById("appliance-close");
let ustBtnClose = document.getElementById("ustensil-close");
let main = document.getElementById("recipes");
let searchBar = document.getElementById("main-search");

ingrBtn.addEventListener("click", openIngrMenu);
applBtn.addEventListener("click", openApplMenu);
ustBtn.addEventListener("click", openUstMenu);
ingrBtnClose.addEventListener("click", closeAllMenu);
applBtnClose.addEventListener("click", closeAllMenu);
ustBtnClose.addEventListener("click", closeAllMenu);
main.addEventListener("click", closeAllMenu);
searchBar.addEventListener("click", closeAllMenu);

function openIngrMenu() 
{
    document.getElementById("dropdown-ingredient-open").style.display = "block";
    document.getElementById("dropdown-appliance").style.display = "block";
    document.getElementById("dropdown-ustensil").style.display = "block";

    document.getElementById("dropdown-appliance-open").style.display = "none";
    document.getElementById("dropdown-ustensil-open").style.display = "none";
    document.getElementById("dropdown-ingredient").style.display = "none";
}

function openApplMenu() 
{
    document.getElementById("dropdown-appliance-open").style.display = "block";
    document.getElementById("dropdown-ustensil").style.display = "block";
    document.getElementById("dropdown-ingredient").style.display = "block";

    document.getElementById("dropdown-appliance").style.display = "none";
    document.getElementById("dropdown-ustensil-open").style.display = "none";
    document.getElementById("dropdown-ingredient-open").style.display = "none";
}

function openUstMenu() 
{
    document.getElementById("dropdown-ustensil-open").style.display = "block";
    document.getElementById("dropdown-ingredient").style.display = "block";
    document.getElementById("dropdown-appliance").style.display = "block";
    
    document.getElementById("dropdown-ustensil").style.display = "none";
    document.getElementById("dropdown-ingredient-open").style.display = "none";
    document.getElementById("dropdown-appliance-open").style.display = "none";
}

function closeAllMenu() 
{
    document.getElementById("dropdown-ingredient-open").style.display = "none";
    document.getElementById("dropdown-appliance-open").style.display = "none";
    document.getElementById("dropdown-ustensil-open").style.display = "none";
    document.getElementById("dropdown-ingredient").style.display = "block";
    document.getElementById("dropdown-appliance").style.display = "block";
    document.getElementById("dropdown-ustensil").style.display = "block";
}
