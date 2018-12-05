import { store } from "react-stax";

const modal = store({
  head: "Modal Head",
  body: "Modal Body",
  shown: false,
  show(body, head) {
    modal.shown = true;
    modal.body = body;
    modal.head = head;
    setTimeout(() => {
      modal.shown = false;
    }, 4000);
  }
});

export default modal;
