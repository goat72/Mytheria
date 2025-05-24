 // تغيير النصوص الي توجد في ال باتنز
 const button = document.getElementById("chat");

    button.addEventListener("mouseover", function() {
      button.textContent = "شات مفعم بالحيويه ناس تتكلم في مواضيع حلوه سوالف والعاب ومجتمع نقي وراقي";
    });

    button.addEventListener("mouseout", function() {
      button.textContent = "شات متفاعل ";
    });

 const button1 = document.getElementById("chat1");

    button1.addEventListener("mouseover", function() {
      button1.textContent = "فعاليات والعاب على كردت عشرات الملايين من الكردت تتوزع كل يوم وش منتضر ";
    });

    button1.addEventListener("mouseout", function() {
      button1.textContent = "فعاليات بشكل يومي";
    });

     const button2 = document.getElementById("chat2");

    button2.addEventListener("mouseover", function() {
      button2.textContent = "نحرق ملايين الكردت في روم خاصه لاتفوت الفرصه لانك رح تندم والله";
    });

    button2.addEventListener("mouseout", function() {
      button2.textContent = "حرق كردت";
    });

    
        const button3 = document.getElementById("chat3");

    button3.addEventListener("mouseover", function() {
      button3.textContent ="سيرفر ماين كرافت جاهز من كل النواحي ادخل واستمتع";
    });

    button3.addEventListener("mouseout", function() {
      button3.textContent ="سيرفر ماين كرافت جاهز واسطوري";
    });

    // تغيير الخلفيه من اسود الى ابيض الى الخلفيه العاديه 
    let black =document.getElementById("black")

                black.addEventListener("click", function(){
                document.body.style.background = "black";
        })
let white = document.getElementById("white")
        white.addEventListener("click", function(){
        document.body.style.background ="white"
        })
let myt = document.getElementById("myt")
        myt.addEventListener("click",function(){
        document.body.style.background= "url('backgroundsit.png')";
        })
