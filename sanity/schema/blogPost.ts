const blogPost = {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      options: {
        list: [
          { title: 'Georgette Kerr', value: 'Georgette Kerr' },
          { title: 'Ashley Morrison', value: 'Ashley Morrison' },
          { title: 'Allison Hart', value: 'Allison Hart' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Postpartum Doula', value: 'Postpartum Doula' },
          { title: 'Newborn Sleep', value: 'Newborn Sleep' },
          { title: 'Breastfeeding', value: 'Breastfeeding' },
          { title: 'Newborn Care', value: 'Newborn Care' },
          { title: 'Lactation', value: 'Lactation' },
          { title: 'Postpartum Recovery', value: 'Postpartum Recovery' },
        ],
      },
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.max(160),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: false,
    },
  ],
}

export default blogPost
