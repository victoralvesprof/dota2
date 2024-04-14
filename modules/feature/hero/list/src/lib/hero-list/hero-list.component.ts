import {
  Component,
  ViewChild,
  inject,
  AfterViewInit,
  OnInit,
  DestroyRef,
} from '@angular/core';
import { CommonModule, provideImgixLoader } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSort, MatSortModule } from '@angular/material/sort';

import {
  DATATABLE,
  DATATABLEKEY,
  URL_BASE_IMAGES,
} from '../constant/hero-list.const';
import { HeroListService, Hero } from '@dota2/heroes-list';
import { map } from 'rxjs';

@Component({
  selector: 'lib-hero-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    NgOptimizedImage,
  ],
  providers: [provideImgixLoader(URL_BASE_IMAGES)],
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit, AfterViewInit {
  public readonly displayedColumns = DATATABLE;
  public readonly displayedColumnKeys = DATATABLEKEY;
  public dataSource = new MatTableDataSource<Hero>();
  private destroyRef = inject(DestroyRef);

  @ViewChild(MatPaginator) readonly paginator!: MatPaginator;
  @ViewChild(MatSort) readonly sort!: MatSort;

  public input!: string;
  public resultFound!: string;

  constructor(private readonly heroListService: HeroListService) {}

  public ngOnInit(): void {
    this.loadUsers();
  }

  trackByDataKey(index: number): number {
    return index;
  }

  private loadUsers() {
    this.heroListService
      .getAllHeroes()
      .pipe(
        map((heroes) =>
          heroes.map((hero) => ({
            ...hero,
            avatar: '/apps/dota2/images/dota_react/heroes/' + hero.name.slice('npc_dota_hero_'.length).concat('.png'),
          }))
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((heroes: Hero[]) => {
        this.dataSource.data = heroes;
      });
  }

  public ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // public onFilterChange(input: string) {
  //   this.dataSource.filter = input.trim().toLowerCase();
  //   this.input = input;

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }

  //   this.resultFound = this.dataSource.filteredData.length === 1
  //     ? `Foi encontrado 1 resultado para a pesquisa com o texto ${input}`
  //     : `Foram encontrados ${this.dataSource.filteredData.length} resultado para a pesquisa com o texto ${input}`;
  // }
}
