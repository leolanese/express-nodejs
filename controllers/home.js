exports.get_home = function(req, res, next){
    res.render( 'home', { title: 'Express' } )
}

exports.submit_lead = function(req, res, next){
    console.log('submit_lead:', req.body.email)
    res.redirect('/')
}