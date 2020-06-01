$(document).on('ready', function(){
	var tela = $(window);
	var container1	= $('.container-fluid:nth-child(1)');
	var container2	= $('.container-fluid:nth-child(2)');
	var imagemPrincipal	= $('#imagem');
    var altImg	= imagemPrincipal.height();
	if(tela.width() < 768){
		container2.css({
			'top': altImg
		});
	}
	else{
		container2.css({
			'top': altImg
		});
	}
	tela.on('resize', function(){
		var tela = $(window);
		var container1	= $('.container-fluid:nth-child(1)');
		var container2	= $('.container-fluid:nth-child(2)');
		var imagem	= $('#imagem');
	    var altImg	= imagem.height();
		if(tela.width() < 768){
			container2.css({
				'top': altImg
			});
		}
		else{
			container2.css({
				'top': altImg
			});
		}
	});
});