import { PageComponent } from "./components/page/page.js";

import { ImageComponent } from "./components/page/item/image.js";
class App {
  //page 멤버 변수
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "Image Title",
      "https://www.w3schools.com/images/w3lynx_200.png"
    );
    console.log(image, "cs");
    image.attachTo(appRoot, "beforeend");
  }
}

// 정적으로 doucment가 있으므로 type assertion 사용!
new App(document.querySelector(".document")! as HTMLElement);
