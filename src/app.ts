import { InputDialog } from "./components/dialog/dialog.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent, PageItemComponent } from "./components/page/page.js";

class App {
  //page 멤버 변수
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    // 아래 DI으로 넣어서 활용 가능!(어떠한 컴포넌트 든)
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "Image Title",
      "https://www.w3schools.com/images/w3lynx_200.png"
    );
    this.page.addChild(image);

    const video = new VideoComponent(
      "Video Title",
      "https://youtu.be/K3-jG52XwuQ"
    );
    this.page.addChild(video);

    const note = new NoteComponent("note title", "note content");
    this.page.addChild(note);
    const todo = new TodoComponent("Todo title", "to do item");
    this.page.addChild(todo);

    const imageBtn = document.querySelector("#new-image")! as HTMLButtonElement;
    console.log(imageBtn, "check Img");
    imageBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      dialog.setOnCloseListner(() => {
        dialog.removeFrom(document.body);
      });

      dialog.setOnSubmitListner(() => {
        // 섹션을 만들어서 페이지에 추가를 해준다
        dialog.removeFrom(document.body);
      });

      dialog.attachTo(document.body);
    });
  }
}

// 정적으로 doucment가 있으므로 type assertion 사용!
new App(document.querySelector(".document")! as HTMLElement);
