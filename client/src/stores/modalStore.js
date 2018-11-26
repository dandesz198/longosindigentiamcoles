import { store } from "react-stax";


const modalStore = store({
    head: 'Modal Head',
    body: 'Modal Body',
    shown: false,
    show(body, head){
        this.shown = true;
        this.body = body;
        this.head = head;
        setTimeout(()=>{this.shown = false}, 4000)
    }
})


export default modalStore;
