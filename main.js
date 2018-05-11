let texto = "hola bitch";

$("btn").click(function (e) { 
  e.preventDefault();
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1",
    "method": "GET",
    "headers": {
      "x-mashape-key": "McsOOBniFbmshJ7aZPZfF6JVmihep1FpEdrjsnSYSvvf9N6Vtt",
      "cache-control": "no-cache",
      "postman-token": "e2984a0e-7024-3a03-aa7f-7533c6df6087"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    $("#quote").text(JSON.parse(response));
    console.log("done");
  });
  
});


$("#twit").click(function (e) { 
  e.preventDefault();
  $(this).attr("href", "https://twitter.com/intent/tweet?text="+encodeURIComponent(texto));
});

