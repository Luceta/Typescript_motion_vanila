import { PageComponent } from "./components/page/page.js";
import { ImageComponent } from "./components/page/item/image.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("Image Title", "https://www.w3schools.com/images/w3lynx_200.png");
        console.log(image, "cs");
        image.attachTo(appRoot, "beforeend");
    }
}
new App(document.querySelector(".document"));
