$("#btn").click(function(e) {
	e.preventDefault();
	var settings = {
		async: true,
		dataType: "json",
		crossDomain: true,
		url:
			"https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1",
		method: "GET",
		headers: {
			"x-mashape-key": "McsOOBniFbmshJ7aZPZfF6JVmihep1FpEdrjsnSYSvvf9N6Vtt",
			"cache-control": "no-cache",
			"postman-token": "e2984a0e-7024-3a03-aa7f-7533c6df6087"
		},
		success: function(data, s, res) {
			$("#quote").text(data[0].quote);
			$("#author").text(data[0].author);
		},
		error: function(error) {
			$("#quote").text("No connection");
		}
	};

	$.ajax(settings);
});

$("#twit").hover(function(e) {
	e.preventDefault();
	$(this).attr(
		"href",
		"https://twitter.com/intent/tweet?text=" +
			encodeURIComponent($("#quote").text()) +
			" - " +
			encodeURIComponent($("#author").text())
	);
});
