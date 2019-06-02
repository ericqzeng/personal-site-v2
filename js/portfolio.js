var nPics = 18; // will load images [0.jpg, 1.jpg, ... (n-1)Pics.jpg]

$(document).ready(function() {
    $('#header').load('html/header.html');
    $('#footer').load('html/footer.html');

    var grid = $('.grid').masonry({
        gutter: '.gutter-sizer',
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        horizontalOrder: true,
        percentPosition: true,
        hiddenStyle: {
            transform: 'translateY(100px)',
            opacity: 0
        },
        visibleStyle: {
            transform: 'translateY(0px)',
            opacity: 1
        }
    });

    // coutesy of masonry-layout extra tips!
    $.fn.masonryImagesReveal = function($items) {
        var msnry = this.data('masonry');
        var itemSelector = msnry.options.itemSelector;
        // hide by default
        $items.hide();
        // append to container
        this.append($items);
        $items.imagesLoaded().progress(function(imgLoad, image) {
            // get item
            // image is imagesLoaded class, not <img>, <img> is image.img
            var $item = $(image.img).parents(itemSelector);
            // un-hide item
            $item.show();
            // masonry does its thing
            msnry.appended($item);
        });

        return this;
    };

    // sets up html text for pictures
    //TODO: link with prismic
    var items = '';
    for (var i = 0; i < nPics; i++) {
        items += "<a data-fancybox='gallery' href='img/portfolio/" + i + ".jpg' class='grid-item'><img src='img/portfolio/" + i + ".jpg' /></a>";
    }

    // execute fancy "fade-up-reveal-as-loaded"
    grid.masonryImagesReveal($(items));

    // add margin-bottom initially ...
    $('.grid-item').css({
        'margin-bottom': jQuery('.gutter-sizer').width() + 'px'
    });

    // ... and refresh margin-bottom if the layout changes (usually window resize)
    grid.on('layoutComplete', function() {
        $('.grid-item').css({
            'margin-bottom': jQuery('.gutter-sizer').width() + 'px'
        });
    });

    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "zoom",
            //"share",
            "fullScreen",
            //"download",
            "close"
        ]
    });
});

// $(window).on('load', function() {
//     $('.container').css({
//         'display': 'block'
//     });
// });
