const matrix_token = "matrix_token.png";
const meat_token = "meat_token.png";
const matrix = "matrix";
const meat = "meatspace";

const matrix_image = "matrix_image.png";
const meat_image = "meat_image.png";

const persona_name = "Persona";
const meat_name = "Runner";

const src = token.document.texture.src === matrix_token ? meat_token : matrix_token;
const name = token.document.name === persona_name ? meat_name : persona_name;

const actor_src = token.actor.img === matrix_image? meat_image : matrix_image;
const actor_name = token.actor.name === persona_name? meat_name : persona_name;

const per_init = token.actor.system.initiative.perception === matrix? meat : matrix;

await token.document.update({"texture.src": src, name});
await token.actor.update({prototypeToken: {"texture.src": src, name}});
await token.actor.update({"img": actor_src, "name": actor_name, "system.initiative.perception" : per_init});