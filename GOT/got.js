$(document).ready(function(){
	$('img').click(function(event){
		var id = this.id
		$.get(`https://anapioficeandfire.com/api/houses/${id}`, function(res){
			event.stopPropagation(); 
			var string = res.titles[0]
			for(var i = 0; i <= res.titles.length; i++){
				string += "," + res.titles[i]
			}
			var html = `<fieldset class="info">
			<legend class="head">House Details</legend>
			<h3>Name: ${res.name}</h3>
			<h4>Words: ${res.words}</h4>
			<h4>Titles: ${string}<h4>
			</fieldset>`

			$('#results').html(html);
		}, 'json');

		return false;
		
	});
	
});