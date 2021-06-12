"use strict";


let slides_data = [
    {
        name: 'Burguers',
        id: '15sda265asd325a',
        active: true,
        slides: [
            { name: 'Slide 01', active: true, type: 'product', data: { product: "NskiW3Re", id: "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/KY41M76LEi2bR6nra73hs0r0S/bOnOCt6DxK.png" } },
            { name: 'Slide 02', active: true, type: 'product', data: { product: "AWdTgVgP", id: "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/NskiW3Re.png" } },

        ]
    },
    {
        name: 'Burguers',
        id: '15sda265asd325a',
        active: true,
        slides: [
            { name: 'Slide 03', active: true, type: 'product', data: { product: "NskiW3Re", id: "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/KY41M76LEi2bR6nra73hs0r0S/JV2E55rVyS.png" } },
            { name: 'Slide 04', active: false, type: 'video', data: { product: "NskiW3Re", id: 'youtube.com...' } },
            { name: 'Slide 04', active: true, type: 'product', data: { product: "AWdTgVgP", id: 'https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/KY41M76LEi2bR6nra73hs0r0S/72XFCddUu9.png' } }

        ]
    }
];
const Store = {
    id: "E088DYPxiqrnFisjf8Ri3zC6E",
    catalog: {

        "aFgjQ7cCKi": {
            "visible": true,
            "name": "Combo",
            "itens": {
                "NskiW3Re": {
                    "price": "30",
                    "image": true,
                    "price_promo": "25",
                    "visible": true,
                    "order": 0,
                    "name": "Combo feliz",
                    "description": "2 Sucos, 3 docinhos e um mega doce",
                    "attributes": {
                        "aNTX9mbE": {
                            "visible": true,
                            "name": "Molho",
                            "qty": [
                                "",
                                "1"
                            ],
                            "itens": {
                                "pSDpKSXB": {
                                    "price": "3",
                                    "visible": true,
                                    "name": "Molho tarê"
                                },
                                "y1QnN2FN": {
                                    "price": "0",
                                    "name": "Molho da casa",
                                    "visible": true
                                }
                            }
                        }
                    }
                },

            }
        },
        "Jy3j2rRy12": {
            "itens": {
                "AWdTgVgP": {
                    "name": "Panda feliz",
                    "price_promo": "",
                    "description": "Arroz com alga com recheio de sushi e cream cheaseaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    "attributes": {
                        "ZrXBbo8z": {
                            "itens": {
                                "vdukZrjX": {
                                    "price": "20",
                                    "visible": true,
                                    "name": "5 un."
                                },
                                "TEJuEOgU": {
                                    "visible": true,
                                    "name": "10 un.",
                                    "price": "30"
                                }
                            },
                            "visible": true,
                            "qty": [
                                "1",
                                "15"
                            ],
                            "name": "Quantidade"
                        }
                    },
                    "visible": true,
                    "image": true,
                    "price": "50"
                }
            },
            "name": "Sushi",
            "visible": true
        },
        "v8nhUj2Zqd": {
            "itens": {
                "Z4c2APK4": {
                    "price_promo": "30",
                    "price": "50",
                    "description": "Doce delicioso japones",
                    "name": "Mojin 123456",
                    "visible": true,
                    "image": true,
                    "attributes": {
                        "1XE9v0yh": {
                            "name": "Molho",
                            "itens": {
                                "v5yCQhbL": {
                                    "description": "Molho de maionese",
                                    "name": "Molho da casa",
                                    "price": "0",
                                    "visible": true
                                },
                                "f3RxRVoO": {
                                    "name": "Molho tai",
                                    "price": "2",
                                    "description": "Molho agridoce com pimenta",
                                    "visible": true
                                }
                            },
                            "visible": true,
                            "qty": [
                                "",
                                "1"
                            ]
                        }
                    }
                }
            },
            "name": "Doce",
            "visible": true
        }

    }
};
let catalog_whitelist = [];
Object.keys(Store.catalog).forEach((e) => {
    Object.keys(Store.catalog[e].itens).forEach((v) => {
        catalog_whitelist.push({
            "name": Store.catalog[e].itens[v].name,
            "avatar": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/" + Store.id + "/" + v + "-150x150.png",
            "description": Store.catalog[e].itens[v].description,
            "value": v,
            "price": Store.catalog[e].itens[v].price
        });
    });
});
console.log(catalog_whitelist);

$(() => {
    const geral = Section(uniKey(), { classNameB: "geral" });
    const title = Section(uniKey(), { classNameB: "geral" });
    $(slides_section).html([
        slides_area,
        button_fullscrean

    ]);
    $('#slides').html(geral);

});
var slideIndex = 0;
const showSlides = () => {
    var i;
    var slides = document.getElementsByClassName("slides-area-content");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.zindex = "5";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "flex";

    setTimeout(showSlides, 8000); // Change image every 2 seconds
}