import './bootstrap';


$(document).ready(function(){
    $('.edit-conference').click(function(){
        var conferenceData = JSON.parse($(this).data('conference'));
        $('#conferenceId').val(conferenceData.id);
        $('#name').val(conferenceData.name);
        $('#description').val(conferenceData.description);
        $('#start_date').val(conferenceData.start_date);
        $('#end_date').val(conferenceData.end_date);
        $('#location').val(conferenceData.location);
        $('#visitors').val(conferenceData.visitors);
        console.log(conferenceData)
    });
});