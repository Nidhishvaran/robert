
function map(){

    let ans = document.getElementById("answer_help")
    
    ans.innerHTML.replace("<center><h1>Google Search</h1></center><div> you need to use the keyword <span  id = 'bold'> search </span> +'about(what do you want to search)' to search the content on google</div>","")
    ans.innerHTML = "<center><h1 class='un'>Map</h1></center><div> you need to use the keyword <span  id = 'bold'> Where is  </span> +' place ' to search the location on maps</div>"
   
}
function google_search(){

    let ans = document.getElementById("answer_help")
    ans.innerHTML.replace("<center><h1>Google Search</h1></center><div> you need to use the keyword <span  id = 'bold'> search </span> +'about(what do you want to search)' to search the content on google</div>","")
    ans.innerHTML = "<center><h1 class='un'>Google Search</h1></center><div> you need to use the keyword <span  id = 'bold'> search </span> +'about(what do you want to search)' to search the content on google</div>"
}
function search(){
    let ans = document.getElementById("answer_help")
    ans.innerHTML.replace("<center><h1>Search</h1></center><div> you need to use the keyword <span  id = 'bold'> search </span> +'about(what do you want to search)' to search the content on google</div>","")
    ans.innerHTML = "<center><h1 class='un'>Search</h1></center><div> you need to use the keyword <span  id = 'bold'> search </span> +'about(what do you want to search)' to search the content on google</div>"
}


function opening_website(){
    let ans = document.getElementById("answer_help")
    ans.innerHTML.replace("<center><h1>Google Search</h1></center><div> you need to use the keyword <span  id = 'bold'> search </span> +'about(what do you want to search)' to search the content on google</div>","")
    ans.innerHTML = "<center><h1 class='un'>Opening website</h1></center><div> you need to use the keyword <span  id = 'bold'> open </span> +'name of the website you want to open'</div>"
}

function opening_youtube(){
    let ans = document.getElementById("answer_help")
    ans.innerHTML.replace("<center><h1>Google Search</h1></center><div> you need to use the keyword <span  id = 'bold'> search </span> +'about(what do you want to search)' to search the content on google</div>","")
    ans.innerHTML = "<center><h1 class='un'>Opening youtube</h1></center><div> you need to use the keyword <span  id = 'bold'> play </span> +'title of the content'</div>"
}
function wikipedia_search(){
    let ans = document.getElementById("answer_help")
    ans.innerHTML.replace("<h1></h1><div</div>","")
    ans.innerHTML = "<center><h1 class='un'>Wikipedia search</h1></center><div> you need to use the keyword <span  id = 'bold'> What is </span> +'the word or something you need to search'</div>"

}
function search_about_person(){
    let ans = document.getElementById("answer_help")
    ans.innerHTML.replace("<h1></h1><div></div>")
    ans.innerHTML = "<center><h1 class='un'>Search about person</h1></center><div> you need to use the keyword <span  id = 'bold'> Who is</span> +'name of the person you need to search'</div>"
}

function opening_url(){
    let ans = document.getElementById("answer_help")
    ans.innerHTML.replace("<h1></h1><div></div>")
    ans.innerHTML = "<center><h1 class='un'>Opening url</h1></center><div> you need to use the keyword <span  id = 'bold'>open url </span> +'url you need to open <span id = 'another_method'> or just paste and click the enter button</span> to open the url/link '</div>"
}
function answer_help(content){
    
    let select = content;
    if(select === "Map"){
        map()
    }
    if(select === "Google search"){
       google_search()
    }
    if(select === "Search"){
        search()
    }
    if (select === "Opening website"){
        opening_website()
    }
    if(select==="Opening youtube"){
        opening_youtube()
    }
    if(select === "Wikipedia search"){
        wikipedia_search()
    }
    if(select === "Search about person"){
        search_about_person()()
    }
    if(select === "Opening url"){
       opening_url()
    }
    
    


}
function help_me(){
   
  let selected =  document.getElementById("option").value
    console.log(selected);
    answer_help(selected)
    
}

