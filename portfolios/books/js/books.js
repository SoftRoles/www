function ordinalSuffix(i) {
    var j = i % 10,
    k = i % 100;
    if (j == 1 && k != 11) {
      return i + "st";
    }
    if (j == 2 && k != 12) {
      return i + "nd";
    }
    if (j == 3 && k != 13) {
      return i + "rd";
    }
    return i + "th";
}

ready(function () {
  $.get('/database/api/v1/portfolios/books', function (books) {
    books.forEach(function (book) {
      console.log(book)
      var el = $("<a />", { class: 'grid__item', href: '#' });
      var el_h0 = $('<h2 />', { class: 'title title--preview', text: book.title })
      var el_div0 = $('<div />', { class: 'loader' })
      var el_span0 = $('<span />', { class: 'category', text: book.author })
      var el_div1 = $('<div />', { class: 'meta meta--preview' })
      var el_div1_img0 = $('<img />', { class: 'meta__avatar', src: '/filesystem/api/v1/files/' + book.cover })
      var el_div1_span0 = $('<span />', { class: 'meta__date', text: 'Published in ' + book.year })
      var el_div1_span1 = $('<span />', { class: 'meta__reading-time', text: ordinalSuffix(book.edition) + ' Edition' })
      var el_div1_span1_i0 = $('<i />', { class: 'fa fa-clock-o' })

      el.append(el_h0)
      el.append(el_div0)
      el.append(el_span0)
      el_div1.append(el_div1_img0)
      el_div1.append(el_div1_span0)
      //el_div1_span1.append(el_div1_span1_i0)
      el_div1.append(el_div1_span1)
      el.append(el_div1)
      el.appendTo($(".grid"))
    })
  })
})
