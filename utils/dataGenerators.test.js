module.exports = {
    generateRandomEmailAddress : function() {
        let emailAddress = "priyanka_"+Math.random().toString().replace('0.','')+"@webdriverio.com";
        return emailAddress;
    },
    generateRandomString : function() {
         return Math.random().toString(36).substring(2,17)+Math.random().toString(36).substring(2,17);
    }
}