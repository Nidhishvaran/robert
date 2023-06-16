

var h = 0;
var i;
function enterKeyPressed(event) {
    if (event.keyCode == 13) {
       event.preventDefault()
       let btn = document.getElementById("submit_btn").click()
       return true;
    } else {
       return false;
    }
 }
function add(value_){
    if (value_ === ""){

    }
    else{
        var tag = document.createElement("p")
        var text = document.createTextNode("You : "  +"  "+value_)
        tag.appendChild(text)
        var chat = document.getElementById("chat")
        chat.appendChild(tag)
        let input = document.getElementById("input")
        input.value = ""
    }
   // 
    //chat.innerHTML = "You : "+value_
}
function ask(){
    input = document.getElementById("input").value
    add(input)
    reply(input.toLowerCase())
    
}
function nearby(place){
    //https://www.google.com/maps/search/Restaurants/
    return window.open("https://www.google.com/maps/search/"+place+"/")
}

function wikipedia(search){
  //return window.open("https://en.wikipedia.org/wiki/"+search
  document.getElementById("display").style.animation = "display 2s 1"
  document.getElementById("display").src = "https://en.wikipedia.org/wiki/"+search
    
}

function open_url(url){
    return window.open(url)
}
function back(){
    window.open("index.html", "_self")
}

function open_guide(){
    window.open("guide.html", "_self")
}
function react(inp){
    h+=1
    var tag = document.createElement("p")
    var text = document.createTextNode("Robert : "+inp)
    tag.appendChild(text)
    var chat = document.getElementById("chat")
    chat.appendChild(tag)
}
function search(searchQuery){
    //window.open("http://google.com/search?q="+searchQuery)
   return  window.open("http://google.com/search?q="+searchQuery)
   /*let display_anim = document.getElementById("display")
   display_anim.style.animation = "max"
   display_anim.style.animationDuration = "5s"

   document.getElementById("display").src = "https://www.bing.com/search?pglt=2083&q="+searchQuery+"&cvid=1d59ed3f913b4ec8abfce4a668eae26e&aqs=edge..69i57j0l6.2873j0j1&FORM=ANNTA1&PC=U531"
*/
    
}



function clear(){
        
    var chat = document.getElementById("chat")
    chat.innerHTML = ""
    let display_ = document.getElementById("display")
    display_.src = ""
}
function mail(){
    return window.open("https://mail.yahoo.com/")
    //document.getElementById("display").src = "https://mail.yahoo.com/"
}

function place(place_){
    
    
    return  window.open("https://www.google.com/maps/place/"+place_+"/51.0032693,63.921053,3z?entry=ttu")
   //document.getElementById("display").src = "https://www.google.com/maps/place/"+place_+"/51.0032693,63.921053,3z?entry=ttu"//+searchQuery+"&cvid=1d59ed3f913b4ec8abfce4a668eae26e&aqs=edge..69i57j0l6.2873j0j1&FORM=ANNTA1&PC=U531"
}
function play(link){
    var link_ = "https://www.youtube.com/results?search_query="+link 
    return window.open(link_)
    //document.getElementById("display").src =" https://www.youtube.com/results?search_query="+link 

}
function reply(query){
    
    if (query === ""){
        
    }
    else{
        h+=1
    
        if (query.includes("hi ")){
            query = query.replace("!","")
            query = query.replace("hi","")
            if (query !=="robert"){//&&query!==""){
                react("My name is ROBERT, I am not "+query)
            }
            react("hi")
            i = 1
        }
        if (query.includes("mail")){
            i = 1
            mail()
            react("opening mail")
        }
        if(query === "who is you"){
            i = 1
            react("I am ,Robert..")
            react("who is you?")
            
        }

        if (query.includes("i am")){
            i = 1
            query = query.replace("i am","")
            query = query.toUpperCase()
            react("Nice to meet you "+query)
        }
        if (query.includes("my name")){
            i = 1
            query = query.replace("my name is ","")
            query = query.toUpperCase()
            react("Nice to meet you "+query)
        }
        if (query==="hi"){
            react("hi")
            i = 1
        }
        if (query.includes(" hi")){
            react("hi")
            i = 1
        }
        
        if (query.includes("open url")){
            i = 1;
            query = query.replace("open url","")
            open_url(query)

        }
        if (query.includes("http://")){
            i = 1;
            //query = query.replace("open url","")
            open_url(query)

        }
        if (query.includes("https://")){
            i = 1;
            //query = query.replace("open url","")
            open_url(query)

        }
        if (query.includes("check weather")||query.includes("check the weather")||query.includes("weather of","")){
            i = 1
            query = query.replace(" in ","")
            query = query.replace("check ","")

            query = query.replace("weather","")
            query = query.replace(" of ","")
            query = query.replace(" is ","")
            query = query.replace("the","")
            query = query.replace("?","")
            search("weather of "+query)
            react("checking the  weather of "+query.toUpperCase())
        }
        if (query.includes("hello")){
            
            query = query.replace("hello","")
            query = query.replace("!","")
            if (query !=="robert"&&query!==""){
                react("My name is ROBERT, I am not "+query)
            }
            


            react("hello")
            i = 1
        }
        
        if (query==="clear"||h>=12){
            clear()
            h=0
            i = 1
            
        }
        if(query === "what is your hobby" || query === "what is your hobby ?"){
            i = 1
            react("My Hobby is Chatting and I was often buikd to chat with others")
        }
        if(query.includes("what is")||query.includes("who is ")){
            query = query.replace("what is","")
            query = query.replace("who is","")
            query = query.replace("?","")
            i = 1
            wikipedia(query)
            react("searching about "+query )
           // react(String(wikipedia(query)))
           // console.log(wikipedia(query))//api= https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles
        }
        if (query.includes("search")){
            query = query.replace("search","")
            query = query.replace("?","")
            react("searching... "+query +" ...")
            
            search(query)
            
            i = 1
        }
        if(query.includes("play")||query.includes("search youtube")){
            i = 1
            query = query.replace("play","")
            if(query.includes("movie")){

            }
            else{
            react("playing... "+query)
            play(query)
            }

        }
        if(query.includes("nearby")){
            i = 1
            query = query.replace("for","")
            query = query.replace("was","")
            query = query.replace("is","")
            query = query.replace("the","")
            query = query.replace("nearby","")
            query = query.replace("search","")
            query = query.replace("find","")
            query = query.replace("found","")
            query = query.replace("look for","")
            query = query.replace("search for","")
            query = query.replace("?","")
            nearby(query)
        }
        
        if (query.includes("where is"))
        {
            i = 1
            
            
            query = query.replace("where is","")
           
      
            //query.replace("is","")
            query = query.replace("?","")
            place(query)
        }
        if(query.includes("open")){
            i = 1
            query = query.replace("open ","")
            if(query.toLowerCase() === "whatsapp"){
                window.open("https://web."+query+".com/")
                react("opening whatsapp...")
            }
            else{
            window.open("https://"+query+".com/")
            react("opening "+query+"...")
            }
        }
        if(i!==1){
            react("sorry!")
        }
        i = 0
        
        
}
}