class Search 
{
    constructor()
    {
        this.searchValue = '';
    }

    listenForSearch()
    {
        document.getElementById('main-search').addEventListener('input', (e) => {
            this.searchValue = e.target.value.toLowerCase();
            console.log(this.searchValue);
            this.search();

        })
    }

    search()
    {
        if (this.searchValue.length > 2) {
            list.filtered = list.filtered.filter(recipe => {
                if (recipe.name.toLowerCase().includes(this.searchValue)) {
                    return true;
                }
                if (recipe.description.toLowerCase().includes(this.searchValue)) {
                    return true;
                }
                for (let i = 0; i < recipe.ingredients; i++) {
                    if (recipe.ingredients[i].ingredient.toLowerCase().includes(this.searchValue)) {
                        return true;
                    }
                }
                return false;
            })
            console.log(list.filtered);
            list.displayRecipes()
        } else {
            list.filtered = list.all;
            list.displayRecipes() 
        }
        
    }
}