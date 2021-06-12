"use strict";


$(() => {
    let slides_data = [];
    let has_slide = true;

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
    let catalog_whitelist = [];
    Object.keys(Store.catalog).forEach((e) => {
        Object.keys(Store.catalog[e].itens).forEach((v) => {

            catalog_whitelist.push({
                "name": Store.catalog[e].itens[v].name,
                "avatar": "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/" + Store.id + "/" + v + "-150x150.png",
                "description": Store.catalog[e].itens[v].description,
                "value": v
            });
        });
    });
    if (has_slide) {
        slides_data = [
            {
                name: 'Burguers',
                id: '15sda265asd325a',
                active: true,
                slides: [
                    { name: 'Slide 01', active: true, type: 'product', data: { id: "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/KY41M76LEi2bR6nra73hs0r0S/bOnOCt6DxK.png" } },
                    { name: 'Slide 02', active: false, type: 'video', data: { url: 'youtube.com...' } }
                ]
            },
            {
                name: 'Burguers',
                id: '15sda265asd325a',
                active: true,
                slides: [
                    { name: 'Slide 01', active: true, type: 'product', data: { id: "https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/KY41M76LEi2bR6nra73hs0r0S/bOnOCt6DxK.png" } },
                    { name: 'Slide 02', active: false, type: 'video', data: { url: 'youtube.com...' } }
                ]
            }
        ];
    }
    else {
        slides_data = [
            {
                name: '',
                id: uniKey(),
                active: true,
                slides: [
                    { name: '', active: true, type: '', data: { id: "" } },
                    { name: '', active: true, type: '', data: { url: "" } }
                ]
            }];
    }


    const input_slides = Section(uniKey(), { classNameB: "input-slides" });
    const input_type = inputSelect(uniKey(), {
        classNameB: 'input-field',
        placeholder: '',
        selected: slides_data[0].slides[0].type,
        options: {
            "Selecione": "null",
            "Produto": "product",
            "Video": "video",
        },
        onchange: (() => {
            if ($('option:selected',input_type).val() == "product") {
                $(option_video).hide();
                $(option_product).show('fast');
            }
            else if ($('option:selected',input_type).val() == "video") {
                $(option_product).hide();
                $(option_video).show('fast');
            }
            else{
                $(option_product).hide('fast');
                $(option_video).hide('fast');
            }
        })
    });
    const input_name = inputField(uniKey(), {
        classNameB: 'input-field',
        placeholder: '',
        value: slides_data[0].slides[0].name,

    });

    const option_product_selected = inputField(uniKey(), {
        classNameB: 'tagify',
        placeholder: 'Selecione o produto',
    });
    const option_product = Section(uniKey(), { classNameB: "option-product" });

    $(option_product).html([
        nText({ text: 'Selecione o produto que deseja adicionar ao slide: ', classNameB: 'margin-left' }),
        space(),
        option_product_selected
    ]);

    if (slides_data[0].slides[0].type !== 'product') {
        $(option_product).hide();
    }

    const option_video = Section(uniKey(), { classNameB: "option-video" });

    
    $(option_video).html([
        nText({ text: 'Selecione o video que deseja adicionar: ', classNameB: 'margin-left' }),
        space(),
    ]);
    if (slides_data[0].slides[0].type !== 'video') {
        $(option_video).hide();
    }

    $(input_slides).html([
        nText({ text: 'Digite o nome do slide que deseja adicionar: ', classNameB: 'margin-left' }),
        space(),
        input_name,
        space(),
        nText({ text: 'Digite o tipo de slide que deseja adicionar: ', classNameB: 'margin-left' }),
        space(),
        input_type,
        space(),
        option_product,
        option_video
    ]);





    //Botão Excluir
    const button_delete = Button(uniKey(), {
        classNameB: "button-3",
        content: [Icon('times'), ' Excluir'],
        click: (() => {
            confirm("Você realmente deseja excluir? Você perderá todos os dados");
        })
    });
    const button_confirmar = Button(uniKey(), {
        classNameB: "button",
        content: [Icon('check'), ' Concluir'],
        click: (() => {
            let is_valid = true;

            if (input_name.value == "") { is_valid = false; }
            if ($('option:selected', input_type).val() == "null") { is_valid = false; }
            if (option_product_selected.value.length == 0) { is_valid = false; }


            if (is_valid) {
                slides_data[0].slides[0].name = input_name.value;
                slides_data[0].slides[0].type = $('option:selected', input_type).val();
                console.log(input_name.value);
                console.log($('option:selected', input_type).val());
                console.log(option_product_selected.value);
                alert("Salvado com sucesso");
            }
            else {
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

    const title = Section(uniKey(), { classNameB: "title" });
    $(title).html([nText({ text: 'Novo Slide' })]);
    const geral = Section(uniKey(), { classNameB: "geral" });
    $(geral).html([
        title,
        rule(),
        input_slides,
        space(30),
        space(30),
        button_final
    ]);


    $('#root').html(geral);






    function tagTemplate(tagData) {
        return `
    <tag title="${(tagData.title || tagData.description)}"
            contenteditable='false'
            spellcheck='false'
            tabIndex="-1"
            class="${this.settings.classNames.tag} ${tagData.class ? tagData.class : ""}"
            ${this.getAttributes(tagData)}>
        <x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>
        <div>
            <div class='tagify__tag__avatar-wrap'>
                <img onerror="this.style.visibility='hidden'" src="${tagData.avatar}">
            </div>
            <span class='tagify__tag-text'>${tagData.name}</span>
        </div>
    </tag>
`
    }

    function suggestionItemTemplate(tagData) {
        return `
    <div ${this.getAttributes(tagData)}
        class='tagify__dropdown__item ${tagData.class ? tagData.class : ""}'
        tabindex="0"
        role="option">
        ${tagData.avatar ? `
        <div class='tagify__dropdown__item__avatar-wrap'>
            <img onerror="this.style.visibility='hidden'" src="${tagData.avatar}">
        </div>` : ''
            }
        <strong>${tagData.name}</strong>
        <span>${tagData.description}</span>
    </div>
`
    }

    // initialize Tagify on the above input node reference
    var tagify_produto = new Tagify(option_product_selected, {
        mode: "select",
        tagTextProp: 'name', // very important since a custom template is used with this property as text. allows typing a "value" or a "name" to match input with whitelist
        enforceWhitelist: true, // Obriga receber todas as váriaveis somente do catalago
        skipInvalid: true, // do not remporarily add invalid tags
        dropdown: {
            closeOnSelect: true,
            enabled: 0,
            classname: 'catalog-list',
            searchKeys: ['name', 'description', 'value']  // very important to set by which keys to search for suggesttions when typing
        },
        templates: {
            tag: tagTemplate,
            dropdownItem: suggestionItemTemplate
        },
        whitelist: catalog_whitelist
    })
});

const hSpace = (n) => {
    const obj = document.createElement("div");
    obj.style.display = 'inline-block';
    obj.style.width = n + 'px';
    return obj
}