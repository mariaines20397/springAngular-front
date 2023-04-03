export interface Usuario{
    id?:number,
    nombre:string;
    apellido:string;
    email:string;
    username:string;
    password?:string;
    rol?:string[]
}