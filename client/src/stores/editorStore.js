import {store} from 'react-stax';
import user from './userStore';

const draft = store({
    postID: Number,
    updatedContent: '',
    author: user.name
})

export default draft