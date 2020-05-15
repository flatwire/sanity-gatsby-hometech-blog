export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebeb6ee8343f702551217fe',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-hometech-blog-studio',
                  apiId: '0a83d369-da74-4613-998d-8d553e443735'
                },
                {
                  buildHookId: '5ebeb6eeae847e017949903f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-hometech-blog',
                  apiId: 'de598a0d-c010-42b3-8d18-5dcfcc8547a1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/flatwire/sanity-gatsby-hometech-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-hometech-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
