"use strict";


$(() => {
  
    const modal_loyalty= Section('modal-loyalty', { classNameB: "modal-loyalty" });
    const modal_loyalty_content = Section('modal-loyalty-content', { classNameB: "modal-loyalty-content" });
    $(modal_loyalty).html(modal_loyalty_content);
    const button_download_app_qrcode = Button(uniKey(), {
        classNameB: "button-2",
        content: [nText({ text: (Icon('plus')).outerHTML + ' Novo Cartão fidelidade'})],
        click: (() => {
            showCreateLoyalty()
        })
    })
    const geral = Section(uniKey(), { classNameB: "geral" });
    $(geral).html([
        button_download_app_qrcode,
        modal_loyalty
    ])
  

     $('#root').html(geral);
});

const showCreateLoyalty = () =>{
    $('#modal-loyalty-content').html('');
    $.fancybox.open({ src: "#modal-loyalty", touch: false });
    const new_loyalty = Section(uniKey(), { classNameB: "new-loyalty" });
    const input_points = inputField(uniKey(), { classNameB: 'input-points', value: 1, mask: '000' });
    const button_confirm = Button(uniKey(), {
        classNameB: "button",
        content: [Icon('check'), ' Concluir'],
        click: (() => {
            $.fancybox.close();
        })
    });
    $(new_loyalty).html([
        nText({ text: 'O cliente precisará de quantos pontos para ganhar o prêmio?', classNameB: 'titles' }),
        space(20),
        input_points,
        space(20),
        button_confirm,
    ]);
    $("#modal-loyalty-content").html([
        new_loyalty,
    ]);
}