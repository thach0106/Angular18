import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-blog-detail-view',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './blog-detail-view.component.html',
  styleUrl: './blog-detail-view.component.scss',
})

export class BlogDetailViewComponent {
  blogId: number;
  blogDetail$: Observable<{ id: number; name: string }>;

  constructor(private currentRoute: ActivatedRoute, private router: Router ) {}
  ngOnInit() {
    this.blogId = Number(this.currentRoute.snapshot.paramMap.get('slug'));

    this.blogDetail$ = this.currentRoute.paramMap.pipe(
      switchMap((params) => {
        return of({ id: this.blogId, name: 'Thach' });
      })
    );
  }

  goToBlogsPage() {
    this.router.navigate(['/blogs']);
  }
}
