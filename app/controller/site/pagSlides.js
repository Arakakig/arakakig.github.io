"use strict";

const slide_store = {
    store : "E088DYPxiqrnFisjf8Ri3zC6E",
    slides : [{
        "id": 'E088DYPxiqrnFisjf8Ri3zC64',
        "name": 'Primeiro slide',
        "images": ["https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/AWdTgVgP.png",
        "https://marketingdigitalnapratica.com.br/wp-content/uploads/2019/11/facebook-url-curta-1024x576.jpg"],
    },
    {
        "id": 'E088DYPxiqrnFisjf8Ri3zC64',
        "name": 'Segundo slide',
        "images": ["https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/AWdTgVgP.png",
        "https://marketingdigitalnapratica.com.br/wp-content/uploads/2019/11/facebook-url-curta-1024x576.jpg"],
    },
    {
        "id": 'E088DYPxiqrnFisjf8Ri3zC64',
        "name": 'Terceiro slide',
        "images": ["https://storage.googleapis.com/zap-delivery-285220.appspot.com/stores/E088DYPxiqrnFisjf8Ri3zC6E/AWdTgVgP.png",
        "https://marketingdigitalnapratica.com.br/wp-content/uploads/2019/11/facebook-url-curta-1024x576.jpg"],
    },
    ]   
}

$(() => {
    const table_slides = Section(uniKey(), { classNameB: "table-slides" });
    const new_slide = Button(uniKey(),
        {
            classNameB: 'button',
            content: [Icon('file-image'), " Criar um novo slide"],
            click: (() => {
                showCreateslides()
            })
        });
    const all_slides = Section(uniKey(),{ classNameB: "all-slides" })


    const add_new_slide = Section(uniKey(), { classNameB: "add-new-slide" });
    $(add_new_slide).html([new_slide]);
    const modal_slides = Section('modal-slides', { classNameB: "modal-slides" });
    const modal_slides_content = Section('modal-slides-content', { classNameB: "modal-slides-content" });
    $(modal_slides).html(modal_slides_content);

    console.log(slide_store.slides.length);
    $(table_slides).html([
        nText({ text: 'Slides criados', classNameB: 'titles' }),
        rule(),
        space(10),
    ]);

    const geral = Section(uniKey(), { classNameB: "geral" });
    $(geral).html([
        add_new_slide,
        table_slides,
        modal_slides,
        all_slides
    ]);
    $('#root').html(geral);
    generateTableSlides(slide_store.slides.length,all_slides)
});

const showCreateslides = () => {
    $('#modal-slides-content').html('');
    $.fancybox.open({ src: "#modal-slides", touch: false });

    const generateSlidesInput = (e, target) => {
        $(target).html("");
        for (let aux = 1; aux <= e; aux++) {
            const slides_input = Button(uniKey(), {
                classNameB: 'button-2',
                //content: [],
                click: (() => {

                })
            });
            slides_input.style.display = "none";
            $(target).append(slides_input);
            $(slides_input).show("fast");
        }
    }
   
    const slides_data = {
        store: "E088DYPxiqrnFisjf8Ri3zC6E",
        slide: {
            id: uniKey(20),
            name: '',
            images: [],
        }
    };
    const input_name = Section(uniKey(), { classNameB: "input-name" });
    const input_name_text = inputField(uniKey(), {
        classNameB: 'input-field',
        placeholder: '',
    });
    $(input_name).html([
        nText({ text: 'Digite o nome do conjunto de slides que deseja adicionar: ' }),
        input_name_text
      
    ]);
    const input_slides = Section(uniKey(), { classNameB: "input-slides" });
    const input_number_slides = inputField(uniKey(), {
        classNameB: 'input-field',
        placeholder: '',
        mask: "00",
    });
    const button_gerar = Button(uniKey(), {
        classNameB: 'button-7',
        content: [Icon('magic'), ' Gerar'],
        click: (() => {
            generateSlidesInput(input_number_slides.value, slides_generator)
        })
    });

    const input_number_time = inputField(uniKey(), {
        classNameB: 'input-field',
        value: 150,
        mask: "000",
    });

    $(input_slides).html([
        nText({ text: 'Digite a quantidade de slides que deseja adicionar: ' }),
        input_number_slides,
        button_gerar,
        hSpace(15),
        nText({ text: 'Digite o intervalo de tempo em segundos entre um slide e outro: ' }),
        input_number_time,
    ]);

   
    const slides_generator = Section(uniKey(), { classNameB: "slides-generator" });

    //Botão Cancelar
    const button_duplicate = Button(uniKey(), {
        classNameB: "button",
        content: [Icon('copy'), ' Duplicar'],
        click: (() => { 
            $.fancybox.close();
        })
    });
    //Botão Excluir
    const button_delete = Button(uniKey(), {
        classNameB: "button-3",
        content: [Icon('times'), ' Excluir'],
        click: (() => {
            confirm("Você realmente deseja excluir? Você perderá todos os dados");
            $.fancybox.close();
        })
    });
    const button_confirm = Button(uniKey(), {
        classNameB: "button",
        content: [Icon('check'), ' Concluir'],
        click: (() => {
            $.fancybox.close();
        })
    });
    const button_final = Section(uniKey(), { classNameB: " button_final" });
    $(button_final).html([
        button_duplicate,
        hSpace(5),
        button_delete,
        hSpace(5),
        button_confirm
    ]);

    const geral = Section(uniKey(), { classNameB: "geral" });
    $(geral).html([
        input_name,
        rule(),
        input_slides,
        space(30),
        slides_generator,
        space(30),
        button_final
    ]);

    generateSlidesInput(5, slides_generator);
    $("#modal-slides-content").html([
        geral,
    ]);
};

const hSpace = (n) => {
    const obj = document.createElement("div");
    obj.style.display = 'inline-block';
    obj.style.width = n + 'px';
    return obj
}

const generateTableSlides = (e, target) => {
    $(target).html("");
    for (let aux = 0; aux <= e; aux++) {  

        const slides_button = Button(uniKey(),
        {
            classNameB: 'button-2 all_slides',
            content: [slide_store.slides[aux].name],
            click: (() => {
                showCreateslides()
            })
        });

        slides_button.style.display = "none";
        $(target).append(slides_button);
        $(target).append(space());
        $(slides_button).show("fast");
    }
}