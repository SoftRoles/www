let categories = [
  { id: "all", name: "All" },
  { id: "antenna", name: "Antenna" },
  { id: "propagation", name: "Propagation" },
  { id: "conversion", name: "Conversion" },
]


ready(() => {
  var filter = document.getElementById("filter")
  categories.forEach((item) => {
    var el = document.createElement("button")
    el.className = "btn btn-outline-success m-1"
    el.className += (item.id == "all") ? " active" : ""
    el.setAttribute("data-filter",item.id)
    el.innerText = item.name
    filter.appendChild(el)
  })

  $(".btn-outline-success").click(function () {
    var value = $(this).attr('data-filter');
    if (value == "all") {
      $('.card').show('1000');
    }
    else {
      $(".card").not('.' + value).hide('3000');
      $('.card').filter('.' + value).show('3000');
    }

    $(".btn-outline-success").removeClass("active")
    $(this).addClass("active");
  });
})