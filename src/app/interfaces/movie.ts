export interface MovieImage{
    height:number,
    id:string,
    url?:string,
    width:number

}
export interface Movie{
    id:string,
    image:MovieImage,
    title:string,
    titleType:string,
    year:number
}


export interface Meta{
    operation:string,
    requestId:string
    serviceTimeMs:number
}
export interface FirsMovie{
    meta:Meta,
    type:string,
    paginationKey:string,
    totalMatches:number,
    results:Movie[]
}