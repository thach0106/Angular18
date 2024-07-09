import { Routes } from '@angular/router';

export const blogRoutes: Routes = [
  {
    path: 'blogs/:slug',
    redirectTo: ({ params }) => {
      const deletedBlogId = 1;

      const blogId = params['slug'];
      if (blogId == deletedBlogId) {
        return `/home`;
      }

      return `blogs/:slug`;
    },
  },
  {
    path: 'blogs',
    title: 'Blogs page app',
    loadComponent: () =>
      import('../blogs/views/blogs-view/blogs-view.component').then(
        (m) => m.BlogsViewComponent
      ),
  },
  {
    path: 'blogs/:slug',
    title: 'Blog detail page app',
    loadComponent: () =>
      import('../blogs/views/blog-detail-view/blog-detail-view.component').then(
        (m) => m.BlogDetailViewComponent
      ),
  },
];
