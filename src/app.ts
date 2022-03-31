import { PageComponent } from "./components/page/page.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";

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

    const video = new VideoComponent(
      "Video Title",
      "https://youtu.be/K3-jG52XwuQ"
    );

    const note = new NoteComponent("note title", "note content");
    const todo = new TodoComponent("Todo title", "to do item");

    this.page.addChild(image);
    this.page.addChild(note);
    this.page.addChild(todo);
    this.page.addChild(video);
  }
}

// 정적으로 doucment가 있으므로 type assertion 사용!
new App(document.querySelector(".document")! as HTMLElement);
