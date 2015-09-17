$(function(){
	console.log("test");
	//template #1
	// var theTemplateScript = $("#allAboutMe").html(); 

	//template #2
	// var theTemplateScript = $("#expressions-template").html();

	//template #3
	// var theTemplateScript = $("#example-template").html();

	//template #4
	// Handlebars.registerHelper('capitalize', function(str){
	// 	str = str || '';
	// 	return str.slice(0,1).toUpperCase() + str.slice(1);
 //  });

	// var theTemplateScript = $("#built-in-helpers-template").html();

	//template #5
	var theTemplateScript = $("#block-expressions-template").html();

	Handlebars.registerHelper('uppercase', function(options) {
		return options.fn(this).toUpperCase();
	});

	//used in all templates
	var theTemplate = Handlebars.compile(theTemplateScript);

	//template #1
	// var me = {
	// 	"firstName": "Dave",
	// 	"lastName": "Hoverson",
	// 	"permanentCity": "Fargo",
	// 	"currentCity": "Minneapolis",
	// 	"age": "38",
	// 	"totalChildren": "2"
	// };

	//template #2
	// var context={
 //    "description": {
 //      "double": "Using {{}} brackets will result in escaped HTML:",
 //      "triple": "Using {{{}}} will leave the context as it is:"
 //    },
 //    "example": "<button>CLICK ME TO MEET YOUR MAKER</button>"
 //  };

 	//template #3
 	// var context = {
  //   family: [ 
  //     { firstName: 'Dave', lastName: 'Hoverson' },
  //     { firstName: 'Leigh', lastName: 'Vetsch' },
  //     { firstName: 'Tyler', lastName: 'Hoverson' },
  //     { firstName: 'Alyson', lastName: 'Vetsch' }
  //   ]
  // };

  //template #4
  // var context = {
  //   animals:[
  //     {
  //       name: "cow",
  //       noise: "moooo"
  //     },
  //     {
  //       name: "cat",
  //       noise: "meow"
  //     },
  //     {
  //       name: "fish",
  //       noise: ""
  //     },
  //     {
  //       name: "farmer",
  //       noise: "Get off my property!"
  //     }
  //   ]
  // };

  //template #5
  var context = {
    "code": "up up down down left right left right b a select start"
  };

  	//used in all templates
	var theCompiledHtml = theTemplate(context);

	//templates 1, 2, 4, 5
	$('.content-placeholder').html(theCompiledHtml);

	//template 3
	// $(document.body).append(theCompiledHtml);

});