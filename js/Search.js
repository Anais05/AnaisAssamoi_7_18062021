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
            this.searchValue = e.target.value.toLowerCase();
            this.search(this.searchValue);
        })
    }

    search(needle)
    {
        list.filtered = this.recipeTerms.filter(recipe => {
            console.log(recipe.terms);
            if (recipe.terms.includes(needle)) {
                return true;
            }
            return false;
        })
        list.displayRecipes()
    }

    findTerms()
    {
        list.filtered.forEach(recipe => {
            let toKeep = new Set();

            let name = recipe.name.split(' ');
            console.log(name,'name');
            name.forEach(term => {
                if (!irrelevantTerms.includes(term)) {
                    toKeep.add(term);
                }
            });

            let description = recipe.description.split(' ');
            console.log(description,'description');
            description.forEach(term => {
                if (!irrelevantTerms.includes(term)) {
                    toKeep.add(term);
                }
            });

            for (let i = 0; i < recipe.ingredients; i++) {
                let term = recipe.ingredients[i].ingredient.split(' ');
                console.log(term,'ingredient');
                if (!irrelevantTerms.includes(term)) {
                    toKeep.add(term);
                }
            }

           this.recipeTerms.push({
               id: recipe.id,
               terms: toKeep,
           });
       })
    }
}