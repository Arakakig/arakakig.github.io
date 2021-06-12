"use strict";
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
                    "name": "Combo felizaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    "description": "2 Sucos, 3 docinhos e um mega doceaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
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
                    "description": "Arroz com alga com recheio de sushi e cream chease",
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
                    "price": ""
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
let slides_data = [
    {
        name: "Fritas",
        id: "15sda265asd325a",
        active: true,
        slides: [
            { name: "Slide 01", active: true, type: "product", data: { id: "NskiW3Re" } },
            { name: "Slide 02", active: false, type: "video", data: { url: "youtube.com..." } }
        ]
    },
    {
        name: "Bebidas",
        id: "15sda265asd325a",
        active: true,
        slides: [
            { name: "Slide 01", active: true, type: "product", data: { id: "Z4c2APK4" } },
            { name: "Slide 02", active: false, type: "video", data: { url: "youtube.com..." } }
        ]
    },
    {
        name: "Combo",
        id: "15sda265asd325a",
        active: false,
        slides: [
            { name: "Slide 01", active: true, type: "product", data: { id: "AWdTgVgP" } },
            { name: "Slide 02", active: false, type: "video", data: { url: "youtube.com..." } }
        ]
    }
];
let catalog_whitelist = [];
let catalog = [];
Object.keys(Store.catalog).forEach((e) => {
    Object.keys(Store.catalog[e].itens).forEach((v) => {
        catalog_whitelist.push({
            "name": Store.catalog[e].itens[v].name,
            "avatar": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/" + Store.id + "/" + v + "-150x150.png",
            "description": Store.catalog[e].itens[v].description,
            "value": v,
            "price": Store.catalog[e].itens[v].price
        });
        catalog.push({
            "name": Store.catalog[e].itens[v].name,
            "avatar": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/" + Store.id + "/" + v + ".png",
            "description": Store.catalog[e].itens[v].description,
            "value": v,
            "price": Store.catalog[e].itens[v].price
        });
    });
});

$(() => {

    const all_body = Section(uniKey(), { classNameB: "all-body" });
    const title = Section(uniKey(), { classNameB: "title-title" });
    $(title).html([
        nText({ text: "Slide", classNameB: "title" }),
        rule(),
    ])

    const create = Section(uniKey(), { classNameB: "create" });
    const create_slide = Button(uniKey(), {
        classNameB: "button-7 ",
        content: [Icon("plus"), " Criar Slide"],
        click: (() => {
            modalUnique();
        })
    });
    const create_category = Button(uniKey(), {
        classNameB: "button-7",
        content: [Icon("plus"), " Criar Categoria"],
        click: (() => {
            modalCategory();
        })
    });
    const preview_slides = Button(uniKey(), {
        classNameB: "button-7",
        content: [Icon("plus"), " Pré-Visualizar"],
        click: (() => {
            previewSlides();
        })
    });

    $(create).html([
        create_slide,
        create_category,
        preview_slides
    ])

    const slide_list = Section(uniKey(), { classNameB: "slide-list" });
    const slide_on = Section(uniKey(), { classNameB: "slide-on" });
    const slide_on_body = Section(uniKey(), { classNameB: "slide-on-body" });


    slides_data.forEach((el) => {
        const slide_on_list = Section(uniKey(), {
            classNameB: "name-slide-on-list",
        });
        var active = {
            visible: true,
        };

        const status_promo = booleanButton(uniKey(), active);

        $(slide_on_list).html([
            nText({ text: el.name, classNameB: "name-slide-list" }),
            status_promo,
        ])
        $(slide_on_body).append([slide_on_list])
        new Sortable(slide_on_body, {
            cursor: 'move',
            groud: 'shared',
            animation: 150,
        });
    })
    // Modal
    const modal_create_unique = Section('modal-create-unique', { classNameB: "modal-pop modal-create-unique" });
    const modal_create_unique_content = Section('modal-create-unique-content', { classNameB: "modal-create-unique-content" });
    $(modal_create_unique).html(modal_create_unique_content);

    const modal_create_category = Section('modal-create-category', { classNameB: "modal-pop modal-create-category" });
    const modal_create_category_content = Section('modal-create-category-content', { classNameB: "modal-create-category-content" });
    $(modal_create_category).html(modal_create_category_content);

    const modal_preview_slides = Section('modal-preview-slides', { classNameB: "modal-pop modal-preview-slides slides-preview" });
    const modal_preview_slides_content = Section('modal-preview-slides-content', { classNameB: "modal-preview-slides-content" });
    $(modal_preview_slides).html(modal_preview_slides_content);

    $(slide_on).html([
        slide_on_body

    ])

    $(slide_list).html([
        slide_on,
    ])

    $(all_body).html([
        title,
        create,
        slide_list,
        modal_create_unique,
        modal_create_category,
        modal_preview_slides,

    ])
    $("#root").html(all_body);
})

const modalUnique = () => {
    $("#modal-create-unique-content").html("")
    $.fancybox.open({ src: "#modal-create-unique", touch: false, keyboard: false });

    let slides_data_unique = {};
    let has_slide = false;


    if (has_slide) {
        slides_data_unique = {
            name: "Slide 01", active: true, type: "product",
            data: { id: "NskiW3Re" }
        }
    } else {
        slides_data_unique = {
            name: "", active: true, type: "",
            data: { url: "", id: "" }
        }
    }

    const input_slides = Section(uniKey(), { classNameB: "input-slides" });
    const input_type = inputSelect(uniKey(), {
        classNameB: "input-field",
        placeholder: "",
        selected: slides_data_unique.type,
        options: {
            "Selecione": "null",
            "Produto": "product",
            "Video": "video",
        },
        onchange: (() => {
            if ($("option:selected", input_type).val() == "product") {
                $(option_video).hide();
                $(option_product).show("fast");
            } else if ($("option:selected", input_type).val() == "video") {
                $(option_product).hide();
                $(option_video).show("fast");
            } else {
                $(option_product).hide("fast");
                $(option_video).hide("fast");
            }
        })
    });
    const input_name = inputField(uniKey(), {
        classNameB: "input-field",
        placeholder: "",
        value: slides_data_unique.name,

    });

    const option_product_selected = inputField(uniKey(), {
        classNameB: "tagify",
        placeholder: "Selecione o produto",
        value: slides_data_unique.data.product,
    });
    const option_product = Section(uniKey(), { classNameB: "option-product" });

    $(option_product).html([
        nText({ text: "Selecione o produto que deseja adicionar ao slide: ", classNameB: "margin-left" }),
        space(),
        option_product_selected
    ]);

    if (slides_data_unique.type !== "product") {
        $(option_product).hide();
    }

    const option_video = Section(uniKey(), { classNameB: "option-video" });
    const input_video = inputField(uniKey(), {
        classNameB: "input-field",
        placeholder: "",
        value: slides_data_unique.data.id,

    });

    $(option_video).html([
        nText({ text: "Insira a url do video que deseja adicionar: ", classNameB: "margin-left" }),
        space(),
        input_video
    ]);
    if (slides_data_unique.type !== "video") {
        $(option_video).hide();
    }

    const status_promotion = Section(uniKey(), { classNameB: "status_promotion" });
    let active = { visible: true }
    const status_promo = booleanButton(uniKey(), active);


    /*Ordenando na div status_promotion*/
    $(status_promotion).html([
        nText({ text: "Status", classNameB: "name_class" }),
        status_promo
    ]);

    $(input_slides).html([
        nText({ text: "Digite o nome do slide que deseja adicionar: ", classNameB: "margin-left" }),
        space(),
        input_name,
        space(),
        nText({ text: "Digite o tipo de slide que deseja adicionar: ", classNameB: "margin-left" }),
        space(),
        input_type,
        space(),
        option_product,
        option_video,
        space(),
        status_promotion
    ]);

    //Botão Excluir
    const button_delete = Button(uniKey(), {
        classNameB: "button-3",
        content: [Icon("times"), " Excluir"],
        click: (() => {
            confirm("Você realmente deseja excluir? Você perderá todos os dados");
        })
    });
    const button_confirmar = Button(uniKey(), {
        classNameB: "button",
        content: [Icon("check"), " Concluir"],
        click: (() => {
            let is_valid = true;

            if (input_name.value == "") { is_valid = false; }
            if ($("option:selected", input_type).val() == "null") { is_valid = false; }
            if (($("option:selected", input_type).val() == "product") && (option_product_selected.value.length == 0)) { is_valid = false; }
            if (($("option:selected", input_type).val() == "video") && (input_video.value == "")) { is_valid = false; }

            if (is_valid) {
                slides_data_unique.name = input_name.value;
                slides_data_unique.type = $("option:selected", input_type).val();
                slides_data_unique.data = {}
                if ($("option:selected", input_type).val() == "product") {
                    let array = JSON.parse(option_product_selected.value);
                    slides_data_unique.data.id = array[0].value;
                } else {
                    slides_data_unique.data.url = input_video.value;
                }
                if (active.visible == true) {
                    slides_data_unique.active = true;
                } else {
                    slides_data_unique.active = false;
                }
                alert("Salvado com sucesso");
                $.fancybox.close()
            } else {
                alert("Revise os dados inseridos")
            }
        })
    });
    const button_final = Section(uniKey(), { classNameB: "button_final" });
    $(button_final).html([
        button_delete,
        hSpace(5),
        button_confirmar
    ]);

    const title = Section(uniKey(), { classNameB: "title-fancybox" });
    $(title).html([nText({ text: "Novo Slide" })]);
    const geral = Section(uniKey(), { classNameB: "geral" });
    $(geral).html([
        title,
        rule(),
        space(),
        input_slides,
        space(30),
        button_final
    ]);

    function tagTemplate(tagData) {
        return `
    <tag title="${(tagData.title || tagData.description)}"
            contenteditable="false"
            spellcheck="false"
            tabIndex="-1"
            class="${this.settings.classNames.tag} ${tagData.class ? tagData.class : ""}"
            ${this.getAttributes(tagData)}>
        <x title="" class="tagify__tag__removeBtn" role="button" aria-label="remove tag"></x>
        <div>
            <div class="tagify__tag__avatar-wrap">
                <img onerror="this.style.visibility="hidden"" src="${tagData.avatar}">
            </div>
            <span class="tagify__tag-text">${tagData.name}</span>
        </div>
    </tag>
`
    }

    function suggestionItemTemplate(tagData) {
        return `
    <div ${this.getAttributes(tagData)}
        class="tagify__dropdown__item ${tagData.class ? tagData.class : ""}"
        tabindex="0"
        role="option">
        ${tagData.avatar ? `
        <div class="tagify__dropdown__item__avatar-wrap">
            <img onerror="this.style.visibility="hidden"" src="${tagData.avatar}">
        </div>` : ""
            }
        <strong>${tagData.name}</strong>
        <span>${tagData.description}</span>
    </div>
`
    }

    // initialize Tagify on the above input node reference
    var tagify_produto = new Tagify(option_product_selected, {
        mode: "select",
        tagTextProp: "name", // very important since a custom template is used with this property as text. allows typing a "value" or a "name" to match input with whitelist
        enforceWhitelist: true, // Obriga receber todas as váriaveis somente do catalago
        skipInvalid: true, // do not remporarily add invalid tags
        dropdown: {
            closeOnSelect: true,
            enabled: 0,
            classname: "catalog-list",
            searchKeys: ["name", "description", "value"]  // very important to set by which keys to search for suggesttions when typing
        },
        templates: {
            tag: tagTemplate,
            dropdownItem: suggestionItemTemplate
        },
        whitelist: catalog_whitelist
    })

    $("#modal-create-unique-content").html(geral);

};

const modalCategory = () => {
    $("#modal-create-category-content").html("")
    $.fancybox.open({ src: "#modal-create-category", touch: false });

    const new_category = Section(uniKey(), { classNameB: "new-category" });
    const input_tables_category = inputField(uniKey(), { classNameB: "input-field ", placeholder: "Nome da Categoria" });
    /*Cria a div status_promoção */
    const status_slide = Section(uniKey(), { classNameB: "status_promotion" });

    var active = {
        visible: true,
    };

    const status_promo = booleanButton(uniKey(), active);

    $(status_slide).html([
        nText({ text: "Status", classNameB: "name_class" }),
        status_promo
    ]);

    //Botão Excluir
    const button_delete = Button(uniKey(), {
        classNameB: "button-3",
        content: [Icon("times"), " Excluir"],
        click: (() => {
            confirm("Você realmente deseja excluir? Você perderá todos os dados");
        })
    });

    const button_confirmar = Button(uniKey(), {
        classNameB: "button",
        content: [Icon("check"), " Concluir"],
        click: (() => {
            let is_valid = true;

            if (input_tables_category.value == "") { is_valid = false; }

            if (is_valid) {
                alert("Salvo com sucesso");
                let newCategory =
                {
                    name: "",
                    id: "",
                    active: true,
                    slides: [
                        { name: "", active: true, type: "", data: { product: "", id: "", url: "" } },

                    ]
                }
                if (active.visible == true) {
                    newCategory.active = true
                } else {
                    newCategory.active = false
                }
                newCategory.name = input_tables_category.value;
                newCategory.id = uniKey();
                slides_data.push(newCategory);

                const slide_on_list = Section(uniKey(), {
                    classNameB: "name-slide-on-list",
                });
                var activeIsTrue = {
                    visible: true,
                };

                const status_promo = booleanButton(uniKey(), activeIsTrue);

                $(slide_on_list).html([
                    nText({ text: newCategory.name, classNameB: "name-slide-list" }),
                    status_promo,
                ])

                $(".slide-on-body").append(slide_on_list);
                $.fancybox.close()
            } else {
                alert("Revise os dados inseridos")
            }
        })
    });

    const button_create = Section(uniKey(), { classNameB: "button_final" });
    $(button_create).html([
        button_delete,
        hSpace(10),
        button_confirmar
    ]);
    const title = Section(uniKey(), { classNameB: "title-fancybox" });
    $(title).html([nText({ text: "Nova Categoria" })]);
    $(new_category).html([
        title,
        space(),
        nText({ text: "Categoria:", classNameB: "" }),
        space(),
        input_tables_category,
        status_slide,
        space(30),
        button_create
    ])

    $("#modal-create-category-content").html([new_category])
}


const previewSlides = () => {
    $("#modal-preview-slides-content").html("")
    $.fancybox.open({ src: "#modal-preview-slides", touch: false });


    const slides_section = Section(uniKey(), { classNameB: "slides-section" });

    const button_fullscrean = Button(uniKey(), {
        classNameB: "button-7 button-fullscrean",
        content: [Icon("expand")],
        click: (() => {
            toggleFullScreen();
        })
    });
    const slide_transition = Section('slide-transition', { classNameB: "slide-transition" });
    const slides_area = Section(uniKey(), { classNameB: "slides-area" });
    $(slides_section).html([
        slides_area,
        slide_transition,
        button_fullscrean
    ]);


    $("#modal-preview-slides-content").html(slides_section);

    slides_data.forEach((el) => {
        for (var aux = 0; aux < el.slides.length; aux++) {


            if (el.slides[aux].active == true) {


                if (el.slides[aux].type == "product") {


                    const slides_area_content = Section(uniKey(), { classNameB: "slides-area-content" });
                    let get_element = catalog.filter(catalog => catalog.value == el.slides[aux].data.id);

                    const img_slides = Section(uniKey(), { classNameB: "img-product" });
                    img_slides.style.backgroundImage = "url(" + get_element[0].avatar + ")";

                    const titleItem_slides = Section(uniKey(), { classNameB: "titleItem-slides-wood" });
                    $(titleItem_slides).html([nText({ text: ' ' + get_element[0].name })]);

                    const description_slides = Section(uniKey(), { classNameB: "description-slides" });
                    $(description_slides).html([nText({ text: ' ' + get_element[0].description })]);

                    const price_slides = Section(uniKey(), { classNameB: "price-slides" });
                    $(price_slides).html([nText({ text: 'Por: ' + Number(get_element[0].price).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }) })]);

                    const product_fields_content = Section(uniKey(), { classNameB: "product-fields-content" });
                    $(product_fields_content).html([
                        titleItem_slides,
                        space(),
                        description_slides,
                        space(),
                        price_slides
                    ]);

                    const background_description = Section(uniKey(), { classNameB: "wood" });
                    const background_shadow_description = Section(uniKey(), { classNameB: "wood-shadow" });

                    const product_fields = Section(uniKey(), { classNameB: "product-fields" });
                    $(product_fields).html([
                        background_description,
                        background_shadow_description,
                        product_fields_content
                    ]);
                    $(slides_area_content).html([
                        img_slides, 
                        product_fields
                    ]);
                    $(slides_area).append(slides_area_content);
                }

            }
        }
    })
   
    showSlides();
};

const hSpace = (n) => {
    const obj = document.createElement("div");
    obj.style.display = "inline-block";
    obj.style.width = n + "px";
    return obj
}
var slideIndex = 0;

const showSlides = () => {

    var modal = document.getElementById("modal-preview-slides");
    if(modal.style.display=="none"){
        return null;
    }

    var slides = document.getElementsByClassName("slides-area-content");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.zindex = "5";
    }
    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "flex";
    transitionSlides()
    setTimeout(showSlides, 8000); // Change image every 2 seconds
}
const transitionSlides = () => {
    let slideTarget = document.getElementById("slide-transition");
   
    setTimeout(() => {
        slideTarget.classList.add("transition-active");
        setTimeout(() => {
            slideTarget.classList.remove("transition-active");
        }, 3000);
    }, 7000);

}

const toggleFullScreen = () => {

    if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }

    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }


    }
}
document.onfullscreenchange = function (event) {
    let slideTarget = document.getElementById("modal-preview-slides");
    let existe = document.getElementsByClassName("preview-fullscreen");
    if (existe.length == 0) {
        slideTarget.classList.add("preview-fullscreen");
    }
    else {
        slideTarget.classList.remove("preview-fullscreen");
    }

};