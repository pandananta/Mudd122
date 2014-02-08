Accounts.loginServiceConfiguration.remove({
	service: "google"
})

Accounts.loginServiceConfiguration.insert({
	service: "google",
	clientId: "client ID here",
	secret: "client secret here"
})
