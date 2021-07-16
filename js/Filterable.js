class Filterable 
{
    constructor(type)
    {
        this.all = new Set();
        this.filtered = new Set();
        this.selected = new Set();
        this.type = type;
        this.selection = document.getElementById('selection');
        this.selection.innerHTML += `<div id="${this.type}-tags-selected"></div>`;
        this.searchValue = '';
    }

    build()
    {
        this.all = this.collect(list.filtered);
        this.displayList(this.all).then(() => {
            this.listenForFilter();
            this.listenForUnselect();
        });
    }

    collect(recipes)
    {
        let list = new Set();

        let methodName = this._writeMethodName('collect');

        recipes.forEach(recipe => {
            recipe[methodName + 's']().forEach(item => {
                list.add(item);
            })
        });

        return list;
    }

    displayList(items)
    {
        items = this.sortAlaphabetically(items);

        return new Promise((resolve, reject) => {
            let html = '';

            items.forEach(item => {
                if (!this.selected.has(item)) {
                    html += `<a href="#" class="${this.type}-tag tag" data-name="${item}">${item}</a>`;
                }
            })

            // if (items.length === 1 && this.selected.has(item)) {
            //     console.log('here')
            //     html += `<p>Aucun ${this.type} à selectionner</p>`;
            // }
            document.getElementById(`list-${this.type}`).innerHTML = html;
            resolve();
        })
    }

    displaySelection()
    {
        let html = '';

        this.selected.forEach(item => {

            html += `
                    <span class="${this.type}-selected-tag tag" data-name="${item}">
                        ${item}
                        <i class="far fa-times-circle"></i>
                    </span>
                `;
        });
        document.getElementById(`${this.type}-tags-selected`).innerHTML = html;

    }

    listenForFilter()
    {
        document.querySelectorAll("." + this.type + "-tag").forEach(tag => {
            tag.addEventListener("click", (e) => {
                let tag = e.target.getAttribute('data-name');
                let methodName = this._writeMethodName('has');

                this.selected.add(tag);
                let recipesId = list.all.filter(recipe => !!(recipe[methodName](tag))).map(recipe => recipe.id);

                list.addFilter(this.type, tag, recipesId);
                this.displaySelection();
                list.filter();
                list.build();
            })
        })
    }

    listenForInputFilter() 
    {
        console.log('here');

        typeInput = document.querySelectorAll("." + this.type + "-search").forEach(input => {
            input.addEventListener("input", (e) => {
                document.getElementById("list-" + this.type).style.display = "block";
                this.searchValue = e.target.value;
                let tags = document.querySelectorAll("." + this.type + "-tag");
                tags.forEach(tag => {
                    let name = tag.getAttribute("data-name");
                    if (!name.includes(this.searchValue)) {
                        tag.style.display = "none";
                    }
                })
            })
        })
    }

    listenForUnselect()
    {
        document.querySelectorAll("." + this.type + "-selected-tag").forEach(chip => {
            chip.addEventListener("click", (e) => {
                let tag = e.target.getAttribute('data-name');

                this.selected.delete(tag);
                list.removeFilter(this.type, tag);
                this.displaySelection();
                list.filter();
                list.build();
            })
        })
    }

    sortAlaphabetically(list) 
    {
        let sortlist = Array.from(list).sort();
        return new Set(sortlist);
    }

    _writeMethodName(method)
    {
        return method + this.type.charAt(0).toUpperCase() + this.type.slice(1);
    }

}