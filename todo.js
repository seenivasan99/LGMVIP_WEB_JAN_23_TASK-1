let AddBtn = $('#add');
let TaskBar= $('#myUL');
let Reset=$('#rstbtn');
function add() {
    if($('#myInput').val()==''){
      alert("Please Enter the Text");
    }
    else{
    const listLength = $('#myUL li').length + 1;
    const li = $('<li>',{'class':'list-group-item'});
    const id = 'checkbox' + listLength;
    const label = $('<label>', {class: 'form-check-label', text: $('#myInput').val(), for:id})
    const checkbox = $('<input >', {class: 'form-check-input me-1', type: 'checkbox', value: '', id:id});
    let delbtn=$('<button>',{
      'class':'btn btn-danger cls',
      click: function() {
        this.parentElement.remove();
      }
    })
    let delico=$('<i>',{
       'class':'bi bi-x'
    })
    delbtn.append(delico); 
    li.append(delbtn); 
    li.append(checkbox);
    li.append(label);
    TaskBar.append(li);
    $('#myInput').val('');
  }
}

$(document).ready(function(){ 
  $('#myUL li button').each(function(i) {
    $(this).on('click', function() {
      this.parentElement.remove();
    })
  })
  console.log($('#myUL li button'))
})
$(document).ready(function(){
  $('#rstbtn').click(function(){				
      $('<label>', {class: 'form-check-label', text: $('#myInput').val('')});
  });
});