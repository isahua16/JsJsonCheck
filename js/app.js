let object = {
    title: `Game`,
    price: 40,
    image_url: `https://img.freepik.com/free-psd/vr-video-game-composition_1419-2358.jpg?w=2000&t=st=1680056350~exp=1680056950~hmac=6fd55076673bd46033a359c2c49162d78516c52951e2df412782fda76c6081e3`,
    description: `This is a description of the product`
};

let selection_json = JSON.stringify(object);
console.log(selection_json);
Cookies.set(`user_selection`, selection_json);