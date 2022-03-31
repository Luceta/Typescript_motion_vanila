import { BaseComponent, Component } from "./component.js";

export interface Composable {
  //조립하할 수  있는 뜻뜻
  addChild(child: Component): void;
}
export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable
{
  constructor() {
    super('<ul class="page">This is PageComponent</ul>');
  }

  addChild(section: Component) {
    const item = new PageItmeComponent();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListner(() => {
      item.removeFrom(this.element);
    });
  }
}

type OnCloseListener = () => void;
class PageItmeComponent extends BaseComponent<HTMLElement> {
  private closeListner?: OnCloseListener;
  constructor() {
    super(`<li class="page-item">
           <section class="page-item__body"></section>
            <div class="page-item__controls">
              <button class="close">&times;</button>
            </div>
          </li>`);

    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListner && this.closeListner();
    };
  }
  addChild(child: Component) {
    const container = this.element.querySelector(
      ".page-item__body"
    )! as HTMLElement;
    child.attachTo(container);
  }
  setOnCloseListner(listener: OnCloseListener) {
    this.closeListner = listener;
  }
}
