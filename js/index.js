let list = new List();

recipes.forEach(recipe => {
    list.add(recipe);
});

list.filtered = list.all;

list.displayRecipes();

filter = new FilterByIngredient();
list.createFilter(filter);

filter = new FilterByAppliance();
list.createFilter(filter);

filter = new FilterByUstensil();
list.createFilter(filter);


let search = new Search();
search.listenForSearch();

