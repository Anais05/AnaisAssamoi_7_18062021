class List 
{
    constructor() {
      this.all = [];
      this.filtered = [];
      this.filters = [];
      this.search = null;
    }

    add(recipeRaw) 
    {
        let recipe = new Recipe(recipeRaw);
        list.all.push(recipe);
    }

    displayRecipes() 
    {
        let html = '';

        if (this.filtered.length === 0) {
            html += `<p class="empty-search">Aucune recette ne correspond à votre critère… vous pouvez
            chercher « tarte aux pommes », « poisson », etc.</p>`;
        } else {
            this.filtered.forEach(recipe => {
                html += recipe.renderCard();
            })
        }

        document.getElementById('recipes').innerHTML = html;
    }

    build() 
    {
        list.displayRecipes();
        this.filters.forEach(filter => {
            filter.filtered = filter.collect(this.filtered);
            filter.displayList(filter.filtered);
            filter.build();
        })
        this.search.listen();

    }

    createFilter(filter)
    {
        this.filters.push(filter)
        filter.build();
    }

    filter()
    {
        let list = this.all;

        // by tags
        this.filters.forEach(filter => {
            list = filter.filter(list);
        })

        this.filtered = list;

        this.search.search(this.filtered)
        this.build();
    }

}

