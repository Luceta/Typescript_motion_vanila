export class ImageComponent {
    constructor(title, url) {
        const template = document.createElement("template");
        template.innerHTML = `<section class="image">
  <div class="image_holder">
    <img class="image_thumbnail">
    <p class="image__title"></p>
  </div>
</section>`;
        this.element = template.content.firstElementChild;
        const imageElement = this.element.querySelector(".image_thumbnail");
        imageElement.src = url;
        imageElement.alt = title;
        const titleElement = this.element.querySelector(".image__title");
        titleElement.textContent = title;
    }
    attachTo(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.element);
    }
}
