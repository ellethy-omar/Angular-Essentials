import { mediaitem } from "../../to-be-imported/to-be-imported.component";
import { OnInit, Injectable } from "@angular/core";

@Injectable(
    {providedIn: 'root'}
)
export class Service {
    mediaitemlist:mediaitem[] = [
        new mediaitem("Movies","Fight Club","Action",1999),
        new mediaitem("Movies","Tinatic","Romance",1999)
      ]

    addMediaitem(mediaitem:mediaitem)
    {
        this.mediaitemlist.push(mediaitem);
    }

    deleteMediaitem(mediaitem:mediaitem)
    {
        const index= this.mediaitemlist.indexOf(mediaitem);
        if (index >=0)   
        {
            this.mediaitemlist.splice(index,1);
        }
    }

    getMediaitem()
    {
        return this.mediaitemlist;
    }

    
}