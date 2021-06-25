class List {
    constructor() {
      this.all = [];
    }

    init(recipes) 
    {
        for (let recipe of recipes) 
        {
            this.all.push(new Recipe(recipe))
        }
        this.displayRecipes(this.all);

    }

    displayRecipes(recipes) 
    {
        let html = '';
        recipes.forEach((recipe) => 
        {
            html += recipe.renderCard()
        })
        document.getElementById('recipes').innerHTML += html;
    }
}