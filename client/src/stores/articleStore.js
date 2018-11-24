import { store } from 'react-stax'
import {getAll} from './../api/article'
 console.log(getAll())

const article = store({articles:[getAll()]})

export default article