export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5d677e70b404e85132a278d8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5cjnutjp',
                  apiId: 'f07b2772-4936-48a0-bb86-dcd65e494b34'
                },
                {
                  buildHookId: '5d677e70b404e8af20a278ad',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-w83pkr7b',
                  apiId: '6feea38b-cf58-4fa4-83e6-e2e3597e1372'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/codehustlers/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-w83pkr7b.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
