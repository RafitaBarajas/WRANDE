$(document).ready(function(){

        function isScrolledIntoView(elem){
            if(elem.length>0){
                var docViewTop = $(window).scrollTop();
                var docViewBottom = docViewTop + $(window).height();
                var elemTop = $(elem).offset().top;
                var elemBottom = elemTop + $(elem).height();
                return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
            }
        }

        function createElements(){
            var numItemsDisplayed = $('tr.generated').length;
            $('tr.scrollCreator').addClass('delete');
                $('tr').removeClass('scrollCreator');
                $.ajax({
                    method:"post",
                    url:"php/crearProfesores.php",
                    data:"numItemsDisplayed="+numItemsDisplayed,
                    success:function(resp){
                        $("tbody").append(resp);
                        if($("#continue").attr("data-continue")=="true"){
                            $("tbody").append("<tr class=\"scrollCreator\"></tr>");
                            $(".delete").remove();
                        }
                    },
                    error:function(){
                        $("div.my_container").append("<h3 class='header'>Error en el servidor, int&eacute;ntelo m&aacute;s tarde :(</h3>");
                    }
                    
                });    
        }
        

        
        $(window).scroll(function() {    
            if(isScrolledIntoView($('.scrollCreator'))){
                createElements();
            }    
        });
    

        createElements();

});