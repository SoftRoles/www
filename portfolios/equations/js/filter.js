let categories = [
  { id: "all", name: "All" },
  { id: "antenna", name: "Antenna" },
  { id: "propagation", name: "Propagation" },
  { id: "conversion", name: "Conversion" },
]

let categoryDoms = categories.map((category) => {
  var categoryDom = {
    type: "button",
    class: "btn btn-outline-success m-1",
    attrs: { "data-filter": category.id },
    text: category.name
  }
  if (category.id == "all") categoryDom.class += " active"
  return categoryDom
})

ready(() => {
  var filter = document.getElementById("filter")
  categoryDoms.appendToDom(filter)
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