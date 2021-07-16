class List 
{
    constructor() {
      this.all = [];
      this.filtered = [];
      this.filters = [];
    }

    add(recipe) 
    {
        list.all.push(recipe);
    }

    displayRecipes() 
    {
        let html = '';

        if (this.filtered.length === 0) {
            html += 'Aucune recette ne correspond à votre recherche'
        } else {
            for (let i = 0; i < this.filtered.length; i++) {
                let recipe = new Recipe(this.filtered[i]);
                html += recipe.renderCard()
            }
        }

        document.getElementById('recipes').innerHTML = html;
    }

    build() 
    {
        list.displayRecipes();
        this.filters.forEach(filter => {
            filter.filtered = filter.collect(this.filtered);
            filter.displayList(filter.filtered);
            filter.listenForFilter();
            filter.build();
            filter.listenForUnselect();
        })
    }

    createFilter(filter)
    {
        this.filters.push(filter)
        filter.build();
    }

    filter()
    {
        let list = this.all;

        this.filters.forEach(filter => {
            list = filter.filter(list);
        })

        this.filtered = list;
    }

}

