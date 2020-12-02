import bodyImage from './image'
import protip from './protip'

export default {
    name: 'bodyText',
    title: 'Body',
    type: 'array',
    of: [
        {type: 'block'},
        {type: 'code'},
        bodyImage,
        protip     
    ]
}