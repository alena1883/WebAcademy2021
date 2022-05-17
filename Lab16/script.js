function submitForum(){
  let userName=document.userform.input_username.value;
  let userPhone=document.userform.input_phoneNum.value;
  let userEmail=document.userform.input_email.value;
  let userNameResult=document.getElementById("nameResult");
  let userPhoneResult=document.getElementById("phoneNumResult");
  let userEmailResult=document.getElementById("emailResult");

  userNameResult.innerHTML=userName;
  userPhoneResult.innerHTML=userPhone;
  userEmailResult.innerHTML=userEmail;
  console.log(userEmail,userPhone,userName)
}
function submitForum(){
  var x=document.getElementById("before");
  if(x.style.display==="none"){
    x.style.display="block";
  } else{
    x.style.display="none";
  }
}