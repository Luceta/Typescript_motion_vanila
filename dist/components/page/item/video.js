import { BaseComponent } from "./../component.js";
export class VideoComponent extends BaseComponent {
    constructor(title, url) {
        super(`<section class="video">
            <div class="video_holder">
              <video class="video_thumbnail">
              <p class="video__title"></p>
            </div>
            </section>`);
        const videoElement = this.element.querySelector(".video_thumbnail");
        videoElement.src = url;
        const titleElement = this.element.querySelector(".video__title");
        titleElement.textContent = title;
    }
}
