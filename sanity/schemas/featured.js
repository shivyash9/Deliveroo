export default {
  name: "featured",
  type: "document",
  title: "Featured Menu Categories",

  fields: [
     {
      name: "name",
      type: "string",
      title: "Featured Category name",
      validation: (Rule) => Rule.required(),
     },

     {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.required(),
     },

     {
      name: "restaurant",
      type: "array",
      title: "Restaurant",
      of: [{type: "reference", to: [{type: "restaurant"}]}],
     }

  ],

}