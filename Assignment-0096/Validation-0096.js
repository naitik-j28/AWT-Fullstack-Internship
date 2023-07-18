var $FullNameRegEx = /^([a-zA-Z ]{2,40})$/;

var $EmailIdRegEx = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,8}\b$/i;

$(document).ready(function(){

    $("#name").blur(function(){
        $("#namevalidation").empty();
        if($(this).val()=="" || $(this).val()==null){
            $("#namevalidation").html("(*) Name required..!!");
        }
        else{
            if(!$(this).val().match($FullNameRegEx)){
                $("#namevalidation").html("(*) Invalid name..!!");
            }
        }
    });

    $("#name").keypress(function(e){
        $("#namevalidation").empty();
        var Flag=((e.which>=65 && e.which<=90) || (e.which>=97 && e.which<=121) );
        if(Flag==false){
            $("#namevalidation").html("Invalid Input..!!");
        }
        return Flag;
    });

    $("#email").blur(function(){
        $("#emailvalidation").empty();
        if($(this).val()=="" || $(this).val()==null){
            $("#emailvalidation").html("(*) Email id required..!!");
        }
        else{
            if(!$(this).val().match($EmailIdRegEx)){
                $("#emailvalidation").html("(*) Invalid email id..!!");
            }
        }
    });
    
    $("#textarea").blur(function(){
        $("#textareavalidation").empty();
        if($(this).val()=="" || $(this).val()==null){
            $("#textareavalidation").html("(*) Feedback required..!!");
        }
        else{
            if($("#textarea").val().length>400){
                $("#textareavalidation").html("(*) Invalid Feedback message..!!");
            }
        }
    });

    var nameFlag=false,emailIdFlag=false,textareaFlag=false;

    $("#BtnSubmit").click(function(){
        $("#namevalidation").empty();
        if($("#name").val()=="" || $("#name").val()==null){
            $("#namevalidation").html("(*) Name required..!!");
            nameFlag=false;
        }
        else{
            if(!$("#name").val().match($FullNameRegEx)){
                $("#namevalidation").html("(*) Invalid name..!!");
                nameFlag=false;
            }
            else{
                nameFlag=true;
            }
        }
        $("#emailvalidation").empty();
        if($("#email").val()=="" || $("#email").val()==null){
            $("#emailvalidation").html("(*) Email id required..!!");
            emailIdFlag=false;
        }
        else{
            if(!$("#email").val().match($EmailIdRegEx)){
                $("#emailvalidation").html("(*) Invalid email id..!!");
                emailIdFlag=false;
            }
            else{
                emailIdFlag=true;
            }
        }
        $("#textareavalidation").empty();
        if($("#textarea").val()=="" || $("#textarea").val()==null){
            $("#textareavalidation").html("(*) Feedback message required..!!");
            textareaFlag=false;
        }
        else{
            if($("#textarea").val().length>400){
                $("#textareavalidation").html("(*) Invalid Feedback message..!!");
                textareaFlag=false;
            }
            else{
                textareaFlag=true;
            }
        }
        if(nameFlag==true && emailIdFlag==true && textareaFlag==true){
            $("input,textarea").val("");
            alert("Form submitted successfully.....");
            
        }
        else{
            alert("Invalid Input..!!");
        }
    });

});