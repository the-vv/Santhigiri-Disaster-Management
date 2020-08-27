import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../services/news-service.service'

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// for map url 
@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

const temparticle = {
  "timestamp": 1561732525,
  "articleCount": 10,
  "articles": [
    {
      "title": "A Living Example lorem ipsom testing new long linecomments with slice pipe angular",
      "description": "City Councilmember Dr. Shahid Shafi Exemplifies The American Dream. A Living Example lorem ipsom testing new long linecomments with slice pipe angular",
      "url": "https://www.southlakestyle.com/community/people/a-living-example/",
      "image": "https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753",
      "publishedAt": "2019-06-28 09:32:37 UTC",
      "source": {
        "name": "Southlake Style",
        "url": "https://www.southlakestyle.com"
      }
    },
    {
      "title": "A Living Example",
      "description": "City Councilmember Dr. Shahid Shafi Exemplifies The American Dream.",
      "url": "https://www.southlakestyle.com/community/people/a-living-example/",
      "image": "https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753",
      "publishedAt": "2019-06-28 09:32:37 UTC",
      "source": {
        "name": "Southlake Style",
        "url": "https://www.southlakestyle.com"
      }
    },
    {
      "title": "A Living Example",
      "description": "City Councilmember Dr. Shahid Shafi Exemplifies The American Dream.",
      "url": "https://www.southlakestyle.com/community/people/a-living-example/",
      "image": "https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753",
      "publishedAt": "2019-06-28 09:32:37 UTC",
      "source": {
        "name": "Southlake Style",
        "url": "https://www.southlakestyle.com"
      }      
    },
    {
      "title": "A Living Example",
      "description": "City Councilmember Dr. Shahid Shafi Exemplifies The American Dream.",
      "url": "https://www.southlakestyle.com/community/people/a-living-example/",
      "image": "https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753",
      "publishedAt": "2019-06-28 09:32:37 UTC",
      "source": {
        "name": "Southlake Style",
        "url": "https://www.southlakestyle.com"
      }      
    }
  ]
}

export class NEWS {
  timestamp: number;
  articleCount: number;
  articles: Array<any>;
}

@Component({
  selector: 'app-newscards',
  templateUrl: './newscards.component.html',
  styleUrls: ['./newscards.component.scss']
})
export class NewscardsComponent implements OnInit {

  news: NEWS;

  constructor(
    private News: NewsServiceService
  ) { }

  ngOnInit(): void {

    // this.setNews();

    //  temporary for development
    this.news = temparticle;

  }

  setNews() {
    this.News.getNews()
      .subscribe(response => {
        this.news = response;
        console.log(this.news);
      });
  }

}
