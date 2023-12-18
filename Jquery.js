<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    
        $(document).ready(function(){
            $("#ascunde").click(function(){
                $("#cartList").slideToggle();
                if ($(this).text() == "Ascunde") {
                    $(this).text("Arata");
                } else {
                    $(this).text("Ascunde");
                }
            });
        });
