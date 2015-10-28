/**
 * Created by Jan on 8/16/2015.
 */

$('document').ready(function(){

    /* ------ Set active Nav link ------ */
    var pgURL = window.location.href;
    var pgURLxLang = window.location.href.slice(0, -10);
    $('.nav ul li.nav-link a').each(function(){
        if($(this).prop('href') == pgURL || $(this).prop('href') == pgURLxLang) {
            $(this).addClass('active');
            $(this).closest('.nav ul li.nav-link').addClass('active');
        }
    });

    /* ------ Custom Language Menu ------ */
    // Display Active Language
    var currentLang = $('html').attr('lang'); //|| 'en';
    $('#'+ currentLang).addClass('active');

    var selectedLang = $('.tb-language-menu .active a').text();
    $('.tb-language-menu').find('.dropdown-toggle').html(selectedLang);

    // Add class .hidden to hide active language menu li>a
    $('.tb-language-menu li.active').addClass('hidden');

    // Change Active Language to clicked language
    $('.tb-language-menu .dropdown li').click(function(){
        // Remove active from current active
        $('.tb-language-menu li.active').removeClass('hidden');
        $('.tb-language-menu li.active').removeClass('active');

        // Add active and hidden to clicked
        $(this).addClass('active');
        $(this).addClass('hidden');

        // Display Active Language
        var selectedLang = $('.tb-language-menu .active a').text();
        $('.tb-language-menu').find('.dropdown-toggle').html(selectedLang);
    });

    /*i18n.init(function(err, t) {
        // translate nav
        $('.nav').i18n();
    });*/

    /* ------ Custom Search Box ------ */
    $('#searchInput').keyup(function() {

        var input = $(this).val();
        if(input == ''){
            $('#searchInputBtn i').removeClass('fa-remove');
            $('#searchInputBtn i').addClass('fa-search');
        }
        else {
            $('#searchInputBtn').toggle(Boolean($(this).val()));
            $('#searchInputBtn i').removeClass('fa-search');
            $('#searchInputBtn i').addClass('fa-remove');
        }

    });
    $('#searchInputBtn').toggle(Boolean($("#searchInput").val()));
    $('#searchInputBtn').click(function() {
        $('#searchInput').val('').focus();
        $('#searchInputBtn i').removeClass('fa-remove');
        $('#searchInputBtn i').addClass('fa-search');
    });

});