//Should be renamed 'public.js'
//Replace appropriate CLIENT ID and CLIENT SECRET fields

(function(){
    Meteor.startup(function () {
        Accounts.loginServiceConfiguration.remove({
            service: "google"
        });

        Accounts.loginServiceConfiguration.insert({
            service: "google",
            clientId: "CLIENT ID",
            secret: "CLIENT SECRET"
        });
    });
}());