import { PageComponent } from "./components/page.js";


class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
  }
}

// 정적으로 doucment가 있으므로 type assertion 사용!
new App(document.querySelector(".document")! as HTMLElement);
