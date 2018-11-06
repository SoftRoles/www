let categories = [
  { id: "all", name: "All" },
  { id: "antenna", name: "Antenna" },
  { id: "propagation", name: "Propagation" },
  { id: "conversion", name: "Conversion" },
]

ready(() => {
  categories.forEach((category) => {
    $("#filter").append(
      $("<button />", {
        class: (category.id == "all") ? "active btn btn-outline-success m-1": "btn btn-outline-success m-1",
        "data-filter": category.id,
        text: category.name
      })
    )
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