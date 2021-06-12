"use strict";

 const cliente = {
        cpf: "",
        points: 0,
        img: "https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/d940d200-1203-4198-b924-0a832fdd67e8/201909171600_RY4V_i.jpg"
    };
$(() => {

   
    
    const button_teste = Button(uniKey(), {
        classNameB: "button-3",
        content: ['Teste'],
        click: (() => {
            $('.geral').css('background-image', 'url("https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/d940d200-1203-4198-b924-0a832fdd67e8/201909171600_RY4V_i.jpg")');
        })
    });
   

    const geral = Section(uniKey(), { classNameB: "geral" });
   
    

    $(geral).html([
        button_teste
    ]);
    $('#root').html(geral);
});
