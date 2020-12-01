import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef, OnChanges, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

import { map, catchError, switchMap } from 'rxjs/operators';
import {  of, timer } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import { ApplicationService } from 'src/app/services/application.service';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';

import { Lightbox } from '@ngx-gallery/lightbox';


const data = [
  {
    srcUrl: '../../../assets/newAs/mt-demo/76200/76279/mt-content/uploads/2018/12/mt-1700-solutions-img02.jpg',
    previewUrl: '../../../assets/newAs/mt-demo/76200/76279/mt-content/uploads/2018/12/mt-1700-solutions-img02.jpg'
  },
  
];

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})




export class PartnersComponent implements OnInit, OnChanges, DoCheck {
  public currentNumber: number = 2;
  public example: any = null;
  public images: string[] = [
    '../../../assets/0003.jpg',
    '../../../assets/0002.jpg',
    '../../../assets/0001.jpg',
  
   
  ]

  imageObject: Array<object> = [{
    image: '../../../assets/0003.jpg',
    thumbImage: '../../../assets/0003.jpg',
 
}, {
  image: '../../../assets/0002.jpg',
  thumbImage: '../../../assets/0002.jpg',

},
{
  image: '../../../assets/0001.jpg',
  thumbImage: '../../../assets/0001.jpg',

}
];


  items: GalleryItem[];
  @ViewChild('itemTemplate') itemTemplate: TemplateRef<any>;

  imageData = data;

  title = 'angular2-photoswipe-demo';
 // image1: Image;
 // image2: Image;

 ngOnChanges() {
  this.selectExample(2);
  this.selectExample(2);
 }

 ngDoCheck() {
  this.selectExample(2);
  this.selectExample(2);
 }

  ngOnInit() {
      const htm = document.getElementById("h");
                htm.style.overflow = "auto";
    this.applicationService.menuClickReviews();
    this.selectExample(2);
    this.selectExample(2);
 /*   this.image1 = new Image();
    this.image1.largeUrl = 'https://picsum.photos/4934/3296/?image=1';
    this.image1.height = 3296;
    this.image1.width = 4934;
    this.image1.id = 0;
    this.image1.size = `${this.image1.width}x${this.image1.height}`;
    this.image1.thumbUrl = 'https://picsum.photos/300/200/?image=1';
    this.image1.description = 'hello world';
    this.image1.author = 'David Wollschlegel';

    this.image2 = new Image();
    this.image2.largeUrl = 'https://picsum.photos/4934/3296/?image=0';
    this.image2.height = 3296;
    this.image2.width = 4934;
    this.image2.id = 1;
    this.image2.size = `${this.image2.width}x${this.image2.height}`;
    this.image2.thumbUrl = 'https://picsum.photos/300/200/?image=0';
*/




    this.items = this.imageData.map(item => {
      return {
        type: 'imageViewer',
        data: {
          src: item.srcUrl,
          
        }
      };
    });

      /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
      itemTemplate: this.itemTemplate,
      gestures: false
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);



    this.languageService.setLang();
    window.scrollTo(0, 0);
 
    // 1. Create gallery items
    this.items = data.map(item =>
      new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );

    // Load items into the lightbox
    this.basicLightboxExample();

    // Load item into different lightbox instance
    // With custom gallery config
    this.withCustomGalleryConfig();
  }

  basicLightboxExample() {
    this.gallery.ref().load(this.items);
  }

  /**
   * Use custom gallery config with the lightbox
   */
  withCustomGalleryConfig() {

    // 2. Get a lightbox gallery ref
    const lightboxGalleryRef = this.gallery.ref('anotherLightbox');

    // (Optional) Set custom gallery config to this lightbox
    lightboxGalleryRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
       
    });

    // 3. Load the items into the lightbox
    lightboxGalleryRef.load(this.items);
  }


  galleryId = 'myLightbox';
  show = false;

  public showloader: boolean = false;      

  private timer: Observable<any>;
  constructor(public gallery: Gallery, public lightbox: Lightbox, private router: Router, public languageService: LanguageService, public applicationService: ApplicationService) {
  
  
   }





  




 
 
   
   selectExample(number: number) {
     this.currentNumber = number;
  
   }



 
 






}
