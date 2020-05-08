let html = '';

user_data.forEach(function ({ name, text, url }, index) {
    html += `
            <div>
              <a href="#" class="ig_box" data-toggle="modal" data-target="#exampleModalLong">
                <div class="ig_name">
                  <span><img src="img/ig/ig_img${index + 1}.jpg"/></span>${name}
                </div>
                <img src="img/ig/ig_img${index + 1}.jpg" alt="" class="ig_img" />
                <p class="ig_text">
                  ${text}
                </p>
                <div class="btn_more">完整心得</div>
                <div class="icon_heart"></div>
                <div class="btn_more_love"></div>
                <div class="btn_more_line"></div>
              </a>
            </div>
    `
});

document.querySelector('.ig_slider').innerHTML = html;

$(".ig_slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: true,
                dots: true,
                arrows: true,
            }
        },
    ]
});

//ig modal 當按下“立即購買”按鈕
$(".igbuy_btn").click(function () { 
    $("#exampleModalLong").attr("style", "display:none").removeClass("show").removeAttr("aria-modal").attr("aria-hidden", "true");
    $("body").removeClass("modal-open");
    $(".modal-backdrop").remove();
});

    

$('.modal_name').html("33l33l")
$('.modal_text').html("有特殊立體弧線防止胸部下垂外擴腋下也有加高設計可以遮蔽副乳～重點是完全不會有不舒服的壓肩感也不會空杯跑位")

$(".ig_box").click(function (e) { 
    var modal_image='';
    var modal_name='';
    var modal_text='';
    modal_image=$(this).find('img').attr("src");
    modal_name=$(this).find('.ig_name').text();
    modal_text=$(this).find('.ig_text').text();
    $('.modal_image').html(`<img src="${modal_image}" class="img-fluid " alt="">`);
    $('.modal_name').html(modal_name);
    $('.modal_text').html(modal_text);
});