// Random Character Art
const random_civs = ["civ_1.png", "civ_2.png", "civ_3.png", "civ_4.png"];

const civ_tokens = canvas.tokens.controlled;

civ_tokens.forEach(assign_image);

function assign_image(to_assign) {
    let random = Math.floor(Math.random() * random_civs.length);
    to_assign.document.update({"texture.src": random_civs[random]})
};
