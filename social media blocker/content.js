const generateHtml = (pagename) =>{
    return `<head>
    <style>
    *{
        transition: all 0.6s;
        }
       
        html {
        height: 100%;
        }
       
        body{
        font-family: 'Lato', sans-serif;
        color: #888;
        margin: 0;
        }
       
        #main{
        display: table;
        width: 100%;
        height: 100vh;
        text-align: center;
        }
       
        .fof{
          display: table-cell;
          vertical-align: middle;
        }
       
        .fof h1{
          font-size: 50px;
          display: inline-block;
          padding-right: 12px;
          animation: type .5s alternate infinite;
        }
       
        @keyframes type{
          from{box-shadow: inset -3px 0px 0px #888;}
          to{box-shadow: inset -3px 0px 0px transparent;}
        }
        </style>
       
<body>
    <div id="main">
        <div class="fof">
                <h1>Error 404</h1> <br> <br>
                <span> Go study , leave ${pagename}</span>
        </div>
</div>`
;
}


switch(window.location.hostname){
    case "www.youtube.com":
        document.body.innerHTML = generateHtml("Youtube")
    break;

    case "www.facebook.com":
        document.body.innerHTML = generateHtml("Facebook")
    break;

    case "www.discord.com":
        document.body.innerHTML = generateHtml("Discord")
    break;

    case "www.reddit.com":
        document.body.innerHTML = generateHtml("Reddit")
    break;

    case "www.netflix.com":
        document.body.innerHTML = generateHtml("netflix")
    break;
}