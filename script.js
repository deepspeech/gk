(function(){

  var quotes = [
    "Evangelism is selling a dream.",
    "Simple and to the point is always the best way to get your point across.",
    "If you don’t toot your own horn, don’t complain that there’s no music.",
    "Organizations are successful because of good implementation,not good business plans.",
    "The purpose of a pitch is to stimulate interest, not to close a deal.",
    "If you make meaning, you’ll probably also make money.",
    "So you hire minimum viable people, and much like improving your minimum viable product, you improve your minimum viable employee.",
    ];

  var images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
  ];

  function chooseOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  window.onload = function() {
    var randomImage = chooseOne(images);
    var randomQuote = chooseOne(quotes);

    document.getElementById('background-image').style.backgroundImage = 'url("img/'+ randomImage +'")';
    document.getElementById('quote').innerHTML = randomQuote;
    document.getElementById('author').innerHTML = "&mdash; " +  'Guy Kawasaki' + " &mdash;";

    document.getElementById('quote').className = 'move';
    document.getElementById('author').className = 'move';
  };

})();
