import {store} from 'react-stax'
const testPost = store([
    {
        author: 'Rain',
        title: 'Az unikornisok szarva',
        content: '<h1>Szia</h1><h2>Mizu</h2>',
        postID: 0
    },
    {
        author: 'Dani',
        title: 'Az unikornisok élete',
        content: '<h1>Szia</h1><h2>Mizu</h2>',
        postID: 1
    },
    {
        author: 'Dani',
        title: 'Rainbow Dash Biography',
        content: '<h1>Szia</h1><h2>Mizu</h2>',
        postID: 2
    },
    {
        author: 'Lesti',
        title: 'Dash mint valaki',
        content: '<h1>Szia</h1><h2>Mizu hehe</h2> <p>By Lesti</p>',
        postID: 3
    },
    {
        author: 'Dash',
        title: 'Mekkora híresség lettem má?',
        content: '<h1>Szia</h1><h2>Ez ittt egz menő h2</h2>',
        postID: 4
    }
])

export default testPost;