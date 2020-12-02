export default {
    title: 'Image',
    name: 'bodyImage',
    type: 'image',
    options: {
        hotspot: true // <-- Defaults to false
    },
    fields: [
        {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            options: {
                isHighlighted: true 
            }
        },
        {
            name: 'alt',
            title: 'Alt',
            type: 'string',
            options: {
                isHighlighted: true
            }
        }
    ]
}
