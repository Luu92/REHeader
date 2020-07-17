var app = new Vue({
  data: function() {
    return {
      color: "black",
      background: "white",
      username: "User"
    }
  },
  methods: {
    updateCanvas() {
      var c = document.getElementById("preview");
      var ctx = c.getContext("2d");

      let x = 70;
      let y = 120;

      ctx.fillStyle = "pink";
      ctx.fillRect(0, 0, c.width, c.height);

      ctx.fillStyle = "black";
      ctx.font = "40px Arial";
      ctx.fillText("Hi 👋, I'm", x, y);

      ctx.font = "bold 70px Arial";
      ctx.fillText("Khaleel Gibran 🍩", x-3, y+70);
    }
  }
})


function updateCanvas() {
  
}

function save() {
  var canvas = document.getElementById("preview");
  var img = canvas.toDataURL("image/png");
  document.getElementById('preview-img').src = img;
}