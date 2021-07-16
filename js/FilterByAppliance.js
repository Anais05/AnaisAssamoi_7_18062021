class FilterByAppliance extends Filterable 
{
    constructor()
    {
        super('appliance');
    }

    collect(recipes)
    {
        let list = new Set();

        recipes.forEach(recipe => {
            list.add(recipe.appliance);
        });

        return list;
    }

    filter(recipes)
    {
        if (this.selected.size === 0) {
            return recipes;
        }

        return recipes.filter(recipe => {
            return !!this.selected.has(recipe.appliance);
        })
    }
}