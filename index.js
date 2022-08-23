const accountInfo = {
    user: 'Nathally Souza',
    email: 'nath@recode.bank',
    password: '123456',
    balance: 20.50
}

const api = new Promise((resolve) => {
	setTimeout(() => {
  	resolve(accountInfo)
  }, 2500)
})

const initAccount = () => {
    const date = new Date()
    document.querySelector('#date-info').innerHTML = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
    document.querySelector('#user-info').innerHTML = `Bem vinda ${accountInfo.user}`
    document.querySelector('#balance').innerHTML = `R$ ${(accountInfo.balance).toFixed(2)}`
}

const incomming = (event) => {
    event.preventDefault()
    const value = Number(document.querySelector('#incommingInput').value)
    accountInfo.balance += value
    initAccount()
}

const login = async (event) => {
    event.preventDefault()
    const user = document.querySelector('#inputEmail').value
    const password = document.querySelector('#inputPassword').value
    const userData = await api
    if(user !== userData.email || password !== userData.password){
        return alert('Email/senha incorretos')
    }

    window.location = '/conta.html'
}

initAccount()

