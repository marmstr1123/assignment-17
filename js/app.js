console.log('wired up!')
console.log($)
let textSearch = document.querySelector('.lookUp')
let buttonSearch = document.querySelector('.BtnlookUpTxt')
let leftSide = document.querySelector(".left-col")
let rightSide = document.querySelector(".right-col")

if( typeof myApiSecret === 'undefined' ){  var myApiSecret = ''  }

var forEach = function(arr, cb){
   for(var i = 0 ; i < arr.length; i+=1){
      cb(arr[i], i, arr)
   }
}


//hash Change
var hashChanger = function(evt){
   //console.log(evt)
   switch(evt.type){
      case "click":
         window.location.hash = textSearch.value
         break;
      case "keydown":
         if(evt.keyCode === 13){
            window.location.hash = textSearch.value
         }
         break;
      default:

   }

}

let nullHandler = function(string, nullReplacer){
   if(string === null){
      string = nullReplacer
   }
   else{
      string = string
   }
   return string
}


//populate page//

var leftColumn = function(data){
    console.log("notSureYet")
    console.log(data.login)


   var leftColString = '<img src="' + nullHandler(data.avatar_url, "not Found") + '"alt="">'
      leftColString += '<h1>' + nullHandler(data.name, "not added yet") + '</h1>'
      leftColString += '<h2>' + nullHandler(data.login, "not added yet") + '</h2>'
      leftColString += '<h2>' + nullHandler(data.bio, "not added yet") + '</h2>'
      leftColString += '<button type="button" class="btn btn-default">Follow</button>'
      leftColString += '<h5> block or report user </h5>'
      leftColString += '<hr>'
      leftColString += '<h2>' + nullHandler(data.company, "not added yet") + '</h2>'
      leftColString += '<h2>' + nullHandler(data.location, "not added yet") + '</h2>'
      leftColString += '<h2>' + nullHandler(data.email, "not added yet") + '</h2>'
      leftColString += '<h2>' + nullHandler(data.blog, "not added yet") + '</h2>'
      leftColString += '<h2>' + nullHandler(data.created_at, "not added yet") + '</h2>'
      leftColString += '<hr>'
      leftColString += '<h2>Organizations</h2>'
      leftColString += '<h2>TIY Icon</h2>'


   leftSide.innerHTML = leftColString
}

var rightColumn = function(data){

   var rightColString = '<div class="right-columns-Container ">'
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
//page build end//


//dynamic profile-n-repo
let leftColumnCreator = function(profileInput){
   $.getJSON('https://api.github.com/users/' + profileInput + '?' + myApiSecret).then(leftColumn)

}

let rightColumnCreator = function(profileInput){
   $.getJSON('https://api.github.com/users/' + profileInput + '/repos' + '?' + myApiSecret).then(rightColumn)

}

//router
var pageRouter = function(){
   var currentProfile = window.location.hash.slice(1)
   if(currentProfile.length === 0){
      leftColumnCreator('marmstr1123')
      rightColumnCreator('marmstr1123')


   }


   leftColumnCreator(currentProfile)
   rightColumnCreator(currentProfile)

}

var dataFetch = function(serverData){

   console.log(serverData.repos_url)


}



// $.getJSON("https://api.github.com/users/matthiasak/repos?" +myApiSecret).then(function(dataResponse){
//    rightColumn(dataResponse)
//    //console.log("info",[dataResponse])
// })
// $.getJSON("https://api.github.com/users/matthiasak?" +myApiSecret).then(function(dataResponse){
//    leftColumn(dataResponse)
//    //console.log("info",[dataResponse])
// })

pageRouter()
buttonSearch.addEventListener('click', hashChanger)
textSearch.addEventListener('keydown', hashChanger)
window.addEventListener('hashchange', pageRouter)
//pageRouter()
