import bodyText from "./bodyText";

export default {
    name: 'protip',
    title: 'Pro Tip',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: "Optional title for the pro tip"
        },
        {
            title: 'body',
            name: 'text',
            type: 'array',
            of: [{type: 'block'}]
        },
    ]
}