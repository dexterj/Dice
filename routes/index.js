
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Chinchirorin', subtitle: 'A Dice Game' });
};