$(function () {
    console.log(window.location.href);

    var userid="loser7758";
    var url=window.location.href;
    if(url=="https://github.com/"){
        window.location.href="https://github.com/"+userid+"?tab=repositories"; 
    }else{
        if(url.indexOf("https://github.com/"+userid+"/")!=-1 && url.indexOf("/settings")!=-1){
                var name=$("strong[itemprop='name'] a").text();
                $(".form-contro,.input-block").val(name);
                
                //var h = $(document).height()-$(window).height();
                //$(document).scrollTop(h);

                //$(".Box.Box--danger button[aria-expanded='false']")
                //$(".Box.Box--danger").find("li").eq(3).children("button").click();
                $(".btn.btn-block.btn-danger").attr("disabled",false);
                $(".btn.btn-block.btn-danger").click();
        }
        var container=$("#js-flash-container").html();
        if(container.indexOf("successfully deleted")!=-1){
             window.location.href="https://github.com/"+userid+"?tab=repositories";   
        }
        if(url=="https://github.com/"+userid+"?tab=repositories"){
             var f=$('a[itemprop="name codeRepository"]')[0].href;
             window.location.href=f+"/settings";    
        }
    }
    
});


