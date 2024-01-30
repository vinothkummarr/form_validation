function validateForm(event){  
    event.preventDefault();  
    const name = document.getElementById("customer_nameee").value
    //const name_span = document.getElementById("name_span")

    const address_value = document.getElementById("addresss").value
   // const adrs_span = document.getElementById("adrs_span")

    //const postal_span = document.getElementById("postal_span")
    const postal_value = document.getElementById("postalcode").value

    //const phone_span =document.getElementById('phone_span')
    const phone_val = document.getElementById('phone').value

    //const fax_span = document.getElementById('fax_span')
    const fax_val = document.getElementById('fax').value

    //const dob_span = document.getElementById('dob_span')
    const dob_val = document.getElementById('dob').value    
    const valid_age = getAge(dob_val)

    //const email_span = document.getElementById('email_span')
    const email_val = document.getElementById("email").value
    const validate_mail = mail(email_val)


    ///////
    const textspan = document.getElementById('name_text')
    const adrs_text = document.getElementById('adrs_text')
    const postal_text = document.getElementById('postal_text')
    const phone_text = document.getElementById('phone_text')
    const fax_text = document.getElementById('fax_text')
    const dob_text = document.getElementById('dob_text')
    const email_text = document.getElementById('email_text')
    const btn = document.getElementById('btn')
    const floating = document.getElementById('floating')

    let num = 0

    //name
    if(name == ''){        
        textspan.textContent ='Enter the Name'
    } else if(name.length > 0){
        textspan.textContent =""
        num +=1
    }

    //address
    if(address_value == ""){
        adrs_text.textContent = 'Enter the Address'
        
    } else if(address_value.length >5){
        adrs_text.textContent =""
        num += 1
    }
    
    //postal_code
    if(postal_value == ""){
        postal_text.textContent = 'Enter the Postal Code'
    } else if(postal_value.length <6){
        postal_text.textContent = 'Enter Correct Postal Code'
    }  else if(postal_value.length ==6){
        postal_text.textContent = ""
        num += 1
    }

    //phone_number
    if(phone_val== ""){
        phone_text.textContent ='Enter the Phone Number'
        
    } else if (phone_val.length <10) {
        phone_text.textContent ='Enter Correct Phone Number'
        
    } else if(phone_val.length ==10){
        phone_text.textContent = ""
        num += 1
    }

    //fax
    if(fax_val == ""){
        fax_text.textContent = 'Enter Fax Number'      
    } else if(fax_val.length <10){
        fax_text.textContent = 'Enter Correct Fax Number'
    } else if(fax_val.length == 10){
        fax_text.textContent = ""
        num += 1
    }

    
    //dob  
    if(dob_val ==""){
        dob_text.textContent = 'DOB is mandatory'
    }    
    else if (valid_age  < 18){
        dob_text.textContent = 'Age must be Above 18'      
    } else if (valid_age >= 18){
        dob_text.textContent = ""
        num += 1
    }

    //email
    if (email_val ==""){
        email_text.textContent = '*Email is Mandatory'
    } else if(validate_mail == false){
        email_text.textContent = 'Enter correct Email Address'
    } else if (validate_mail == true){
        email_text.textContent = ""
        num += 1
    }

    console.log(num)

    if(num==7){
        floating.style.display = 'flex'
    }


  }

  function validatePostal(input){
    if(input.value > 6){
        input.value = input.value.slice(0,6)
    }
  }

  function validPhone(input){
    if(input.value.length == 3){
        input.value = input.value+ "" 
    }
    if(input.value > 10){
        input.value = input.value.slice(0,10)
        
    }
  }

  function validFax(input){
    if(input.value > 10){
        input.value = input.value.slice(0,10)
        
    }
  }

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
    }
function mail(email){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    verify = emailRegex.test(email)  
    ///if(verify == true){
        //return "Correct Email Address"
    //} else {
        //return "Not a Email  Address"
    //}
    return verify
}
  
function acceptance(){
    const agree_val = document.getElementById('agreement')
    const btn = document.getElementById('btn')
    if (agree_val.checked == true){
        btn.setAttribute
    }

}

function reload(){
    location.reload()
}