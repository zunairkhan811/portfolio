function seterror(id, error){
 element1 = document.getElementById(id);
 element1.getElementsByClassName('formerror')[0].innerHTML= error;
}

function validateForm() {
    var returnVal =true;
    var name =document.forms['myform']['name'].value;

    return returnVal

}

