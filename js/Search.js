class Search 
{
    constructor()
    {
        this.searchValue = '';
        this.recipeTerms = [];
        this.findTerms();
    }

    listenForSearch()
    {
        document.getElementById('main-search').addEventListener('input', (e) => {
            let newSearchValue = e.target.value.toLowerCase();

            if (newSearchValue.length > 2) 
            {
                if(newSearchValue.length >= this.searchValue.length) 
                {
                    list.filtered = list.all;
                }
                this.searchValue = newSearchValue;
                this.search();

            } else 
            {
                list.filtered = list.all;
                list.displayRecipes();
            }

            list.build();
            
        })
    }

    search()
    {
        let recipeIds = this.recipeTerms.filter(recipe => {
            return !![...recipe.terms].find(term => !!term.includes(this.searchValue));
        }).map(item => item.id);
            // test with list.filtered => doesn't work
        list.filtered = list.all.filter(recipe => {
            return !!(recipeIds.includes(recipe.id));
        })

        console.log(list.filtered);

        list.displayRecipes();
    }

    findTerms()
    {
        list.filtered.forEach(recipe => {
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