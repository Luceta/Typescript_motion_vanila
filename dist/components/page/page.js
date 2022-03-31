import { BaseComponent } from "./component.js";
export class PageComponent extends BaseComponent {
    constructor() {
        super('<ul class="page">This is PageComponent</ul>');
    }
    addChild(section) {
        const item = new PageItmeComponent();
        item.addChild(section);
        item.attachTo(this.element, "beforeend");
        item.setOnCloseListner(() => {
            item.removeFrom(this.element);
        });
    }
}
class PageItmeComponent extends BaseComponent {
    constructor() {
        super(`<li class="page-item">
           <section class="page-item__body"></section>
            <div class="page-item__controls">
              <button class="close">&times;</button>
            </div>
          </li>`);
        const closeBtn = this.element.querySelector(".close");
        closeBtn.onclick = () => {
            this.closeListner && this.closeListner();
        };
    }
    addChild(child) {
        const container = this.element.querySelector(".page-item__body");
        child.attachTo(container);
    }
    setOnCloseListner(listener) {
        this.closeListner = listener;
    }
}
