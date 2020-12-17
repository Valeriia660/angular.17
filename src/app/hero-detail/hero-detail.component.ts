import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    //let id = 0;
    if (this.route.snapshot.paramMap.get('id') == null) {
      return
    }
    //id = +this.route.snapshot.paramMap.get('id');
    let id2: string | null = this.route.snapshot.paramMap.get('id');
    let id = 0;
    if (id == null) {
      return
    } else {
      id = parseInt(id2?.toString() == undefined ? "" : id2.toString());
    }

    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
