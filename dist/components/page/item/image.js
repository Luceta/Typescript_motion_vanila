import { BaseComponent } from "./../component.js";
export class ImageComponent extends BaseComponent {
    constructor(title, url) {
        super(`<section class="image">
            <div class="image_holder">
              <img class="image_thumbnail">
              <p class="image__title"></p>
            </div>
            </section>`);
        const imageElement = this.element.querySelector(".image_thumbnail");
        imageElement.src = url;
        imageElement.alt = title;
        const titleElement = this.element.querySelector(".image__title");
        titleElement.textContent = title;
    }
}
