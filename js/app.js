console.log('wired up!')
console.log($)
var leftSide = document.querySelector(".left-col")
var rightSide = document.querySelector(".right-col")
 console.log(leftSide)
 console.log(rightSide)

if( typeof myApiSecret === 'undefined' ){  var myApiSecret = ''  }

var forEach = function(arr, cb){
   for(var i = 0 ; i < arr.length; i+=1){
      cb(arr[i], i, arr)
   }
}

var leftColumn = function(data){
   // console.log("notSureYet")
   // console.log(data.name)

   var leftColString = '<img src="' + data.avatar_url + '"alt="">'
      leftColString += '<h1>' + data.name + '</h1>'
      leftColString += '<h2>' + data.login + '</h2>'
      leftColString += '<h2>' + data.bio + '</h2>'
      leftColString += '<button type="button" class="btn btn-default">Follow</button>'
      leftColString += '<h5> block or report user </h5>'
      leftColString += '<hr>'
      leftColString += '<h2>' + data.company + '</h2>'
      leftColString += '<h2>' + data.location + '</h2>'
      leftColString += '<h2>' + data.email + '</h2>'
      leftColString += '<h2>' + data.blog + '</h2>'
      leftColString += '<h2>' + data.created_at + '</h2>'
      leftColString += '<hr>'
      leftColString += '<h2>Organizations</h2>'
      leftColString += '<h2>TIY Icon</h2>'


   leftSide.innerHTML = leftColString
}

var rightColumn = function(data){

   var rightColString = '<div class="right-columns-Container">'
      rightColString += '<div class="right-columns-tabs">'
      rightColString += '<div class="col-md-2">' + '<h4>Overview</h4>' + '</div>'
      rightColString += '<div class="col-md-2">' + '<h4>repositories</h4>' + '</div>'
      rightColString += '<div class="col-md-2">' + '<h4>Stars</h4>' + '</div>'
      rightColString += '<div class="col-md-2">' + '<h4>Stars</h4>' + '</div>'
      rightColString += '<div class="col-md-2">' + '<h4>Stars</h4>' + '</div>'
      rightColString += '<div class="col-md-2">' + ' ' + '</div>'
      rightColString += '</div>' //container
   for(var prop in data){
      //console.log(data[prop].name)
      var repo = data[prop]
      rightColString += '<div class="col-md-6">' + repo.name + '</div>'
      rightColString += '<div class="col-md-3">' + repo.language + '</div>'
      rightColString += '<div class="col-md-3">' + repo.name + '</div>'
   }
   rightColString += '</div>'

   rightSide.innerHTML = rightColString
}



$.getJSON("https://api.github.com/users/matthiasak/repos?" +myApiSecret).then(function(dataResponse){
   rightColumn(dataResponse)
   console.log("info",[dataResponse])
})
$.getJSON("https://api.github.com/users/matthiasak?" +myApiSecret).then(function(dataResponse){
   leftColumn(dataResponse)
   //console.log("info",[dataResponse])
})
