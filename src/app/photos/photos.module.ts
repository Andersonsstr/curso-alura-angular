import { NgModule } from '@angular/core';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.model';
import { PhotoListModule } from './photo-list/photo-list.model';


@NgModule({
       imports: [
         PhotoModule, 
         PhotoFormModule, 
         PhotoListModule]
})

export class PhotosModule {}