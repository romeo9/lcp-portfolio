export default {
    name: 'research',
    title: 'Research',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'size',
        title: 'Size',
        type: 'array',
        of: [{type: 'number'}],
        options: {
          list: [
            {title: 'Small', value: 3},
            {title: 'Medium', value: 5},
            {title: 'Big', value: 7},
          ]
        }
      }
    ],
    preview: {
      select: {
        title: 'title',
        media: 'image',
      },
    }
  }