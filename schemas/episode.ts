export default {
  name: 'episode',
  type: 'document',
  title: 'Episode',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        slugify: (input: string) => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    },
    {
      name: 'epFile',
      type: 'file',
      title: 'Episode File',
      accept: 'audio/*'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      rows: 10
    },
    {
      name: 'epNum',
      type: 'string',
      title: 'Episode #'
    },
    {
      name: 'epImage',
      type: 'image',
      title: 'Episode Image',
    },
    {
      name: 'epNotes',
      type: 'text',
      title: 'Notes',
      rows: '10'
    },
    {
      name: 'epTranscript',
      type: 'text',
      title: 'Transcript',
      rows: '20'
    },
    {
      name: 'releaseDate',
      type: 'date',
      title: 'Release Date',
    },
    {
      name: 'isLive',
      type: 'boolean',
      title: 'This episode is Live'
    }
  ]
}