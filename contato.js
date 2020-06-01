$(document).on('ready', function() {
	var tela = $(window);
	var formLabel = $("form"); //pagina contato
	var formLabel2 = $("#formulario>div"); //página nossa história
	var formImg = $("#formulario>div>img");
	var input = $('input');
	if(tela.width() < 970){
		formLabel.removeClass('minhaCol2').removeClass('minhaColEspec').addClass('minhaCol');
		formLabel2.removeClass('minhaCol2').removeClass('minhaColEspec').addClass('minhaCol');
		input.css('fontSize','0.7rem');
		formImg.css('display', 'none');
	}
	else{
		formLabel.removeClass('minhaCol').addClass('minhaCol2').addClass('minhaColEspec');
		formLabel2.removeClass('minhaCol').addClass('minhaCol2').addClass('minhaColEspec');
		input.css('fontSize','1rem');
		formImg.css('display', 'block');
	}
	$(window).on('resize', function(){
		var tela = $(window);
		var formLabel = $("form");
		var formImg = $("#formulario>div>img");
		var input = $('input');
		if(tela.width() < 970){
			formLabel.removeClass('minhaCol2').removeClass('minhaColEspec').addClass('minhaCol');
			formLabel2.removeClass('minhaCol2').removeClass('minhaColEspec').addClass('minhaCol');
			input.css('fontSize','0.7rem');
			formImg.css('display', 'none');
		}
		else{
			formLabel.removeClass('minhaCol').addClass('minhaCol2').addClass('minhaColEspec');
			formLabel2.removeClass('minhaCol').addClass('minhaCol2').addClass('minhaColEspec');
			input.css('fontSize','1rem');
			formImg.css('display', 'block');
		}
	});
});