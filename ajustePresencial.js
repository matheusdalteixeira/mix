$(document).on('ready', function(){
	let tela = $(window);
	let card = $('.card1');
	let card1 = $('.tipos:nth-child(1) .card1>div');
	let topicos = $('.topicos');
	let descricao = $('.descricao');
	let descricao_titulo = $('.ajusta-titulo-curso');
	let cardProficiency = $('.tipos:nth-child(2) .card1:nth-child(2)');
	let card3 = $('.tipos:nth-child(3) .card1>div');
	let adicionais = $('#adicionais');
	let adicionaisH1 = $('#adicionais>div>h1');
	let adicionaisH2 = $('#adicionais>div>h2');
	let adicionaisButtom = $('#adicionais>div>button');
	let ajusteImgLivros = $('img.rounded');
	let h1Principal = $('#adicionais h1');
	let buttonPrincipal = $('#adicionais button');

	let t1 = $('#tipo1');
	let t2 = $('#tipo2');
	let mob = $('.mobile2');
	// let mob1 = $('.mobile:nth-child(1)');
	// let mob2 = $('.mobile:nth-child(2)');
	// let mob3 = $('.mobile:nth-child(3)');
	// let mob4 = $('.mobile:nth-child(4)');
	let mob1 = $('#mobile1');
	let mob2 = $('#mobile2');
	let mob3 = $('#mobile3');
	let mob4 = $('#mobile4');
	let tipos3 = $('#tipo3 img');

	if(tela.width() < 540){
		adicionais.css('top','100px');
	    h1Principal.removeClass('fontVERYBIGrem fontMEDIUMBIGrem').addClass('fontBIGrem');
		adicionaisH2.removeClass('fontBIGrem fontMEDIUMBIGrem').addClass('fontMEDIUMrem');
	    buttonPrincipal.css('fontSize', '0.7rem');

	    t1.removeClass('minhaCol').addClass('minhaCol_tipo_mobile');//adapta duas primeira linhas
	    t2.removeClass('minhaCol').addClass('minhaCol_tipo_mobile');
//altera 2 últimas linhas
	    mob.removeClass('minhaCol').addClass('minhaCol_tipo_mobile');

	    tipos3.removeClass('float-right');
	}
	if(tela.width() >= 540 && tela.width() < 768){
		adicionais.css('top','100px');
	    h1Principal.removeClass('fontVERYBIGrem fontMEDIUMBIGrem').addClass('fontBIGrem');
		adicionaisH2.removeClass('fontBIGrem fontMEDIUMBIGrem').addClass('fontMEDIUMrem');
	    buttonPrincipal.css('fontSize', '0.7rem');
//altera primeiras duas linhas
	    t1.removeClass('minhaCol').addClass('minhaCol_tipo_mobile');//adapta duas primeira linhas
	    t2.removeClass('minhaCol').addClass('minhaCol_tipo_mobile');

	    mob.removeClass('minhaCol_tipo_mobile').addClass('minhaCol');
	}
	if(tela.width() >= 768 && tela.width() < 1300){
		adicionais.css('top','175px');
	    h1Principal.removeClass('fontBIGrem fontVERYBIGrem').addClass('fontMEDIUMBIGrem');
		adicionaisH2.removeClass('fontMEDIUMrem fontMEDIUMBIGrem').addClass('fontBIGrem');
	    buttonPrincipal.css('fontSize', '0.9rem');

	    t1.removeClass('minhaCol_tipo_mobile').addClass('minhaCol');
	    t2.removeClass('minhaCol_tipo_mobile').addClass('minhaCol');

	    mob.removeClass('minhaCol_tipo_mobile').addClass('minhaCol');
	}
	if(tela.width() >= 1300){
		adicionais.css('top','250px');
	    h1Principal.removeClass('fontBIGrem fontMEDIUMBIGrem').addClass('fontVERYBIGrem');
		adicionaisH2.removeClass('fontMEDIUMrem fontBIGrem').addClass('fontMEDIUMBIGrem');
	    buttonPrincipal.css('fontSize', '1.1rem');

	    t1.removeClass('minhaCol_tipo_mobile').addClass('minhaCol');
	    t2.removeClass('minhaCol_tipo_mobile').addClass('minhaCol');

	    mob.removeClass('minhaCol_tipo_mobile').addClass('minhaCol');	
	}

	tela.on('resize', function(){
		let tela = $(window);
		let card = $('.card1');
		let card1 = $('.tipos:nth-child(1) .card1>div');
		let topicos = $('.topicos');
		let descricao = $('.descricao');
		let descricao_titulo = $('.ajusta-titulo-curso');
		let card3 = $('.tipos:nth-child(3) .card1>div');
		let adicionais = $('#adicionais');
		let adicionaisH1 = $('#adicionais>div>h1');
		let adicionaisH2 = $('#adicionais>div>h2');
		let adicionaisButtom = $('#adicionais>div>button');
		let ajusteImgLivros = $('img.rounded');
		let h1Principal = $('#adicionais h1');
		let buttonPrincipal = $('#adicionais button');

		let t1 = $('#tipo1');
		let t2 = $('#tipo2');

		let mob = $('.mobile2');
		// let mob1 = $('.mobile:nth-child(1)');
		// let mob2 = $('.mobile:nth-child(2)');
		// let mob3 = $('.mobile:nth-child(3)');
		// let mob4 = $('.mobile:nth-child(4)');
		let mob1 = $('#mobile1');
		let mob2 = $('#mobile2');
		let mob3 = $('#mobile3');
		let mob4 = $('#mobile4');
		let tipos3 = $('div.tipos:nth-child(3) .mobile2');

		if(tela.width() < 540){
			adicionais.css('top','100px');
		    h1Principal.removeClass('fontVERYBIGrem fontMEDIUMBIGrem').addClass('fontBIGrem');
			adicionaisH2.removeClass('fontBIGrem fontMEDIUMBIGrem').addClass('fontMEDIUMrem');
		    buttonPrincipal.css('fontSize', '0.7rem');

		    t1.removeClass('minhaCol').addClass('minhaCol_tipo_mobile');//adapta duas primeira linhas
		    t2.removeClass('minhaCol').addClass('minhaCol_tipo_mobile');

		    mob.removeClass('minhaCol').addClass('minhaCol_tipo_mobile');
		    tipos3.removeClass('float-left');
		}
		if(tela.width() >= 540 && tela.width() < 768){
			adicionais.css('top','100px');
		    h1Principal.removeClass('fontVERYBIGrem fontMEDIUMBIGrem').addClass('fontBIGrem');
			adicionaisH2.removeClass('fontBIGrem fontMEDIUMBIGrem').addClass('fontMEDIUMrem');
		    buttonPrincipal.css('fontSize', '0.7rem');

		    t1.removeClass('minhaCol').addClass('minhaCol_tipo_mobile');//adapta duas primeira linhas
		    t2.removeClass('minhaCol').addClass('minhaCol_tipo_mobile');

		    mob.removeClass('minhaCol_tipo_mobile').addClass('minhaCol');
		}
		if(tela.width() >= 768 && tela.width() < 1300){
			adicionais.css('top','175px');
		    h1Principal.removeClass('fontBIGrem fontVERYBIGrem').addClass('fontMEDIUMBIGrem');
			adicionaisH2.removeClass('fontMEDIUMrem fontMEDIUMBIGrem').addClass('fontBIGrem');
		    buttonPrincipal.css('fontSize', '0.9rem');

		    t1.removeClass('minhaCol_tipo_mobile').addClass('minhaCol');
		    t2.removeClass('minhaCol_tipo_mobile').addClass('minhaCol');

		    mob.removeClass('minhaCol_tipo_mobile').addClass('minhaCol');
		}
		if(tela.width() >= 1300){
			adicionais.css('top','250px');
		    h1Principal.removeClass('fontBIGrem fontMEDIUMBIGrem').addClass('fontVERYBIGrem');
			adicionaisH2.removeClass('fontMEDIUMrem fontBIGrem').addClass('fontMEDIUMBIGrem');
		    buttonPrincipal.css('fontSize', '1.1rem');

		    t1.removeClass('minhaCol_tipo_mobile').addClass('minhaCol');
		    t2.removeClass('minhaCol_tipo_mobile').addClass('minhaCol');

		    mob.removeClass('minhaCol_tipo_mobile').addClass('minhaCol');	
		}
	});
});