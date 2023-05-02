export class persona{
    id?: number;
    nombre: String;
    titulo: String;
    domicilio: String;
    fechaNac: String;
    telefono: String;
    correo: String;
    img_banner: String;
    img_foto: String;
    url_facebook: String;
    url_instagram: String;
    acercaDe: String;

    constructor(nombre: String, titulo: String, domicilio: String, fechaNac: String, telefono: String, correo: String, img_banner: String, img_foto: String, url_facebook: String, url_instagram: String, acercaDe: String){
        this.nombre = nombre;
        this.titulo = titulo;
        this.domicilio = domicilio;
        this.fechaNac = fechaNac;
        this.telefono = telefono;
        this.correo = correo;
        this.img_banner = img_banner;
        this.img_foto = img_foto;
        this.url_facebook = url_facebook;
        this.url_instagram = url_instagram;
        this.acercaDe = acercaDe;
        
    }
}
