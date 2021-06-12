"use strict";


$(() => {
    //Div maior que abrange todas as outras
    const allpage = Section(uniKey(), { classNameB: "allpage" });
    //Div maior que abrange todas as outras
    const geral = Section(uniKey(), { classNameB: "geral" });

    /*Botão do X(fechar) no topo da pagina*/
    const close_pag = Button(uniKey(), {
        classNameB: 'button-7 close_pag',
        content: [Icon('times')],
        click: (() => {
            confirm("Você realmente deseja fechar?");
        })
    });

    const cliente = {
        cpf: "",
        points: 0,
        img: "https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/d940d200-1203-4198-b924-0a832fdd67e8/201909171600_RY4V_i.jpg"
    };

    
    //Parte do titulo
    const aba_titles = Section(uniKey(), { classNameB: "aba_title" });

    $(aba_titles).html([
        nText({ text: 'Cartão Fidelidade', classNameB: 'titles' }),
        rule(),
    ]);

    //Procura o cliente, verificando se existe algum na lista
    const search_client = Section(uniKey(), { classNameB: "search_client" });

    const cpf_input = inputField('cpf_input', {
        classNameB: 'input-field',
        placeholder: '000.000.000-00',
        mask: "000.000.000-00",

    });

    const button_search_cliente = Button(uniKey(), {
        classNameB: 'button',
        content: ['Procurar'],
        click:(() => {
            cliente.cpf = ConverterCPF(cpf_input.value);
            if(CPFcheck(cliente.cpf)){
            cliente.cpf = cpf_input.value;
            }
            else{
                alert("Dados Inválidos!");
            }
        })
    });

    $(search_client).html([
        nText({ text: 'Digite o Cpf do cliente: ', classNameB: 'sub-titles' }),
        space(10),
        cpf_input,
        space(10),
        button_search_cliente
    ]);

    const all_button_fidelidade = Section(uniKey(), { classNameB: "all_button_fidelidade" });
    let selected_tables = [];
    let inputinicial = 1;
    let inputfinal = 10;
    let aux = 0;
    while (inputinicial <= inputfinal) {
        selected_tables[aux] = inputinicial;
        inputinicial++;
        aux++;
    }
    let points = 0;
    selected_tables.forEach((e) => {
        const button_fidelidade = Button(uniKey(), {
            classNameB: 'button-2 button_fidelidade button_teste' + e,
            content: [''],
            click: (() => {
                if($(".fa-check-circle",button_fidelidade).length>0){
                    $(".fa-check-circle",button_fidelidade).remove();
                     $('.button_teste'+e).css('background-image', '');
                    activeDiv.classList.remove('hidden');  
                }else{
                $(button_fidelidade).html(Icon('check-circle'));
                $('.button_teste'+e).css('background-image', 'url("https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/d940d200-1203-4198-b924-0a832fdd67e8/201909171600_RY4V_i.jpg")');

                }

                points = $(".fa-check-circle",all_button_fidelidade).length;
                if (points == 10) {
                    alert("O cliente acumulou 10 pontos!")
                }
                
            })

        });

        $(all_button_fidelidade).append(button_fidelidade);


    });
    

   
    const button_final = Section(uniKey(), { classNameB: "button_final" });
    const button_confirmar = Button(uniKey(), {
        classNameB: "button button_confirmar",
        content: [Icon('check'), 'Concluir'],
        click: (() => {
            cliente.cpf = ConverterCPF(cpf_input.value);
            console.log(cliente.cpf);
            if(CPFcheck(cliente.cpf)){
                    cliente.cpf = cpf_input.value;
                    cliente.points = Number(points);
                    console.log(cliente);

                   
            }
            else{
                alert("Dados Inválidos!");
            }
         
        })
    });
    const button_cancelar = Button(uniKey(), {
        classNameB: "button-3 button_cancelar",
        content: [Icon('ban'), 'Cancelar'],
        click: (() => {
            confirm("Você realmente deseja cancelar a operação?");
        })
    });
    $(button_final).html([
        button_cancelar,
        button_confirmar
    ]);
    /*const invalid_data = Section(uniKey(),{classNameB:"invalid-data"});
    $(invalid_data).html([
        nText({ text: 'Dados Inválidos!'}),
    ]);

    $(invalid_data).hide();
*/
    $(geral).html([
        aba_titles,
        search_client,
        space(100),
        all_button_fidelidade,
        space(100),
        button_final,
    ]);
   
    $('#root').html(geral);

});

function ConverterCPF(strCPF){
    var string = strCPF.replace(/[^\d]+/g,'') ;
    return string;
}
function CPFcheck(strCPF) {
    var Soma;
    var Resto;
    var i;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}


const generateTablesQR = (s, e, target) => {
    $(target).html("");
    for (let aux = s; aux <= e; aux++) {
        let aux_n = 0;
        if (aux < 10) { aux_n = '0' + aux } else { aux_n = aux }

        const button_table = Button(uniKey(), {
            classNameB: 'button-2',
            content: [Icon('qrcode'), ' Mesa ' + aux_n],
            click: (() => {
                showStoreQRCode("ta/" + aux);
            })
        });

        button_table.style.display = "none";
        $(target).append(button_table);
        $(button_table).show("fast");
    }
}