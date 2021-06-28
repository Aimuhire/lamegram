export class PageHeaderView {
    constructor (title){
        this.title = title;
    }

    getElement(){
        const titleElement = document.createElement('div');
        titleElement.className = "page-title";
        titleElement.innerHTML = this.title;
        return titleElement;
    }
}
