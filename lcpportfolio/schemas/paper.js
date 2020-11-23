export default {
  name: 'paper',
  title: 'Paper',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    { name: 'year',
      title: 'Year',
      type: 'number'
    },
    {
      name: 'abstract',
      title: 'Abstract',
      type: 'text',
    }
  ],
  orderings: [
    {
      title: 'Last published',
      name: 'yearDesc',
      by: [
        {field: 'year', direction: 'asc'}
      ]
    }
  ]
}