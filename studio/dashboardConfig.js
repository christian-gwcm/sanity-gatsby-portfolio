export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '611ce01b4658d1e5c72155e3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ogfift82',
                  apiId: 'c1ebff4b-af0b-46b8-94d8-16a8bdd8325b'
                },
                {
                  buildHookId: '611ce01b758f8decceceb88c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xu39kwph',
                  apiId: '58ff1f02-16f8-43bf-b82c-01cc7c74dbfe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/christian-gwcm/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xu39kwph.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
