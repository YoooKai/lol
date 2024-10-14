export default class Champion {
    constructor(data) {
    this.name = data.name;                // Nombre del campeón
    this.title = data.title;              // Título del campeón
    this.image = data.id + '_0.jpg';      // Imagen (id del campeón)
    this.image2 = data.id + '_1.jpg';      // Imagen (id del campeón)
    this.roles = data.tags;               // Roles del campeón (array de roles)
    this.blurb = data.blurb;
    }
}
    