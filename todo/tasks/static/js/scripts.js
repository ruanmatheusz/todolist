$(document).ready(function() {


    var baseUrl = 'http://127.0.0.1:8000/';
    var deleteBtn = $('.delete-btn');
    var searchBtn = $('#search-btn');
    var searchForm = $('#search-form');
    var filter     = $('#filter');
    var filterBtnD = $('.filterbtnd')
    var filterBtnT = $('.filterbtnt')
    var filterBtnDT = $('.filterbtndt')

    $(deleteBtn).on('click', function(e) {

        e.preventDefault();

        var delLink = $(this).attr('href');
        var result = confirm('Quer deleter esta tarefa?');

        if(result) {
            window.location.href = delLink;
        }

    });

    $(searchBtn).on('click', function () {
        searchForm.submit();
    })

    $(filterBtnD).on('click', function () {
        var filterBtn = 'doing';
        window.location.href = baseUrl + '?filter=' + filterBtn;
    })

    $(filterBtnT).on('click', function () {
        var filterBtn = 'done';
        window.location.href = baseUrl + '?filter=' + filterBtn;
    })

    $(filterBtnDT).on('click', function () {
        var filterBtnDT = 'done';
        window.location.href = baseUrl + '?filter=' + filterBtnDT;
    })

    $(filter).change(function() {
        var filter = $(this).val();
        window.location.href = baseUrl + '?filter=' + filter;
    });

});