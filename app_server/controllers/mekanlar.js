
var anaSayfa=function(req, res){

	res.render('mekanlar-liste', {'title':'Anasayfa'});
};

var mekanBilgisi=function(req, res){

	res.render('mekan-detay', {'title':'Mekan Bilgisi'});
};

var yorumEkle=function(req, res){

	res.render('yorum-ekle', {'title':'Yorum Ekle'});
};

module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
};