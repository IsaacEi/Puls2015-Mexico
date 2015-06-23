var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	//$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();

if(localStorage.getItem('autoSave'))
{
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}

var id = setInterval(function(){
	sessionStorage.setItem('titulo',$titulo.val());
	sessionStorage.setItem('url',$url.val());
}, 1000)

function mostrarOcultarFormulario(){
	//e.preventDefault();
	$form.slideToggle();
	$list.slideToggle();
	return false;
}

function agregarPost(e)
{

	e.preventDefault();
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone(),
		fecha = new Date();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href',url);

	$clone.find('.fecha_item')
	    .text(fecha.getDate()+'/'+fecha.getMonth()+'/'+fecha.getFullYear()+' '+fecha.getHours()+':'+fecha.getMinutes())
	    .attr('href',fecha);

	$clone.hide();

	$list.prepend($clone);

	mostrarOcultarFormulario();
	$titulo.val('');
	$url.val('');
	$clone.fadeIn();
}

// Eventos
//$button.click( mostrarFormulario );
$('#publicar_nav a ').click(mostrarOcultarFormulario);
$form.on('submit',agregarPost);