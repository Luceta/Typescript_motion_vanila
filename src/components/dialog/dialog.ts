import { Composable } from "./../page/page.js";
import { BaseComponent, Component } from "../page/component.js";

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export class InputDialog
  extends BaseComponent<HTMLElement>
  implements Composable
{
  closeListner?: OnCloseListener;
  submitListner?: OnSubmitListener;
  constructor() {
    super(`<dialog class="dialog">
          <div class="dialog__container">
            <button class="close">&times;</button>
            <div id="dialog__body"></div>
            <button class="dialog__submit">ADD</button>
          </div>
        </dialog>`);
    const closeBtn = this.element.querySelector(".close")! as HTMLElement;
    // closeBtn.addEventListener("click","") 보통은 addEventListner로서 여러가지 이벤트를 할당해줌!

    closeBtn.onclick = () => {
      this.submitListner && this.submitListner();
    };

    const submitBtn = this.element.querySelector(
      ".dialog__submit"
    )! as HTMLElement;

    submitBtn.onclick = () => {
      this.closeListner && this.closeListner();
    };
  }

  setOnCloseListner(listenr: OnCloseListener) {
    this.closeListner = listenr;
  }

  setOnSubmitListner(listner: OnSubmitListener) {
    this.submitListner = listner;
  }

  addChild(child: Component): void {
    const body = this.element.querySelector("#dialog__body")! as HTMLElement;
    child.attachTo(body);
  }
}
