// paintingsController
import 'jquery'
import templates from 'templates.js'
import 'gallery'
import handlebars from 'handlebars'

export default {
   all: function() {

        templates.load('languagebar')
        .then(function(data) {                          
            $('#language-bar').html(data('paintings'));   
        });     

        var data = [
        "public/paintings/WP_20220723_028.jpg", 
        "public/paintings/WP_20220813_057.jpg", 
        "public/paintings/WP_20231227_032-small.jpg",
        "public/paintings/WP_20240114_023-small.jpg",
        "public/paintings/WP_20230226_170-retouched-small.jpg",
        "public/paintings/DSC_246-retouched-small.jpg",
        "public/paintings/WP_20220102_041.jpg",
        "public/paintings/DSC_0611-retouched.jpg",
        "public/paintings/DSC_0155-small.JPG",
        "public/paintings/WP_20201227_002-small.jpg",
        "public/paintings/WP_20211221_030-small.jpg",
        "public/paintings/WP_20220103_015.jpg",
        "public/paintings/WP_20220115_022.jpg",
        "public/paintings/WP_20210324_018.jpg",
        "public/paintings/WP_20210616_013.jpg",
        "public/paintings/WP_20210506_058.jpg",
        "public/paintings/WP_20220503_027-small.jpg",
        "public/paintings/WP_20211217_020.jpg",
        "public/paintings/WP_20220108_006.jpg",
        "public/paintings/WP_20210128_007.jpg",
        "public/paintings/DSC_0152.JPG",
        "public/paintings/landscape.jpg",
        "public/paintings/WP_20220618_007-roses-small.jpg",
        "public/paintings/WP_20230319_017-small.jpg",
        "public/paintings/sea-landscape3.jpg",
        "public/paintings/spring-landscape.jpg",
        "public/paintings/sea-landscape1.jpg",
        "public/paintings/ahtopolpaint.jpg",
        "public/paintings/willow-paint.jpg",
        "public/paintings/pelargonium.jpg",
        "public/paintings/DSC_0735-small.jpg"
        ];

        templates.load('paintings')
            .then(function(template) {
                $('#main').html(template({paintings: data}));
                $('#gallery').gallery(4);                   
        });
   
        handlebars.registerHelper("incr", function(value, options)
        {
            return parseInt(value) + 1;
        });
        
    }
}