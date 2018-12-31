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
}, 4000)

function treeTableToJson(){
  var parentId = $$("chaptersTree").getFirstId()
  while(parentId){
    if($$("chaptersTree").getItem(parentId).$level==1){
      console.log($$("chaptersTree").getItem(parentId).name)
      childItem(parentId)
      parentId = $$("chaptersTree").getNextId(parentId)
    }
  }
}
function childItem(parentId){
  var childId = $$("chaptersTree").getFirstChildId(parentId)
  while(childId){
    console.log($$("chaptersTree").getItem(childId).name)
    childId = $$("chaptersTree").getNextId(childId)
  }
}
