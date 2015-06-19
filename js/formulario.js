var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();


function mostrarFormulario(){
	$form.slideToggle();
	return false;
}

function agregarPost()
{
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

	$clone.fadeIn();

	return false;
}

// Eventos
$button.click( mostrarFormulario );
$form.on('submit',agregarPost);