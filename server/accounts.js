(function(){
    Accounts.onCreateUser(function (options, user) {

        var accessToken = user.services.google.accessToken,
            result,
            profile;

        result = Meteor.http.get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {"User-Agent": "Meteor/1.0"},

            params: {
                access_token: accessToken
            }
        });

        if (result.error)
            throw result.error;

        //Include these user fields in database
        profile = _.pick(result.data,
            "name",
            "given_name",
            "family_name",
            "profile",
            "picture",
            "email",
            "birthdate",
            "gender");

        // console.log(profile);
        user.profile = profile;

        //Sends this user info to the database
        return user;
    });
}());