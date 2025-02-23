    function handelSendMessage(e, message){
        const formData = new FormData()
        formData.append('name', message.name)
        formData.append('email', message.email)
        formData.append('message', message.message)
        const scriptURL = "https://script.google.com/macros/s/AKfycbxrwX0gwh5baQL0AU1D_W6RYejDY8eoSlI4oZUq3NTIgrJAh963t_E9-OZAOPoT21h0/exec"
        e.preventDefault()
        fetch(scriptURL, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded', // Use this header
              },
            body: formData.toString(), // Convert the message object to JSON
        })
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
        
      //new FormData(form)
    }