const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      category: 'movies',
      author: 'John Doe',
    },
    {
      id: '2',
      title: 'Article title II',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      category: 'news',
      author: 'John Doe',
    },
    {
      id: '3',
      title: 'Article title III',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      category: 'news',
      author: 'John Doe',
    },
    {
      id: '4',
      title: 'Article  IV',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      category: 'movies',
      author: 'John Doe',
    },
  ],
  categories: ['sport', 'news', 'movies'],
};

export default initialState;
