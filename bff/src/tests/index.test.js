const { prepareArticles } = require('../helpers/prepareArticles');
const { prepareTags } = require('../helpers/prepareTags');
const { formatDate } = require('../utils/formatDate');


describe('prepareTags', () => {
  const articles = [
    {
      taxonomy: {
        tags: [
          { slug: 'tag1', text: 'Tag 1' },
          { slug: 'tag2', text: 'Tag 2' },
          { slug: 'tag3', text: 'Tag 3' }

        ]
      }
    },
    {
      taxonomy: {
        tags: [
          { slug: 'tag2', text: 'Tag 2' },
          { slug: 'tag3', text: 'Tag 3' }
        ]
      }
    },
    {
      taxonomy: {
        tags: [
          { slug: 'tag3', text: 'Tag 3' }
        ]
      }
    }
  ];
  it('should filter and normalize articles', () => {
    const result = prepareTags(articles)
    expect(result).toEqual([
      { slug: 'tag3', text: 'Tag 3', count: 3 },
      { slug: 'tag2', text: 'Tag 2', count: 2 },
      { slug: 'tag1', text: 'Tag 1', count: 1 }
    ])
  })
  it('prepareTags should handle empty articles array', () => {
    const result = prepareTags([]);
    expect(result).toEqual([]);
  });
  it('prepareTags should handle articles with no tags', () => {
    const articlesWithNoTags = [
      {
        taxonomy: {
          tags: [
            { slug: 'tag2', text: 'Tag 2' },
            { slug: 'tag3', text: 'Tag 3' }
          ]
        }
      },
      {
        taxonomy: {
          tags: []
        }
      }
    ];
    const result = prepareTags(articlesWithNoTags);
    expect(result).toEqual([
      { slug: 'tag2', text: 'Tag 2', count: 1 },
      { slug: 'tag3', text: 'Tag 3', count: 1 },
    ])
  })
  it('prepareTags should handle articles with duplicate tags', () => {
    const articlesWithDuplicateTags = [
      {
        taxonomy: {
          tags: [
            { slug: 'tag1', text: 'Tag 1' },
            { slug: 'tag1', text: 'Tag 1' }
          ]
        }
      }
    ];
    const result = prepareTags(articlesWithDuplicateTags);
    expect(result).toEqual([
      { slug: 'tag1', text: 'Tag 1', count: 2 }
    ]);
  });
  it('prepareTags should handle tags with no slug or text', () => {
    const articlesWithNoSlugOrText = [
      {
        taxonomy: {
          tags: [
            { slug: '', text: '' },
            { slug: 'tag2', text: 'Tag 2' }
          ]
        }
      }
    ];
    const result = prepareTags(articlesWithNoSlugOrText);
    expect(result).toEqual([
      { slug: '', text: '', count: 1 },
      { slug: 'tag2', text: 'Tag 2', count: 1 }
    ]);
  });


});

describe('formatDate', () => {
  const date = '2021-03-25T14:20:00.000Z'
  it('should format date correctly', () => {
    expect(formatDate(date)).toBe('25 de Marzo de 2021')
  })
  it('should handle empty date strings', () => {
    const dateStr = '';
    const result = formatDate(dateStr);
    expect(result).toBe('Fecha inválida');
  });
  it('should handle custom string date strings', () => {
    const dateStr = '11231312';
    const result = formatDate(dateStr);
    expect(result).toBe('Fecha inválida');
  });

  it('should handle null date strings', () => {
    const dateStr = null;
    const result = formatDate(dateStr);
    expect(result).toBe('Fecha inválida');
  });

  it('should handle undefined date strings', () => {
    const dateStr = undefined;
    const result = formatDate(dateStr);
    expect(result).toBe('Fecha inválida');
  });

})
describe('prepareArticles', () => {
  const articles = [
    {
      _id: '1',
      display_date: '2019-12-06T17:50:17.735Z',
      headlines: { basic: 'Headline 1' },
      subtype: '7'
    },
    {
      _id: '2',
      display_date: '2019-12-06T17:50:17.735Z',
      headlines: { basic: 'Headline 2' },
      subtype: '7'
    },
    {
      _id: '3',
      display_date: '2021-03-25T14:20:00.000Z',
      headlines: { basic: 'Headline 3' },
      subtype: '5'
    }
  ];

  it('should filter and normalize articles', () => {
    const result = prepareArticles(articles);
    expect(result).toEqual([
      {
        date: '6 de Diciembre de 2019',
        headlines: 'Headline 1'
      },
      {
        date: '6 de Diciembre de 2019',
        headlines: 'Headline 2'
      }
    ]);
  });
  it('should return an empty array if no articles match the subtype', () => {
    const noMatchingArticles = [
      {
        _id: '4',
        display_date: '2022-03-01T10:00:00.000Z',
        headlines: { basic: 'Headline 4' },
        subtype: '5'
      }
    ];
    const result = prepareArticles(noMatchingArticles);
    expect(result).toEqual([]);
  });

  it('should return an empty array if articles array is empty', () => {
    const result = prepareArticles([]);
    expect(result).toEqual([]);
  });

  it('should return correctly formatted articles even with varied date formats', () => {
    const variedDateArticles = [
      {
        _id: '5',
        display_date: '2021-07-20T10:00:00.000-05:00',
        headlines: { basic: 'Headline 5' },
        subtype: '7'
      }
    ];
    const result = prepareArticles(variedDateArticles);
    expect(result).toEqual([
      {
        date: '20 de Julio de 2021',
        headlines: 'Headline 5'
      }
    ]);
  });
});


