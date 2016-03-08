module.exports = function(anApp) {
    anApp.get('/',function(req, res) {
         res.json({
          ipaddress: req.headers['x-forwarded-for'],
          language: req.headers["accept-language"].split(',')[0],
          software: req.headers['user-agent'].split(') ')[0].split(' (')[1]
        });
    });
};