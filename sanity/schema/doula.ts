const doula = {
  name: 'doula',
  title: 'Doula Profile',
  type: 'document',
  fields: [
    { name: 'id', title: 'ID', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'name', title: 'Name', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'credentials', title: 'Credentials', type: 'string' },
    { name: 'bio', title: 'Bio', type: 'text' },
    { name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } },
    { name: 'areas', title: 'Service Areas', type: 'array', of: [{ type: 'string' }] },
    { name: 'active', title: 'Active', type: 'boolean', initialValue: true },
    { name: 'order', title: 'Display Order', type: 'number' },
    { name: 'isLeadership', title: 'Is Leadership', type: 'boolean', initialValue: false },
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
}

export default doula
