$(function () {
    var modal = $("#myModal");
    var btnModal = $("#myBtn");
    var btnClose = $(".close");
    btnModal.click(function (e) {
        modal.css("display", "block");
    });
    btnClose.click(function (e) {
        modal.css("display", "none");
    });
})


