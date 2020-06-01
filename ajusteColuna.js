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
	var h1Principal = $('#adicionais h1');
	var buttonPrincipal = $('#adicionais button');

	if(tela.width() < 640){
	    h1Principal.removeClass('fontVERYBIGrem fontMEDIUMBIGrem').addClass('fontBIGrem');
		adicionaisH2.removeClass('fontBIGrem fontMEDIUMBIGrem').addClass('fontMEDIUMrem');
	    buttonPrincipal.css('fontSize', '0.7rem');

	    card.removeClass('minhaColResto minhaCol2Especial').addClass('blocosMobile blocosMobileEspecial');
	    cardProficiency.removeClass('minhaColRestoProeficiency').addClass('blocosMobile blocosMobileEspecial');
		card1.removeClass('blocos').addClass('blocosMobile');
		card3.removeClass('blocos').addClass('blocosMobile');

		topicos.removeClass('blocosMobile blocosMobileFirst').addClass('blocosLivros marginLivros');
		descricao.removeClass('blocosMobile blocosMobileEspecial').addClass('blocosLivros blocosLivrosDescricao marginLivros');
		descricao_titulo.addClass('titulo-curso marginLivros');

		adicionais.css('top', '100px');

		ajusteImgLivros.removeClass('minhaCol5 minhaCol5Especial').addClass('blocosLivros marginLivros');
	}
	if(tela.width() >= 640 && tela.width() < 1300){
	    h1Principal.removeClass('fontBIGrem fontVERYBIGrem').addClass('fontMEDIUMBIGrem');
		adicionaisH2.removeClass('fontMEDIUMrem fontMEDIUMBIGrem').addClass('fontBIGrem');
	    buttonPrincipal.css('fontSize', '0.9rem');

	    card.removeClass('blocosMobile blocosMobileEspecial').addClass('minhaColResto minhaCol2Especial');
		cardProficiency.removeClass('blocosMobile blocosMobileEspecial').addClass('minhaColRestoProeficiency');
		card1.removeClass('blocos').addClass('blocosMobile');
		card3.removeClass('blocos').addClass('blocosMobile');

		topicos.removeClass('blocosLivros marginLivros').addClass('blocosMobile blocosMobileFirst');
		descricao.removeClass('blocosLivros blocosLivrosDescricao marginLivros').addClass('blocosMobile blocosMobileEspecial');
		descricao_titulo.removeClass('titulo-curso marginLivros');

		adicionais.css('top', '175px');

		ajusteImgLivros.removeClass('blocosLivros marginLivros').addClass('minhaCol5 minhaCol5Especial');
	}
	if(tela.width() >= 1300){
	    h1Principal.removeClass('fontBIGrem fontMEDIUMBIGrem').addClass('fontVERYBIGrem');
		adicionaisH2.removeClass('fontMEDIUMrem fontBIGrem').addClass('fontMEDIUMBIGrem');
	    buttonPrincipal.css('fontSize', '1.1rem');

	    card.removeClass('blocosMobile blocosMobileEspecial').addClass('minhaColResto minhaCol2Especial');
		cardProficiency.removeClass('blocosMobile blocosMobileEspecial').addClass('minhaColRestoProeficiency');
		card1.removeClass('blocosMobile').addClass('blocos');
		card3.removeClass('blocosMobile').addClass('blocos');

		topicos.removeClass('blocosLivros marginLivros').addClass('blocosMobile blocosMobileFirst');
		descricao.removeClass('blocosLivros blocosLivrosDescricao marginLivros').addClass('blocosMobile blocosMobileEspecial');
		descricao_titulo.removeClass('titulo-curso marginLivros');

		adicionais.css('top', '250px');

		ajusteImgLivros.removeClass('blocosLivros marginLivros').addClass('minhaCol5 minhaCol5Especial');
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
		var h1Principal = $('#adicionais h1');
		var buttonPrincipal = $('#adicionais button');

		if(tela.width() < 640){
		    h1Principal.removeClass('fontVERYBIGrem fontMEDIUMBIGrem').addClass('fontBIGrem');
			adicionaisH2.removeClass('fontBIGrem fontMEDIUMBIGrem').addClass('fontMEDIUMrem');
		    buttonPrincipal.css('fontSize', '0.7rem');

		    card.removeClass('minhaColResto minhaCol2Especial').addClass('blocosMobile blocosMobileEspecial');
		    cardProficiency.removeClass('minhaColRestoProeficiency').addClass('blocosMobile blocosMobileEspecial');
			card1.removeClass('blocos').addClass('blocosMobile');
			card3.removeClass('blocos').addClass('blocosMobile');

			topicos.removeClass('blocosMobile blocosMobileFirst').addClass('blocosLivros marginLivros');
			descricao.removeClass('blocosMobile blocosMobileEspecial').addClass('blocosLivros blocosLivrosDescricao marginLivros');
			descricao_titulo.addClass('titulo-curso marginLivros');

			adicionais.css('top', '100px');

			ajusteImgLivros.removeClass('minhaCol5 minhaCol5Especial').addClass('blocosLivros marginLivros');
		}
		if(tela.width() >= 640 && tela.width() < 1300){
		    h1Principal.removeClass('fontBIGrem fontVERYBIGrem').addClass('fontMEDIUMBIGrem');
			adicionaisH2.removeClass('fontMEDIUMrem fontMEDIUMBIGrem').addClass('fontBIGrem');
		    buttonPrincipal.css('fontSize', '0.9rem');

		    card.removeClass('blocosMobile blocosMobileEspecial').addClass('minhaColResto minhaCol2Especial');
			cardProficiency.removeClass('blocosMobile blocosMobileEspecial').addClass('minhaColRestoProeficiency');
			card1.removeClass('blocos').addClass('blocosMobile');
			card3.removeClass('blocos').addClass('blocosMobile');

			topicos.removeClass('blocosLivros marginLivros').addClass('blocosMobile blocosMobileFirst');
			descricao.removeClass('blocosLivros blocosLivrosDescricao marginLivros').addClass('blocosMobile blocosMobileEspecial');
			descricao_titulo.removeClass('titulo-curso marginLivros');

			adicionais.css('top', '175px');

			ajusteImgLivros.removeClass('blocosLivros marginLivros').addClass('minhaCol5 minhaCol5Especial');
		}
		if(tela.width() >= 1300){
		    h1Principal.removeClass('fontBIGrem fontMEDIUMBIGrem').addClass('fontVERYBIGrem');
			adicionaisH2.removeClass('fontMEDIUMrem fontBIGrem').addClass('fontMEDIUMBIGrem');
		    buttonPrincipal.css('fontSize', '1.1rem');

		    card.removeClass('blocosMobile blocosMobileEspecial').addClass('minhaColResto minhaCol2Especial');
			cardProficiency.removeClass('blocosMobile blocosMobileEspecial').addClass('minhaColRestoProeficiency');
			card1.removeClass('blocosMobile').addClass('blocos');
			card3.removeClass('blocosMobile').addClass('blocos');

			topicos.removeClass('blocosLivros marginLivros').addClass('blocosMobile blocosMobileFirst');
			descricao.removeClass('blocosLivros blocosLivrosDescricao marginLivros').addClass('blocosMobile blocosMobileEspecial');
			descricao_titulo.removeClass('titulo-curso marginLivros');

			adicionais.css('top', '250px');

			ajusteImgLivros.removeClass('blocosLivros marginLivros').addClass('minhaCol5 minhaCol5Especial');
		}
	});
});