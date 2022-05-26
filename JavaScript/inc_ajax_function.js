function ajax_submit_form(formID,UrlPath,location) {

    console.log(formID+UrlPath+location);
    var fd = new FormData(document.getElementById(formID));
    fd.append("label", formID);
    $.ajax({
            url: UrlPath,
            type: "POST",
            data: fd,
            processData: false,  // tell jQuery not to process the data
            contentType: false   // tell jQuery not to set contentType
            }).done(function( data ) {
            console.log( data );
              alert(data);
            $('#'+formID)[0].reset();
            if(location !=""){
              //console.log( data );
               window.location =location;
            }  
      });
      return false;
  }
  
  function subscription_form_submit(formID,UrlPath,location) {
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    var email = $('#Email').val();
    if(!pattern.test(email)){
              alert('Please enter correct email address');
                return false;
            }
            else{
              console.log(formID+UrlPath+location);
              var fd = new FormData(document.getElementById(formID));
              fd.append("label", formID);
              $.ajax({
                      url: UrlPath,
                      type: "POST",
                      data: fd,
                      processData: false,  // tell jQuery not to process the data
                      contentType: false   // tell jQuery not to set contentType
                      }).done(function( data ) {
                      console.log( data );
                      alert(data);
                      $('#'+formID)[0].reset();
                      if(location !=""){
                        //console.log( data );
                         window.location =location;
                      } 
                });
      return false;
            }
  }
  
   function resetPasswordLink(emailid,UrlPath)
  {
  
                $.post(UrlPath,
                {
                   email: emailid
                },
               function(data){
                   alert(data);
               });
  }
  