import { CategoryProduct } from "./category_product";
import { Geomancy } from "./geomancy";
import { ProductDetail } from "./product_detail";
import { StoneType } from "./stone_type";

export class Product {
    id?:number;
    name:string;
    geomancy?:Geomancy;
    image: File;
    color?:string;
    note?:string;
    bestSeller?:boolean;
    homeFlag?:boolean;
    active?:boolean;
    cat?:CategoryProduct;
    mainStone?:StoneType;
    subStone?:StoneType;
    productDetails?:ProductDetail[];

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
        this.productDetails = null;
    }

}