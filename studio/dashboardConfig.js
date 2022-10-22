export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '63545cc29147876c0f4063b5',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-18koaps5',
                  apiId: '8bb360ad-dc1c-47c1-b5c3-ef5eea008ebc'
                },
                {
                  buildHookId: '63545cc26b1a766af2311e15',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ns9mt2jw',
                  apiId: '7a57272a-fcac-4b01-86a7-089814810b2f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wernerglinka/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ns9mt2jw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
