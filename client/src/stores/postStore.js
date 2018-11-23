import { store } from "react-stax";
import axios from 'axios';


const testPost = store([])
axios
.post(
  `http://localhost:3005/api/article/get`
)
.then(function(response) {
    testPost = store([response])
})
.catch(function(error) {
  console.log(error);
});



export default testPost;
