// defining sets of images (galleries)
var images = {};

$(document).ready(function(){ // on document ready

// $.getJSON('http://api.open-notify.org/astros.json'),
//     function(result){
//         alert('fetched'+result.data.length + 'items');
//     });
//////////  JSON data

/// set = type >>>> the one with subtype in array:  "typeVids" : [ ["NAME", "http//:dfsfdsf", "subtype"], ], "typeWhatever:[]"
var data=$.getJSON("http://api.open-notify.org/astros.json", gotData);

function gotData(){
   //println(data);
}

////////////////////  from JSON  >>>  set1 ==>  data[0 1 2]...

// add date field, so you can get newest ones on "home"
images = {

    'set uno' : [
    //[  index 0 >> data
    [
        'vid'
    ], [
        ['1','artist1', 'pic2.jpg', 'https://www.youtube.com/embed/spaEV6jCosQ','rock'], 
        ['12','artist1', 'pic3.jpg','https://www.youtube.com/embed/Su5AnFlEt9g','jazz'],
        ['123','artist2', 'pic2.jpg','https://www.youtube.com/embed/7ba0mo7ijOc','regueton'], 
        ['Soko','artist2', 'pic3.jpg','https://www.youtube.com/embed/GGSVNBIs5Wc','ragamufin'], 
        ['12df','artist2', 'pic2.jpg', 'https://www.youtube.com/embed/spaEV6jCosQ','rock']
    ]
    //], [ index 1 >> TYPE]   /// asi libero el ultimo escalafon para poner multi filtros                                                           
                                                            //////////  (name, url, thumbnail, filtro1, filtro2)
    ],'setdos' : [
    //[  index 0 >> data
    [
        'vid'
    ], [
        ['ffffffffffffff','artist1','pic2.jpg', 'https://www.youtube.com/embed/0mFBkdzI4GU','rock'], 
        ['12','artist1','pic3.jpg','https://www.youtube.com/embed/Su5AnFlEt9g','jazz'],
        ['123','artist1','pic2.jpg','https://www.youtube.com/embed/7ba0mo7ijOc','regueton'], 
        ['Soko','artist1','pic3.jpg','https://www.youtube.com/embed/GGSVNBIs5Wc','ragamufin'], 
        ['12df','artist1','pic2.jpg', 'https://www.youtube.com/embed/spaEV6jCosQ','rock']
    ]
    //], [ index 1 >> TYPE]   /// asi libero el ultimo escalafon para poner multi filtros                                                           
                                                            //////////  (name, url, thumbnail, filtro1, filtro2)
    ],'settress' : [
    //[  index 0 >> data
    [
        'vid'
    ], [
        ['1','artist1','pic2.jpg', 'https://www.youtube.com/embed/spaEV6jCosQ','rock'], 
        ['12','artist1','pic3.jpg','https://www.youtube.com/watch?v=oqB-sz2SBsg','jazz'],
        ['123','artist1','pic2.jpg','https://www.youtube.com/embed/7ba0mo7ijOc','regueton'], 
        ['Soko','artist1','pic3.jpg','https://www.youtube.com/watch?v=WHRnvjCkTsw','ragamufin'], 
        ['12df','artist1','pic2.jpg', 'https://www.youtube.com/embed/dPw8oUmxA-Y','rock']
    ]
    //], [ index 1 >> TYPE]   /// asi libero el ultimo escalafon para poner multi filtros                                                           
                                                            //////////  (name, url, thumbnail, filtro1, filtro2)
    ],
    'set 2' : [

        
        
            ['multi','uno','pic1.jpg'], 
            ['multi','dos','pic2.jpg'],
            ['multi','nameextrano','pic1.jpg']
       
        

    ],
    'set 54' : [

        [
            ['sub-gallery2','pic1.jpg']
        ],
        [

            ['1','pic1.jpg'], 
            ['2','pic3.jpg'],
            ['3','pic4.jpg'],
            ['4','pic5.jpg']

        ]

    ],
    'set3' : [
    [
        'photws'
    ],
    [
        ['1','pic2.jpg', 'photo'], 
        ['3','pic3.jpg'],
        ['4','pic4.jpg'], 
        ['6','pic2.jpg'], 
        ['ty','pic7.jpg'], 
        ['gh','pic3.jpg'],
        ['4dd','pic4.jpg'], 
        ['12','pic2.jpg'], 
        ['32','pic3.jpg'],
        ['42','pic4.jpg'], 
        ['62','pic2.jpg'], 
        ['4dd23','pic4.jpg']
    ]
    ],
    'set 5' : [
    [
        'mono'
    ],
    [
        ['1','pic2.jpg', 'photo'], 
        ['3','pic3.jpg'],
        ['4','pic4.jpg'], 
        ['6','pic2.jpg'], 
        ['ty','pic7.jpg'], 
        ['gh','pic3.jpg'],
        ['4dd','pic4.jpg'], 
        ['12','pic2.jpg'], 
        ['32','pic3.jpg'],
        ['42','pic4.jpg'], 
        ['62','pic2.jpg'], 
        ['4dd23','pic4.jpg']
    ]
    ],'set 7' : [
    //[  index 0 >> data
    [
        'vid'
    ], [
        ['1','artist1','pic2.jpg', 'https://www.youtube.com/embed/spaEV6jCosQ','rock'], 
        ['12','artist1','pic3.jpg','https://www.youtube.com/embed/Su5AnFlEt9g','jazz'],
        ['123','artist1','pic2.jpg','https://www.youtube.com/embed/7ba0mo7ijOc','regueton'], 
        ['Soko','artist1','pic3.jpg','https://www.youtube.com/embed/GGSVNBIs5Wc','ragamufin'], 
        ['12df','artist1','pic2.jpg', 'https://www.youtube.com/embed/spaEV6jCosQ','rock']
    ]
    //], [ index 1 >> TYPE]   /// asi libero el ultimo escalafon para poner multi filtros                                                           
                                                            //////////  (name, url, thumbnail, filtro1, filtro2)
    ]
};//// end images


/// just like images = {} >>>>   artists = {}  so when click on artist's name >>> opens this on a div on top (WHERE ARTIST = ARTIST)
artists = {
     'mojon' : [
    //[  index 0 >> data
    
        ['1','artist1','dsjfhdkfhjkhfs fjkdhfsjkdhf jkfhkjfh kjfhkjfhkjhfkjfkjf kkhf fjhfkj hf kjh ','rock'], 
        ['12','artist11','https://www.youtube.com/embed/Su5AnFlEt9g','jazz'],
        ['123','artist2','https://www.youtube.com/embed/7ba0mo7ijOc','regueton'], 
        ['Soko','artist2','https://www.youtube.com/embed/GGSVNBIs5Wc','ragamufin'], 
        ['12df','artist2', 'https://www.youtube.com/embed/spaEV6jCosQ','rock']
    
    //], [ index 1 >> TYPE]   /// asi libero el ultimo escalafon para poner multi filtros                                                           
                                                            //////////  (name, url, thumbnail, filtro1, filtro2)
    ], 
    'lulo' : [
    //[  index 0 >> data
    
        ['1','los peorros','dsjfhdkfhjkhfs fjkdhfsjkdhf jkfhkjfh kjfhkjfhkjhfkjfkjf kkhf fjhfkj hf kjh ','rock'], 
        ['12','er','https://www.youtube.com/embed/Su5AnFlEt9g','jazz'],
        ['123','lawea','https://www.youtube.com/embed/7ba0mo7ijOc','regueton'], 
        ['Soko','enhemenhe','https://www.youtube.com/embed/GGSVNBIs5Wc','ragamufin'], 
        ['12df','ninguno', 'https://www.youtube.com/embed/spaEV6jCosQ','rock']
    
    //], [ index 1 >> TYPE]   /// asi libero el ultimo escalafon para poner multi filtros                                                           
                                                            //////////  (name, url, thumbnail, filtro1, filtro2)
    ] 

}


fotos = {

    'toalafoto':[
            ['0','dos','pic6.jpg'],        ////////  si el name de este coincide con whatGal  entonces lo abre, si no, no
            ['1','uno','pic1.jpg'], 
            ['2','uno','pic3.jpg'],
            ['3','nameextrano','pic4.jpg'],
            ['4','dos','pic5.jpg']
    ]
}




$('#photo, #thumbs').hide();
$('#gallery').gallery();
//$('#photo, #thumbs').show();

///maintain minimum height for gallery (so iframe looks right when the vids are filter to less than 3>> half screenHeight)
if($('#gallery').height()<window.innerHeight){
    $('#gallery').css('height', window.innerHeight+'px');   //// tb lo hace cuando ya es gigante
}else{
     $('#gallery').css('height', window.innerHeight+'px'); /// screen, not window
}


});






////  so just like I though, do artist, then think of loading images (galleries) the same way, in a relationship with an external object