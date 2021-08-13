class Search 
{
    constructor(recipes)
    {
        this.searchValue = '';
        this.recipeTerms = [];
        this.findTerms(recipes);
    }

    listen()
    {
        document.getElementById('main-search').addEventListener('input', (e) => {
            this.searchValue = e.target.value.toLowerCase();
            list.filter();
        })
    }

    search(recipes)
    {
        if (this.searchValue.length < 3) 
        {
           return recipes;
        }

        let recipeIds = this.recipeTerms.filter(recipe => {
            return !![...recipe.terms].find(term => !!term.includes(this.searchValue));
        }).map(item => item.id);

        list.filtered = recipes.filter(recipe => {
            return !!(recipeIds.includes(recipe.id));
        })

    }

    findTerms(recipes)
    {
        recipes.forEach(recipe => {
            let toKeep = new Set();

            let name = recipe.name.split(' ');
            name.forEach(term => {
                if (!irrelevantTerms.includes(term)) {
                    toKeep.add(term.toLowerCase());
                }
            });

            let description = recipe.description.split(' ');
            description.forEach(term => {
                if (!irrelevantTerms.includes(term)) {
                    toKeep.add(term.toLowerCase());
                }
            });

            for (let i = 0; i < recipe.ingredients; i++) {
                let term = recipe.ingredients[i].ingredient.split(' ');
                if (!irrelevantTerms.includes(term)) {
                    toKeep.add(term.toLowerCase());
                }
            }

           this.recipeTerms.push({
               id: recipe.id,
               terms: toKeep,
           });
       })
    }
}