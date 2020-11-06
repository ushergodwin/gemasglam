 $(document).ready( () => {
  //initialize tooltips
  $('[data-toggle = "tooltip"]').tooltip();
//fetch data
var ajax =   setInterval( () => {
  
     $.ajax({
      url: "get",
      type: "GET",
      data: {no_order: 'orders'},
      success: (orderData) => {
        $("#no_of_orders").html(orderData);
      }
     });
     $.ajax({
      url: "get",
      type: "GET",
      data: {cancelled_order: 'orders'},
      success: (orderData) => {
        $("#cancelled_orders").html(orderData);
      }
     });
     $.ajax({
      url: "get",
      type: "GET",
      data: {delivered_order: 'orders'},
      success: (orderData) => {
        $("#delivered_orders").html(orderData);
      }
     });
     $.ajax({
      url: "get",
      type: "GET",
      data: {current_order: 'orders'},
      success: (orderData) => {
        $("#current_orders").html(orderData);
      }
     });
      var d = new Date();
   var h = d.getHours();
   if(h === 20 || h=== 21 || h=== 22 || h === 23 || h === 0 || h === 1 || h === 2 || h === 3 || h === 4 || h === 5 || h === 6){
    clearInterval(ajax);
   }

    }, 60 * 1000)
//get online users names
 var online = setInterval( () => {
      $.ajax({
        url: "get",
        type: "GET",
        data: {online: 'all'},
        success: (data) => {
          $("#online-list").html(data);
        }
      });

    var d = new Date();
   var h = d.getHours();
   if(h === 20 || h=== 21 || h=== 22 || h === 23 || h === 0 || h === 1 || h === 2 || h === 3 || h === 4 || h === 5 || h === 6){
    clearInterval(online);
   }
    }, 30 * 1000);
          $("#profileForm").on("submit", (e) =>{
          e.preventDefault();
          function uploadError() {
             let errorValue = $(".feedBack").text();
              let key = errorValue.search("Failed");
              if(key !== -1) {
                  $(".progress-bar").removeClass("bg-success");
                  $(".progress-bar").addClass("bg-warning");
                  $(".perc").text("0% Upload Failed");
              }else {
                  $(".progress-bar").addClass("bg-success");
                  $(".progress-bar").removeClass("bg-warning");
              }
          }
          let formData = new FormData($("#profileForm")[0])
        $.ajax({
           xhr: function() {
               var xhr = new window.XMLHttpRequest();
               xhr.upload.addEventListener("progress", function(evt) {
                   if (evt.lengthComputable) {
                       var percentComplete = Math.round( (evt.loaded * 100) / evt.total );
                       $(".progress").show();
                       $(".progress-bar").css({"width": percentComplete+'%'});
                       $(".perc").text(percentComplete+'% Complete');
                   }
               }, false);
               return xhr;
           },
            url: 'upload.php',
            type: 'post',
            data: formData,
            contentType: false,
            processData: false,
            beforSend: () => {
                $(".beforeUpload").show();
            },
            success: (response) => {
               $(".feedBack").html(response);
                uploadError();
            },
            complete: (xhr, statusText) => {
                $(".beforeUpload").hide();
            }
        });
    });

  //normal stuff of hide and show
  $(".hide-side-bar").on("click", () => {
    $("#mySidebar").css({"width": '0px'});
    $(".w3-main").css({"marginLeft": '0px'});
    $(".open-side-bar").show();
    $(".hide-side-bar").hide();
  });

  $(".open-side-bar").on("click", () => {
     $("#mySidebar").css({"width": '200px'});
    $(".w3-main").css({"marginLeft": '200px'});
    $(".open-side-bar").hide();
    $(".hide-side-bar").show();
  });

  $("#bottom-bar").on("click", () => {
    $("#card-next-to-nav").slideToggle(1000);
  });

  $(".open-bottom-bar").on("click", () => {
    $("#card-next-to-nav").slideToggle(1000);
  });

  $("#open-product-links").on("click", () => {
    $(".show-product-links").slideToggle(1000);
    $("#product-angle").toggleClass("fas fa-angle-down");
    $("#product-angle").toggleClass("fas fa-angle-up");
  });

   $("#open-user-links").on("click", () => {
    $(".show-user-links").slideToggle(1000);
    $("#user-angle").toggleClass("fas fa-angle-down");
    $("#user-angle").toggleClass("fas fa-angle-up");
  });

$('a.top').click( () => {
 $('html, body').animate({scrollTop: '0'}, 700);
});


  });