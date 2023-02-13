export interface Cliente{
    id?:number,
    nombreNegocio:string;
    direccion:string;
    tipo:string;
    cantidadEncargues:number;
    descripcion?:string;
}