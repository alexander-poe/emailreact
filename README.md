// components
// message 
// messages
// mailbox
// spam

// 

//endpoints
// /:mailbox_name
// /:email_id

// /inbox
// /inbox/1
// /spam
// /spam/1

let messages = [];
let keys = Object.keys(Email.inbox);
keys.forEach(function(key) {
	messages.push(Email.inbox[key]);
})

this is rad, hi rad what do you do?
I map through a json object, and take the indexes then store them for later in keys.
the i loop through the keys, passing the key as the argument, and i push # emailreact
