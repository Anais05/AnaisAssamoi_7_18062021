class FilterByUstensil extends Filterable
{
    constructor()
    {
        super('ustensil');
    }

    collect(recipes)
    {
        let list = new Set();

        recipes.forEach(recipe => {
            recipe.ustensils.forEach(ust => {
                list.add(ust);
            })
        });

        return list;
    }

    filter(recipes)
    {
        if (this.selected.size === 0) {
            return recipes;
        }

        return recipes.filter(recipe => {
            let isSelectable = false;
            let count = 0;

            this.selected.forEach(ust => {
                if (recipe.ustensils.includes(ust)) {
                    count++
                }  
            })

            if (count == this.selected.size) {
                isSelectable = true;
            }

            return isSelectable;
        })
    }
}