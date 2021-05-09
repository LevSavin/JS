 "use strict";

function addTask(){

	const title = $(".title").val();
			
	const description = $(".description").val();

	if (title.length !== 0 && description.length !== 0) {
		$(".left").append(`
			<li class="task">
				<article>
					<header class="title-buttons">
						<h3>${title}</h3>

					 	<button class="delete" aria-label="Удалить дело"></button>
					 	
					 	<button class="arrow" aria-label="Свернуть дело"></button>
					</header>

					<p class="description-text">${description}</p>
				</article>
			</li>`);

		$(".empty").hide();

		$(".title").val('');
		$(".description").val('');
	}
}
			
	$(".form .button").on('click', addTask);

        
   






	$(".left").on('click', '.delete', function(){
		const task = $(this).parents('.task');
			task.remove();

		const fewTask = $(".task");
			if (fewTask.length == 0){
				$(".empty").show();
			}
		});

		$(".left").on('click', '.arrow', function(){
			$(this).parents(".task").find(".description-text").slideToggle();
		});