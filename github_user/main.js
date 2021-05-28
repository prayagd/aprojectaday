let search = document.getElementById("search")
let avatar = document.getElementById("avatar")
let fullName = document.getElementById("name")
let userName = document.getElementById("username")
let repo = document.getElementById("repo")
let blog = document.getElementById("blog")
let twitterTag = document.getElementById("twitter")


search.addEventListener("change", function(){
    fetch(`https://api.github.com/users/${search.value}`)
        .then(res => res.json())
        .then(function(res){
            if(res.message == "Not Found"){
                alert("User Not Found")
            }
            else{
                avatar.setAttribute("src", res.avatar_url)
                fullName.textContent = `Name:- ${res.name}`
                userName.textContent = `Username:- ${res.login}`
                avatar.className = "image"
                repo.textContent = `Repo_count:- ${res.public_repos}`
                if(res.blog != ""){
                    blog.setAttribute("href", res.blog)
                    blog.textContent = res.blog
                }
                if(res.twitter_username != ""){
                    twitterTag.setAttribute("href", `https://twitter.com/${res.twitter_username}`)
                    twitterTag.textContent = "@" + res.twitter_username
                }
                console.log(res)
            }
            
        })
    search.value = ""
})