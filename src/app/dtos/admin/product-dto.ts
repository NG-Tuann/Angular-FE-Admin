export class ProductDto {
    id?:number;
    name:string;
    geomancy?:number;
    color?:string;
    note?:string;
    bestSeller?:boolean;
    homeFlag?:boolean;
    active?:boolean;
    cat?:number;
    mainStone?:number;
    subStone?:number;
    file?: File;
    files?: File[];

    constructor(){
        this.id = 0;
        this.name='';
        this.geomancy = null;
        this.color='';
        this.note='';
        this.bestSeller=false;
        this.homeFlag=false;
        this.active=false;
        this.cat=null;
        this.mainStone=null;
        this.subStone=null;
        this.file = null;
        this.files = null;
    }

}