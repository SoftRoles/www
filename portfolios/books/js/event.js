//=============================================================================
// Add Item
//=============================================================================
function openAddItemWin() {
  $$("addItemWindow").show();
}

$$("coverImageUploader").attachEvent("onAfterFileAdd", function (file) {
  var reader = new FileReader();
  reader.onload = function (e) {
    $('#coverImage').attr('src', e.target.result);
  };
  reader.readAsDataURL(document.querySelector("input").files[0]);
})

$$("addItemChapters").attachEvent("onItemClick", function () {
  $$("addItemChapterTree").show();
})

$$("chaptersTree").attachEvent("onKeyPress", function (code, e) {
  var parentId = this.getSelectedId() || 0
  if (e.code == "KeyA") {
    this.open(parentId)
    this.add({ name: "New Chapter" }, 0, parentId)
  }
  if (e.code == "Escape") {
    this.unselect()
  }
})

setTimeout(function () {
  $$("addItemChapterTree").show();
}, 2000)

var items = []
function treeToJson() {
  $$("chaptersTree").find({}).forEach(function (item) {
    if (item.$parent === 0){
      items.push({name:item.name, start:item.start, stop:item.stop, chapters:[]})
    }
    else{
      var parent = items.find(function(parentItem){
        return parentItem.name == $$("chaptersTree").getItem(item.$parent).name
      })
      parent.chapters.push({name:item.name, start:item.start, stop:item.stop})
    }
  });
}