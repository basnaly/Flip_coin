
let emojiImages = [
    "emoji-smile_480.png", "emoji-sad_480.png", "emoji-angry_480.png"
]

let emojiTexts = [
    "Yes, it will !", "Maybe will, maybe won't..", "Don't be angry, it is just a game!"
]

let emojiRandom = Math.floor(Math.random() * 3); //0, 1, 2

const start = () => {
    $("#coin").attr("src", emojiImages[emojiRandom])
    .addClass("animate__animated animate__flipInY")
    .one('animationend', () => {
        $("#coin").removeClass("animate__animated animate__flipInY")
      });


    $(".emojiText").text(emojiTexts[emojiRandom])
    .addClass("animate__animated animate__flipInY");

    $(".start").css("visibility", "hidden");
    $(".reset").css("visibility", "visible");
}

const reset = () => {
    $("#coin").attr("src", "bitcoin.png")
    .addClass("animate__animated animate__flipInY")
    .one('animationend', () => {
        $("#coin").removeClass("animate__animated animate__flipInY")
      });;

    $(".emojiText").text("")
    .removeClass("animate__animated animate__flipInY");

    $(".start").css("visibility", "visible");
    $(".reset").css("visibility", "hidden");

     emojiRandom = Math.floor(Math.random() * 3);
}

