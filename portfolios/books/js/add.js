// enable for 'hsyn'
webix.ready(function () {
  webix.ajax().get("/user", function (t, d, x) {
    if (d.json() && d.json().username == "hsyn") {
      var element = document.getElementById("add")
      element.setAttribute("style", element.getAttribute("style") + "display: block;")
    }
  })
})

// Add Item form
var addFormItems = [
  { id: "addItemTitle", name: "title", view: "text", label: "Title" },
  { id: "addItemAuthor", name: "author", view: "text", label: "Author(s)" },
  { id: "addItemPublisher", name: "publisher", view: "text", label: "Publisher" },
  {
    cols: [
      { id: "addItemEdition", name: "edition", view: "text", label: "Edition:" },
      { id: "addItemYear", name: "year", view: "text", label: "Year:", labelWidth: 45 },
    ], margin: 25
  },
  { id: "addItemDescription", name: "description", view: "textarea", label: "Description", height: 50 },
  {
    cols: [
      { id: "addItemFile", name: "filename", view: "text", label: "File:", gravity: 2 },
      { id: "addItemUploadFile", view: "uploader", autosend: false, label: "Select file", graivty: 1, accept: "application/pdf" },
    ], margin: 25
  },
]

webix.ui({
  id: "addItemWindow",
  view: "window",
  position: "center",
  headHeight: 0,
  modal: true,
  width: window.innerWidth - 400,
  height: window.innerHeight - 200,
  body: {
    rows: [
      {
        cols: [
          {
            rows: [
              { id: "coverImage", css: "text-center", template: '<img id="coverImage" class="text-center mw-100 mh-100 align-self-center" src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg">' },
              {
                id: "coverImageUploader",
                view: "uploader",
                value: "Cover image",
                name: "files",
                accept: "image/png, image/gif, image/jpeg",
                autosend: false,
                upload: "/files",
              }],
            graivty: 1
          },
          {
            rows: [{}, { id: "addItemChapters", view: "button", label: "Edit chapters" }],
            graivty: 1
          }
        ]
      },
      { id: "addItemDetails", view: "form", elements: addFormItems, margin: 1 }
    ]
  }
})

// Chapter TreeTable
webix.ui({
  id: "addItemChapterTree",
  view: "window",
  position: "center",
  headHeight: 0,
  modal: true,
  width: window.innerWidth - 150,
  height: window.innerHeight - 250,
  body: {
    rows: [
      {
        id: "chaptersTree",
        view: "treetable",
        columns: [
          { id: "name", header: "Chapter", editor: "text", fillspace: 1, template: "{common.treetable()} #name#" },
          { id: "start", header: "Start", width: 50, editor: "text" },
          { id: "stop", header: "Stop", width: 50, editor: "text" },
        ],
        select: true,
        scrollX: false,
        editable: true,
        editaction: "dblclick"
      }
    ]
  }
})