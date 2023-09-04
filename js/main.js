function MudaDesenho() {



    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    const texto2 = document.querySelector("h3");

    if ((valor == "gemeos") || (valor == "Gemeos") || (valor == "Gêmeos") || (valor == "gêmeos")) {
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src", "img/gemeos.jpg");
        imagem.setAttribute("width", "300px");
        texto.innerHTML = "Gêmeos";
        texto2.innerHTML = "Aspros de Gêmeos fora um dos Cavaleiro de Ouro veteranos do Santuário de Atena logo antes do começo oficial dos eventos da Guerra Santa contra Hades durante o Século XVIII que, por ter sua alma corrompida pela malícia de Yohma de Mefistófeles, acabou obcecado para obter a posição de Grande Mestre e por não a conseguir, planejou um golpe para usurpar a posição.";
    }
    else if ((valor == "escorpiao") || (valor == "Escorpião") || (valor == "Escorpiao") || (valor == "escorpião")) {
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src", "img/escorpiao.jpg");
        imagem.setAttribute("width", "300px");
        texto2.innerHTML = "Milo de escorpião é o Cavaleiro de Ouro de Escorpião que protege a casa de escorpião no santuário. Prezava muito a amizade, por isso passou a zelar por Hyoga depois da morte de seu amigo Camus de aquário.";
    }
    else if ((valor == "peixes") || (valor == "Peixes")) {
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src", "img/peixes.jpg");
        imagem.setAttribute("width", "300px");
        texto2.innerHTML = "Afrodite de Peixes é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. Usa variações de golpes com rosas, como o Rosas Diabólicas Reais.";
    }
    else if((valor=="aries") || (valor=="Áries") || (valor=="Aries") || (valor="áries")){
        texto.innerHTML = "Áries";
        imagem.setAttribute("src","img/aries.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco.";
    }
    else if ((valor == "leao") || (valor == "Leão") || (valor == "leão") || (valor == "Leao")) {
        texto.innerHTML = "Leão";
        imagem.setAttribute("src", "img/leao.jpg");
        imagem.setAttribute("width", "300px");
        texto2.innerHTML = "Irmão de Aiolos. Apesar de sua personalidade explosiva, tem um coração puro que distingue rapidamente os justos, por isso foi um dos primeiros Cavaleiros de Ouro a reconhecer a autoridade de Atena.";
    }

    else if ((valor == "virgem") || (valor == "Virgem")) {
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src", "img/virgem.jpg");
        imagem.setAttribute("width", "300px");
        texto2.innerHTML = "Shijima de Virgem é um dos Cavaleiros de Ouro que serviam o Santuário de Atena durante a Guerra Santa contra Hades no Século XVIII. Ele é conhecido como o Homem Silencioso  por sua quietude absoluta, bem como aquele que é mais próximo de Deus em sua geração.";
    }
    else if ((valor == "libra") || (valor == "Libra")) {
        texto.innerHTML = "Libra";
        imagem.setAttribute("src", "img/libra.jpg");
        imagem.setAttribute("width", "300px");
        texto2.innerHTML = "Dohko de Libra  foi um lendário e renomado Cavaleiro de Ouro do Santuário de Atena por ter lutado e sobrevivido à Guerra Santa contra Hades no Século XVIII ao lado de seu parceiro de batalhas, Shion de Áries. Após o fim do conflito e ser incumbido por Atena de vigiar o selo que aprisionava o espectros do Imperador dos Mortos, Dohko ficou recluso nos Cinco Picos Antigos de Rozan até o Século XX, período que passará a ser venerado como Mestre Ancião.";
    }
    else if ((valor == "sagitario") || (valor == "Sagitário") || (valor == "Sagitario") || (valor == "sagitário")) {
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src", "img/sagitario.jpg");
        imagem.setAttribute("width", "300px");
        texto2.innerHTML = "Aiolos de Sagitário é o Cavaleiro de Ouro de Sagitário do século XX. Antes de morrer, há 13 anos, entregou Atena ainda bebê e sua Armadura de Ouro aos cuidados de Mitsumasa Kido, que estava viajando pela Grécia.";
    }
    else if ((valor == "capricornio") || (valor == "Capricórnio") || (valor == "capricórnio") || (valor == "Capricornio")) {
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src", "img/capricornio.jpg");
        imagem.setAttribute("width", "300px");
        texto2.innerHTML = "Shura de Capricórnio é o Cavaleiro de Ouro que protege a Casa de Capricórnio. Shura se considera o cavaleiro mais fiel a Atena, porém sua excessiva lealdade ao Santuário acabou levando-o a cometer uma série de equívocos.";
    }

    else if ((valor == "aquario") || (valor == "Aquario") || (valor == "Aquário") || (valor == "aquário")) {
        texto.innerHTML = "Aquário";
        imagem.setAttribute("src", "img/aquario.jpg");
        imagem.setAttribute("width", "300px");
        texto2.innerHTML = "Camus de Aquário é o Cavaleiro de Ouro que protege a Casa de Aquário no Santuário. No mangá, treinou o pequeno Hyoga e Isaak durante seis anos nas geladas terras do leste da Sibéria. foi obrigado a lutar contra Hyoga no Santuário.";
    }
    else if ((valor == "cancer") || (valor == "câncer") || (valor == "Câncer") || (valor = "Cancer")) {
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src", "img/cancer.jpg");
        imagem.setAttribute("width", "300px");
        texto2.innerHTML = "Manigold de Câncer, cujo nome verdadeiro é desconhecido, fora um dos Cavaleiros de Ouro veteranos durante o século XVIII. Ele foi o único discípulo do Grande Mestre Sage durante sua infância marcada constantemente pela violência e a morte, o fizeram não ter apreço pela vida ou em viver, mas através dos ensinamentos de seu mestre.";
    } else {
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src", "img/x.webp");
        imagem.setAttribute("width", "250px");

    }

