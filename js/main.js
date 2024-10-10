$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    
    let person = data['results'][0];
    console.log(person);
const surname = person['name']['last'];
const firstname = person['name']['first'];
const email = person['email'];
$('#surname').html(surname);
$('#firstname').html(firstname);
$('#email').html(email);
  }
});
      