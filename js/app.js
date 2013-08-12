var like = function(el) {
    var liked = $("#main").is(":visible");

    if (liked) {
        $("#main").hide();
        $("#footer").show();
    }
};

$(document).ready(function() {
    $("#like").on('click', like);
    $("#undo").on('click', like);
});
