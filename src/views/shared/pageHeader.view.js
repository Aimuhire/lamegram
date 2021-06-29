export class PageHeaderView {
    constructor(title, actionBtnText, actionCb) {
        this.title = title;
        this.actionBtnText = actionBtnText;
        this.actionCb = actionCb;
    }

    getElement() {
        const titleContainerElement = document.createElement('div');
        const titleElement = document.createElement('div');
        if (this.actionBtnText) {
            const actionBtnElement = document.createElement('button');
            actionBtnElement.className = "page-action-btn";
            actionBtnElement.innerHTML = this.actionBtnText;
            actionBtnElement.addEventListener('click', this.actionCb);
            titleContainerElement.appendChild(actionBtnElement);
        }
        titleContainerElement.className = "page-title-container"
        titleElement.className = "page-title";
        titleElement.innerHTML = this.title;
        titleContainerElement.appendChild(titleElement);
        return titleContainerElement;
    }
}
