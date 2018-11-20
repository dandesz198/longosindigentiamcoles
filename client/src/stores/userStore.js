import {store} from 'react-stax';

const user = store({
    username: String,
    name: String,
    role: String
})

export default user;