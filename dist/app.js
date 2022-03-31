import { PageComponent } from "./components/page/page.js";
import { ImageComponent } from "./components/page/item/image.js";
import { VideoComponent } from "./components/page/item/video.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("Image Title", "https://www.w3schools.com/images/w3lynx_200.png");
        const video = new VideoComponent("Video Title", "https://youtu.be/7VNgjfmv_fE");
        const note = new NoteComponent("note title", "note content");
        const todo = new TodoComponent("Todo title", "to do item");
        image.attachTo(appRoot, "beforeend");
        video.attachTo(appRoot, "beforeend");
        note.attachTo(appRoot, "beforeend");
        todo.attachTo(appRoot, "beforeend");
    }
}
new App(document.querySelector(".document"));
