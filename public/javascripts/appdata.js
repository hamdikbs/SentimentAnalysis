      $(document).ready(function() {
        // handle the form submit
        $("#searchText").on('keypress', function(e) {
          if (e.which == 13 || e.keyCode == 13) {
            if ($(this).val().trim().length > 0) {
              // initiate an AJAX call to send the data
              fireAJAX($(this).val().trim());
            }
          }
        });

        function fireAJAX(text) {
          $.ajax({
            type: "POST",
            url: "/search",
            data: {
              "search": '%23'+text
            },
            success: () => console.log('get data with success'),
          });
       } 
      });