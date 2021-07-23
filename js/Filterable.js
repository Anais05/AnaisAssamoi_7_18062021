class Filterable 
{
    constructor(type)
    {
        this.all = new Set();
        this.filtered = new Set();
        this.selected = new Set();
        this.type = type;
        this.searchValue = '';
        this.BuildDropDownHTML().then(()=> {
            this.listenForInputSearch();
        });
    }

    BuildDropDownHTML()
    {
        return new Promise((resolve, reject) => {
            let dropDown = `
                <div id="dropdown-${this.type}" class="menu-close">
                    <input type="search" id="${this.type}" class="${this.type}-search type-search-input" placeholder="${this.type}s"/>
                    <i class="type-search-icon fas fa-chevron-down" id="${this.type}-open"></i>
                </div>
                <div id="dropdown-${this.type}-open" class="menu-open">
                    <input type="search" id="${this.type}" class="${this.type}-search type-search-input" placeholder="Rechercher un ${this.type}"/>
                    <i class="type-search-icon fas fa-chevron-up" id="${this.type}-close"></i>
                    <div class="dropdown-content" id="list-${this.type}"></div>
                </div>
            `;
            document.getElementById('selection').innerHTML += `<div id="${this.type}-tags-selected"></div>`
            document.getElementById('filters').innerHTML += dropDown;
            resolve();
        })
        

    }

    build()
    {
        this.all = this.collect(list.filtered);
        this.displayList(this.all).then(() => {
            this.listenForFilter();
            this.listenForUnselect();
        });
    }

    displayList(items)
    {
        return new Promise((resolve, reject) => {
            items = this.sortAlaphabetically(items);

            let html = '';

            items.forEach(item => {
                html += `<a href="#" class="${this.type}-tag tag" data-name="${item}">${item}</a>`;
            })

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
                this.selected.add(tag);
                this.displaySelection();
                list.filter();
                list.build();
            })
        })
    }

    listenForUnselect()
    {
        document.querySelectorAll(".fa-times-circle").forEach(chip => {
            chip.addEventListener("click", (e) => {
                let tag = e.target.parentNode.getAttribute('data-name');
                this.selected.delete(tag);
                this.displaySelection();
                list.filter();
                list.build();
            })
        })
    }

    listenForInputSearch() 
    {
        document.getElementById(`${this.type}`).addEventListener("input", (e) => {
            document.getElementById("list-" + this.type).style.display = "block";
            this.searchValue = e.target.value;
            console.log(this.searchValue);
            this.filterByInput();
        })
    }

    filterByInput()
    {
        let tags = document.querySelectorAll("." + this.type + "-tag");

        tags.forEach((tag) => {
            let name = tag.getAttribute("data-name");
      
            if (!name.includes(this.searchValue)) {
                tag.style.display = "none";
            }
        })
    }

    sortAlaphabetically(list) 
    {
        let sortlist = Array.from(list).sort();
        return new Set(sortlist);
    }

}