import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos:Photo[] = [];
  filter: string = '';
  hasMore:boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(private activatedRoute: ActivatedRoute, private photosService: PhotoService) { }
  
  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }

  onKeyUp(target : any) {
    if(target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      this.filter = elemento.value;
    }
  }

  load(){
    this.photosService.listFromPaginated(this.userName, ++this.currentPage).subscribe(photos => {
      this.photos = this.photos.concat(photos);
      if(!photos.length) this.hasMore = false;
    });
  }
}
