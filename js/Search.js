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

        console.time('1')

        let filtered = [];

        this.recipeTerms.forEach(item => {
            let isValid = !![...item.terms].find(term => !!term.includes(this.searchValue));
            if (isValid) {
               let tokeep = recipes.find(recipe => recipe.id == item.id)
               if (tokeep == undefined) {
                   return;
                }
               filtered.push(tokeep);
            }
            
        })
        console.timeEnd('1')
        return list.filtered = filtered;
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