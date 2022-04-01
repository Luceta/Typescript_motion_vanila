import { BaseComponent } from "../page/component.js";
export class InputDialog extends BaseComponent {
    constructor() {
        super(`<dialog class="dialog">
          <div class="dialog__container">
            <button class="close">&times;</button>
            <div id="dialog__body"></div>
            <button class="dialog__submit">ADD</button>
          </div>
        </dialog>`);
        const closeBtn = this.element.querySelector(".close");
        closeBtn.onclick = () => {
            this.submitListner && this.submitListner();
        };
        const submitBtn = this.element.querySelector(".dialog__submit");
        submitBtn.onclick = () => {
            this.closeListner && this.closeListner();
        };
    }
    setOnCloseListner(listenr) {
        this.closeListner = listenr;
    }
    setOnSubmitListner(listner) {
        this.submitListner = listner;
    }
    addChild(child) {
        const body = this.element.querySelector("#dialog__body");
        child.attachTo(body);
    }
}
