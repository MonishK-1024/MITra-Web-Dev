const form2 = document.getElementById('LogIn')

        form2.addEventListener('submit', loginuser)

        async function loginuser(event) {
            event.preventDefault()
            const username = document.getElementById('Uname').value
            const password = document.getElementById('Pass').value

            const result = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            }).then((res) => res.json())

            if (result.status === 'ok'){
                console.log("Got the token: ", result.data)
                localStorage.setItem('token', result.data)
                alert('Success')
            } else {
                alert(result.error)
            }
        }