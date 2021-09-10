    // use id for all this otherwise things are not working
    
    //for sidemenu
    var menuIndex =1;
    drop(menuIndex)
    function menuclicked(m) {
        
        drop(menuIndex+=m)
    }
    function drop(m){
        if(m%2==0){
            document.getElementById("drop").style="display:block;"
        }
        else{
            document.getElementById("drop").style="display:none;"
        }
    }
    
     // <<---------------------------->>
    // //  for login modal
     function loginnow(){
        document.getElementById("loginform").style="height:100%;"
     }
     let loginmodal =document.getElementById("loginform")
     function closelogin(){
        document.getElementById("loginform").style="height:0%;"
     }
     //<----------------------------->>

    //  for navigation box , NOT WORKING IN THE EXTERNAL BUT WORKING IN THE INTERNAL
    //  var notificationClickNo = 1;
    //  notification(notificationClickNo)

    //  function openNotification(o){
    //      notification(notificationClickNo += o)
    //  }

    //  function notification(o){
    //     if(o%2==0){
    //         document.getElementById("notification").style="display:block;"
    //         console.log("hi it's working")
    //     }
    //     else{
    //         document.getElementById("notification").style="display:none;"
    //     }
    //  }
    //  <<---------------------------------------->