$(document).on('ready', function() {
	var tela	= $(window);
	var container1	= $('.container-fluid:nth-child(1)');
	var container2	= $('.container-fluid:nth-child(2)');
	var container3	= $('.container-fluid:nth-child(3)');
	var adicionais	= $('#adicionais');
	var h1Principal = $('#adicionais h1');
	var buttonPrincipal = $('#adicionais button');
	var video	= $('#vid');
    var altImg	= video.height();
	var tipo01	= $('#tipos>img:nth-child(1)');
	var tipo02	= $('#tipos>img:nth-child(2)');
	var tipo1	= $('#tipos>.card1:nth-child(3)');
	var tipo2	= $('#tipos>.card1:nth-child(4)');
	var card1	= $('.card1');
	var imgCursos = $('#imgCursos');
	var altCard = imgCursos.height();
	var card1_h2 = $('.card1:nth-child(3)>h2');
	var card1_p = $('.card1:nth-child(3)>p');
	var card1_button = $('.card1:nth-child(3)>button');
	var card1_h2_ = $('.card1:nth-child(4)>h2');
	var card1_p_ = $('.card1:nth-child(4)>p');
	var card1_button_ = $('.card1:nth-child(4)>button');
	var complementos = $('#complementos');
	var complemento01	= $('#complementos>img:nth-child(1)');
	var complemento02	= $('#complementos>img:nth-child(2)');
	var complemento03	= $('#complementos>img:nth-child(3)');
	var complemento04	= $('#complementos>img:nth-child(4)');
	var complemento1	= $('#complementos>.card2:nth-child(5)');
	var complemento2	= $('#complementos>.card2:nth-child(6)');
	var complemento3	= $('#complementos>.card2:nth-child(7)');
	var complemento4	= $('#complementos>.card2:nth-child(8)');
	var imgComplementos = $('#imgComplementos');
	var altImgCardComp = imgComplementos.height();
	var proporcao_altura_mobile = (40/100);
	var proporcao_altura = (50/100);
	if(tela.width() < 950){
			container1.css('height', altImg);
		    adicionais.css('top', altImg*proporcao_altura_mobile);
			container2.css('top', altImg + 20);
		    h1Principal.removeClass('fontVERYBIGrem').addClass('fontMEDIUMBIGrem');
		    buttonPrincipal.css('fontSize', '0.9rem');
		    tipo01.css({
		    	'top': '0',
		    	'width': '90%',
		    	'marginLeft': '5%',
		    	'marginRight': '5%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });

		    altCard = tipo01.height();

		    tipo02.css({
		    	'top': altCard+10,
		    	'width': '90%',
		    	'marginLeft': '5%',
		    	'marginRight': '5%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });

		    tipo1.css({
		    	'top': '0',
		    	'width': '90%',
		    	'marginLeft': '5%',
		    	'marginRight': '5%',
				'paddingLeft': '0',
		    	'paddingRight': '0',
		    	'height': altCard
		    });

		    tipo2.css({
		    	'top': altCard+10,
		    	'width': '90%',
		    	'marginLeft': '5%',
		    	'marginRight': '5%',
				'paddingLeft': '0',
		    	'paddingRight': '0',
		    	'height': altCard
		    });
		    tipo02.removeClass('left46').addClass('left0');
		    tipo2.removeClass('left46').addClass('left0');
		    card1_h2.removeClass('fontMEDIUMBIGrem').addClass('fontBIGrem');
		    card1_p.removeClass('fontMEDIUMrem').addClass('fontSMALLrem');
		    card1_button.removeClass('fontMEDIUMrem').addClass('fontSMALLrem');
		    card1_h2_.removeClass('fontMEDIUMBIGrem').addClass('fontBIGrem');
		    card1_p_.removeClass('fontMEDIUMrem').addClass('fontSMALLrem');
		    card1_button_.removeClass('fontMEDIUMrem').addClass('fontSMALLrem');

		    var topContainer3 = altImg+2*tipo01.height() + 30 + 30;
		    container3.css('top', topContainer3);
		    complemento01.css({
		    	'top': '0',
		    	'left': '0',
		    	'width': '49%',
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento02.css({
		    	'top': '0',
		    	'left': '51%',
		    	'width': '49%',
		    	'marginLeft': '0',
		    	'marginRight': '0',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });

		    var altImgComp = complemento01.height();
		    complemento03.css({
		    	'top': altImgComp + 10,
		    	'left': '0',
		    	'width': '49%',
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento04.css({
		    	'top': altImgComp + 10,
		    	'left': '51%',
		    	'width': '49%',
		    	'marginLeft': '0',
		    	'marginRight': '0',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento1.css({
		    	'top': '0',
		    	'left': '0',
		    	'width': '49%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento2.css({
		    	'top': '0',
		    	'left': '51%',
		    	'width': '49%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '0',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento3.css({
		    	'top': altImgComp + 10,
		    	'left': '0',
		    	'width': '49%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento4.css({
		    	'top': altImgComp + 10,
		    	'left': '51%',
		    	'width': '49%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '0',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
	}
	else if(tela.width() >= 950 && tela.width() < 1100){

		container1.css('height', altImg);
	    adicionais.css('top', altImg*proporcao_altura);
		container2.css('top', altImg*(80/100));
	    h1Principal.removeClass('fontMEDIUMBIGrem').addClass('fontVERYBIGrem');
	    buttonPrincipal.css('fontSize', '0.9rem');
	    tipo01.css({
	    	'top': '0',
	    	'width': '44%',
	    	'marginLeft': '5%',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0'
	    });
	    altCard = tipo01.height();
	    tipo02.css({
	    	'top': '0',
	    	'width': '44%',
	    	'marginLeft': '5%',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0'
	    });

	    tipo1.css({
	    	'top': '0',
	    	'width': '44%',
	    	'marginLeft': '5%',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0',
	    	'height': altCard
	    });

	    tipo2.css({
	    	'top': '0',
	    	'width': '44%',
	    	'marginLeft': '5%',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0',
	    	'height': altCard
	    });
	    tipo02.removeClass('left0').addClass('left46');
	    tipo2.removeClass('left0').addClass('left46');
	    card1_h2.removeClass('fontBIGrem').addClass('fontMEDIUMBIGrem');
	    card1_p.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
	    card1_button.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
	    card1_h2_.removeClass('fontBIGrem').addClass('fontMEDIUMBIGrem');
	    card1_p_.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
	    card1_button_.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');

	    var topContainer3 = altImg+altCard/2;
	    container3.css('top', topContainer3);
	    complemento01.css({
	    	'top': '0',
	    	'left': '0',
	    	'width': '24%',
	    	'marginLeft': '0',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0'
	    });
	    complemento02.css({
	    	'top': '0',
	    	'left': '25%',
	    	'width': '24%',
	    	'marginLeft': '0',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0'
	    });
	    complemento03.css({
	    	'top': '0',
	    	'left': '50%',
	    	'width': '24%',
	    	'marginLeft': '0',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0'
	    });
	    complemento04.css({
	    	'top': '0',
	    	'left': '75%',
	    	'width': '24%',
	    	'marginLeft': '0',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0'
	    });
	    var altImgComp = complemento01.height();
	    complemento1.css({
	    	'top': '0',
	    	'left': '0',
	    	'width': '24%',
	    	'height': altImgComp,
	    	'marginLeft': '0',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0'
	    });
	    complemento2.css({
	    	'top': '0',
	    	'left': '25%',
	    	'width': '24%',
	    	'height': altImgComp,
	    	'marginLeft': '0',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0'
	    });
	    complemento3.css({
	    	'top': '0',
	    	'left': '50%',
	    	'width': '24%',
	    	'height': altImgComp,
	    	'marginLeft': '0',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0'
	    });
	    complemento4.css({
	    	'top': '0',
	    	'left': '75%',
	    	'width': '24%',
	    	'height': altImgComp,
	    	'marginLeft': '0',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0'
	    });
	}
	else if(tela.width() >= 1100 && tela.width() < 1300){

		container1.css('height', altImg);
	    adicionais.css('top', altImg*proporcao_altura);
		container2.css('top', altImg*(75/100));
	    h1Principal.removeClass('fontMEDIUMBIGrem').addClass('fontVERYBIGrem');
	    buttonPrincipal.css('fontSize', '0.9rem');
	    tipo01.css({
	    	'top': '0',
	    	'width': '44%',
	    	'marginLeft': '5%',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0'
	    });
	    altCard = tipo01.height();
	    tipo02.css({
	    	'top': '0',
	    	'width': '44%',
	    	'marginLeft': '5%',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0'
	    });

	    tipo1.css({
	    	'top': '0',
	    	'width': '44%',
	    	'marginLeft': '5%',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0',
	    	'height': altCard
	    });

	    tipo2.css({
	    	'top': '0',
	    	'width': '44%',
	    	'marginLeft': '5%',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0',
	    	'height': altCard
	    });
	    tipo02.removeClass('left0').addClass('left46');
	    tipo2.removeClass('left0').addClass('left46');
	    card1_h2.removeClass('fontBIGrem').addClass('fontMEDIUMBIGrem');
	    card1_p.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
	    card1_button.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
	    card1_h2_.removeClass('fontBIGrem').addClass('fontMEDIUMBIGrem');
	    card1_p_.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
	    card1_button_.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
	    var topContainer3 = altImg+altCard/2;
	    container3.css('top', topContainer3);
	    complemento01.css({
	    	'top': '0',
	    	'left': '0',
	    	'width': '24%',
	    	'marginLeft': '0',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0'
	    });
	    complemento02.css({
	    	'top': '0',
	    	'left': '25%',
	    	'width': '24%',
	    	'marginLeft': '0',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0'
	    });
	    var altImgComp = complemento01.height();
	    complemento03.css({
	    	'top': '0',
	    	'left': '50%',
	    	'width': '24%',
	    	'marginLeft': '0',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0'
	    });
	    complemento04.css({
	    	'top': '0',
	    	'left': '75%',
	    	'width': '24%',
	    	'marginLeft': '0',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0'
	    });
	    complemento1.css({
	    	'top': '0',
	    	'left': '0',
	    	'width': '24%',
	    	'height': altImgComp,
	    	'marginLeft': '0',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0'
	    });
	    complemento2.css({
	    	'top': '0',
	    	'left': '25%',
	    	'width': '24%',
	    	'height': altImgComp,
	    	'marginLeft': '0',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0'
	    });
	    complemento3.css({
	    	'top': '0',
	    	'left': '50%',
	    	'width': '24%',
	    	'height': altImgComp,
	    	'marginLeft': '0',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0'
	    });
	    complemento4.css({
	    	'top': '0',
	    	'left': '75%',
	    	'width': '24%',
	    	'height': altImgComp,
	    	'marginLeft': '0',
	    	'marginRight': '1%',
			'paddingLeft': '0',
	    	'paddingRight': '0'
	    });
	}
	else{
			container1.css('height', altImg);
		    adicionais.css('top', altImg*proporcao_altura);
			container2.css('top', altImg*(80/100));
		    h1Principal.removeClass('fontMEDIUMBIGrem').addClass('fontVERYBIGrem');
		    buttonPrincipal.css('fontSize', '1.4rem');
		    tipo01.css({
		    	'top': '0',
		    	'width': '44%',
		    	'marginLeft': '5%',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });

		    altCard = tipo01.height();
		    
		    tipo02.css({
		    	'top': '0',
		    	'width': '44%',
		    	'marginLeft': '5%',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });

		    tipo1.css({
		    	'top': '0',
		    	'width': '44%',
		    	'marginLeft': '5%',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0',
		    	'height': altCard
		    });

		    tipo2.css({
		    	'top': '0',
		    	'width': '44%',
		    	'marginLeft': '5%',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0',
		    	'height': altCard
		    });
		    tipo02.removeClass('left0').addClass('left46');
		    tipo2.removeClass('left0').addClass('left46');
		    card1_h2.removeClass('fontBIGrem').addClass('fontMEDIUMBIGrem');
		    card1_p.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
		    card1_button.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
		    card1_h2_.removeClass('fontBIGrem').addClass('fontMEDIUMBIGrem');
		    card1_p_.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
		    card1_button_.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
		    setTimeout(() => {
			    var topContainer3 = altImg+altCard/2;
			    container3.css('top', topContainer3);
			    // alert('configurado');
		    },100, container3);
		    complemento01.css({
		    	'top': '0',
		    	'left': '0',
		    	'width': '24%',
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento02.css({
		    	'top': '0',
		    	'left': '25%',
		    	'width': '24%',
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    var altImgComp = complemento01.height();
		    complemento03.css({
		    	'top': '0',
		    	'left': '50%',
		    	'width': '24%',
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento04.css({
		    	'top': '0',
		    	'left': '75%',
		    	'width': '24%',
		    	'marginLeft': '0',
		    	'marginRight': '1%',
			'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento1.css({
		    	'top': '0',
		    	'left': '0',
		    	'width': '24%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '1%',
			'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento2.css({
		    	'top': '0',
		    	'left': '25%',
		    	'width': '24%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '1%',
			'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento3.css({
		    	'top': '0',
		    	'left': '50%',
		    	'width': '24%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento4.css({
		    	'top': '0',
		    	'left': '75%',
		    	'width': '24%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
	}

    $(window).on('resize', function(){
		var tela	= $(window);
		var container1	= $('.container-fluid:nth-child(1)');
		var container2	= $('.container-fluid:nth-child(2)');
		var container3	= $('.container-fluid:nth-child(3)');
		var adicionais	= $('#adicionais');
		var h1Principal = $('#adicionais h1');
		var buttonPrincipal = $('#adicionais button');
		var video	= $('#vid');
	    var altImg	= video.height();
		var tipo01	= $('#tipos>img:nth-child(1)');
		var tipo02	= $('#tipos>img:nth-child(2)');
		var tipo1	= $('#tipos>.card1:nth-child(3)');
		var tipo2	= $('#tipos>.card1:nth-child(4)');
		var card1	= $('.card1');
		var imgCursos = $('#imgCursos');
		var altCard = imgCursos.height();
		var card1_h2 = $('.card1:nth-child(3)>h2');
		var card1_p = $('.card1:nth-child(3)>p');
		var card1_button = $('.card1:nth-child(3)>button');
		var card1_h2_ = $('.card1:nth-child(4)>h2');
		var card1_p_ = $('.card1:nth-child(4)>p');
		var card1_button_ = $('.card1:nth-child(4)>button');
		var complementos = $('#complementos');
		var complemento01	= $('#complementos>img:nth-child(1)');
		var complemento02	= $('#complementos>img:nth-child(2)');
		var complemento03	= $('#complementos>img:nth-child(3)');
		var complemento04	= $('#complementos>img:nth-child(4)');
		var complemento1	= $('#complementos>.card2:nth-child(5)');
		var complemento2	= $('#complementos>.card2:nth-child(6)');
		var complemento3	= $('#complementos>.card2:nth-child(7)');
		var complemento4	= $('#complementos>.card2:nth-child(8)');
		var imgComplementos = $('#imgComplementos');
		var altImgCardComp = imgComplementos.height();
		var proporcao_altura_mobile = (40/100);
		var proporcao_altura = (50/100);

		if(tela.width() < 950){
			container1.css('height', altImg);
		    adicionais.css('top', altImg*proporcao_altura_mobile);
			container2.css('top', altImg + 20);
		    h1Principal.removeClass('fontVERYBIGrem').addClass('fontMEDIUMBIGrem');
		    buttonPrincipal.css('fontSize', '0.9rem');
		    tipo01.css({
		    	'top': '0',
		    	'width': '90%',
		    	'marginLeft': '5%',
		    	'marginRight': '5%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });

		    altCard = tipo01.height();

		    tipo02.css({
		    	'top': altCard+10,
		    	'width': '90%',
		    	'marginLeft': '5%',
		    	'marginRight': '5%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });

		    tipo1.css({
		    	'top': '0',
		    	'width': '90%',
		    	'marginLeft': '5%',
		    	'marginRight': '5%',
				'paddingLeft': '0',
		    	'paddingRight': '0',
		    	'height': altCard
		    });

		    tipo2.css({
		    	'top': altCard+10,
		    	'width': '90%',
		    	'marginLeft': '5%',
		    	'marginRight': '5%',
				'paddingLeft': '0',
		    	'paddingRight': '0',
		    	'height': altCard
		    });
		    tipo02.removeClass('left46').addClass('left0');
		    tipo2.removeClass('left46').addClass('left0');
		    card1_h2.removeClass('fontMEDIUMBIGrem').addClass('fontBIGrem');
		    card1_p.removeClass('fontMEDIUMrem').addClass('fontSMALLrem');
		    card1_button.removeClass('fontMEDIUMrem').addClass('fontSMALLrem');
		    card1_h2_.removeClass('fontMEDIUMBIGrem').addClass('fontBIGrem');
		    card1_p_.removeClass('fontMEDIUMrem').addClass('fontSMALLrem');
		    card1_button_.removeClass('fontMEDIUMrem').addClass('fontSMALLrem');

		    var topContainer3 = altImg+2*tipo01.height() + 30 + 30;
		    container3.css('top', topContainer3);
		    complemento01.css({
		    	'top': '0',
		    	'left': '0',
		    	'width': '49%',
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento02.css({
		    	'top': '0',
		    	'left': '51%',
		    	'width': '49%',
		    	'marginLeft': '0',
		    	'marginRight': '0',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });

		    var altImgComp = complemento01.height();
		    complemento03.css({
		    	'top': altImgComp + 10,
		    	'left': '0',
		    	'width': '49%',
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento04.css({
		    	'top': altImgComp + 10,
		    	'left': '51%',
		    	'width': '49%',
		    	'marginLeft': '0',
		    	'marginRight': '0',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento1.css({
		    	'top': '0',
		    	'left': '0',
		    	'width': '49%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento2.css({
		    	'top': '0',
		    	'left': '51%',
		    	'width': '49%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '0',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento3.css({
		    	'top': altImgComp + 10,
		    	'left': '0',
		    	'width': '49%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento4.css({
		    	'top': altImgComp + 10,
		    	'left': '51%',
		    	'width': '49%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '0',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		}
		else if(tela.width() >= 950 && tela.width() < 1100){
			container1.css('height', altImg);
		    adicionais.css('top', altImg*proporcao_altura);
			container2.css('top', altImg*(80/100));
		    h1Principal.removeClass('fontMEDIUMBIGrem').addClass('fontVERYBIGrem');
		    buttonPrincipal.css('fontSize', '0.9rem');
		    tipo01.css({
		    	'top': '0',
		    	'width': '44%',
		    	'marginLeft': '5%',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });

		    altCard = tipo01.height();
		    
		    tipo02.css({
		    	'top': '0',
		    	'width': '44%',
		    	'marginLeft': '5%',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });

		    tipo1.css({
		    	'top': '0',
		    	'width': '44%',
		    	'marginLeft': '5%',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0',
		    	'height': altCard
		    });

		    tipo2.css({
		    	'top': '0',
		    	'width': '44%',
		    	'marginLeft': '5%',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0',
		    	'height': altCard
		    });
		    tipo02.removeClass('left0').addClass('left46');
		    tipo2.removeClass('left0').addClass('left46');
		    card1_h2.removeClass('fontBIGrem').addClass('fontMEDIUMBIGrem');
		    card1_p.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
		    card1_button.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
		    card1_h2_.removeClass('fontBIGrem').addClass('fontMEDIUMBIGrem');
		    card1_p_.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
		    card1_button_.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
		    var topContainer3 = altImg+altCard/2;
		    container3.css('top', topContainer3);
		    complemento01.css({
		    	'top': '0',
		    	'left': '0',
		    	'width': '24%',
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento02.css({
		    	'top': '0',
		    	'left': '25%',
		    	'width': '24%',
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    var altImgComp = complemento01.height();
		    complemento03.css({
		    	'top': '0',
		    	'left': '50%',
		    	'width': '24%',
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento04.css({
		    	'top': '0',
		    	'left': '75%',
		    	'width': '24%',
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento1.css({
		    	'top': '0',
		    	'left': '0',
		    	'width': '24%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento2.css({
		    	'top': '0',
		    	'left': '25%',
		    	'width': '24%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento3.css({
		    	'top': '0',
		    	'left': '50%',
		    	'width': '24%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento4.css({
		    	'top': '0',
		    	'left': '75%',
		    	'width': '24%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		}
		else if(tela.width() >= 1100 && tela.width() < 1300){
			container1.css('height', altImg);
		    adicionais.css('top', altImg*proporcao_altura_mobile);
			container2.css('top', altImg*(75/100));
		    h1Principal.removeClass('fontMEDIUMBIGrem').addClass('fontVERYBIGrem');
		    buttonPrincipal.css('fontSize', '0.9rem');
		    tipo01.css({
		    	'top': '0',
		    	'width': '44%',
		    	'marginLeft': '5%',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });

		    altCard = tipo01.height();
		    
		    tipo02.css({
		    	'top': '0',
		    	'width': '44%',
		    	'marginLeft': '5%',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });

		    tipo1.css({
		    	'top': '0',
		    	'width': '44%',
		    	'marginLeft': '5%',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0',
		    	'height': altCard
		    });

		    tipo2.css({
		    	'top': '0',
		    	'width': '44%',
		    	'marginLeft': '5%',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0',
		    	'height': altCard
		    });

		    tipo02.removeClass('left0').addClass('left46');
		    tipo2.removeClass('left0').addClass('left46');
		    card1_h2.removeClass('fontBIGrem').addClass('fontMEDIUMBIGrem');
		    card1_p.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
		    card1_button.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
		    card1_h2_.removeClass('fontBIGrem').addClass('fontMEDIUMBIGrem');
		    card1_p_.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
		    card1_button_.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
		    var topContainer3 = altImg+altCard/2;
		    container3.css('top', topContainer3);
		    complemento01.css({
		    	'top': '0',
		    	'left': '0',
		    	'width': '24%',
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento02.css({
		    	'top': '0',
		    	'left': '25%',
		    	'width': '24%',
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    var altImgComp = complemento01.height();
		    complemento03.css({
		    	'top': '0',
		    	'left': '50%',
		    	'width': '24%',
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento04.css({
		    	'top': '0',
		    	'left': '75%',
		    	'width': '24%',
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento1.css({
		    	'top': '0',
		    	'left': '0',
		    	'width': '24%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento2.css({
		    	'top': '0',
		    	'left': '25%',
		    	'width': '24%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento3.css({
		    	'top': '0',
		    	'left': '50%',
		    	'width': '24%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento4.css({
		    	'top': '0',
		    	'left': '75%',
		    	'width': '24%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		}
		else{
			container1.css('height', altImg);
		    adicionais.css('top', altImg*proporcao_altura);
			container2.css('top', altImg*(80/100));
		    h1Principal.removeClass('fontMEDIUMBIGrem').addClass('fontVERYBIGrem');
		    buttonPrincipal.css('fontSize', '1.4rem');
		    tipo01.css({
		    	'top': '0',
		    	'width': '44%',
		    	'marginLeft': '5%',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });

		    altCard = tipo01.height();
		    
		    tipo02.css({
		    	'top': '0',
		    	'width': '44%',
		    	'marginLeft': '5%',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });

		    tipo1.css({
		    	'top': '0',
		    	'width': '44%',
		    	'marginLeft': '5%',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0',
		    	'height': altCard
		    });

		    tipo2.css({
		    	'top': '0',
		    	'width': '44%',
		    	'marginLeft': '5%',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0',
		    	'height': altCard
		    });
		    tipo02.removeClass('left0').addClass('left46');
		    tipo2.removeClass('left0').addClass('left46');
		    card1_h2.removeClass('fontBIGrem').addClass('fontMEDIUMBIGrem');
		    card1_p.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
		    card1_button.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
		    card1_h2_.removeClass('fontBIGrem').addClass('fontMEDIUMBIGrem');
		    card1_p_.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
		    card1_button_.removeClass('fontSMALLrem').addClass('fontMEDIUMrem');
		    var topContainer3 = altImg+altCard/2;
		    container3.css('top', topContainer3);
		    complemento01.css({
		    	'top': '0',
		    	'left': '0',
		    	'width': '24%',
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento02.css({
		    	'top': '0',
		    	'left': '25%',
		    	'width': '24%',
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    var altImgComp = complemento01.height();
		    complemento03.css({
		    	'top': '0',
		    	'left': '50%',
		    	'width': '24%',
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento04.css({
		    	'top': '0',
		    	'left': '75%',
		    	'width': '24%',
		    	'marginLeft': '0',
		    	'marginRight': '1%',
			'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento1.css({
		    	'top': '0',
		    	'left': '0',
		    	'width': '24%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '1%',
			'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento2.css({
		    	'top': '0',
		    	'left': '25%',
		    	'width': '24%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '1%',
			'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento3.css({
		    	'top': '0',
		    	'left': '50%',
		    	'width': '24%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		    complemento4.css({
		    	'top': '0',
		    	'left': '75%',
		    	'width': '24%',
		    	'height': altImgComp,
		    	'marginLeft': '0',
		    	'marginRight': '1%',
				'paddingLeft': '0',
		    	'paddingRight': '0'
		    });
		}
    });
});