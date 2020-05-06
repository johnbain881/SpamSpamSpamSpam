let customersEmailArr = [];
customers.forEach(customer => customer.contacts.email.forEach(email => customersEmailArr.push(email)))
console.log(customersEmailArr)  