async function  

async function iniciaTempo(){
	// console.log('recarregando');
    setTimeout(function(){
    	document.location.reload();
    	// window.location.reload(false);
    	.location.href('index2.html')
    }, 4000);
}

// window.onload = recarga();
window.addEventListener('load', iniciaTempo, false);
// setTimeout(() => {
// 	window.
// },);