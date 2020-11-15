export class Products {
    id;
    titre;
    image;
    prix;
    cat;

    constructor(id = 0, titre = '', image = '', prix = '', cat = '') {
this.id = id;
this.titre = titre;
this.image = image;
this.prix = prix;
this.cat = cat;
    }
}