SetDisplay = function (bool) {
    if (bool == true) {
        $('#container').removeClass('off').addClass('on');
    } else {
        $('#container').removeClass('on').addClass('off');
    }
};

Close = function () {
    SetDisplay(false);
    $.post('https://orion-coords/close');
};

Copy = function (data) {
    let containerText;
    switch (data) {
        case "xyz": {
            containerText = $('#xyz').text();
        };
            break;
        case "vector3": {
            containerText = $('#vector3').text();
        };
            break;
        case "vector4": {
            containerText = $('#vector4').text();
        };
            break;
        case "heading": {
            containerText = $('#heading').text();
        };
            break;
    }
    const textArea = $('<textarea></textarea>');
    textArea.text(containerText);
    $('body').append(textArea);
    textArea.select();
    document.execCommand("copy");
};

SetData = function (data) {
    $('#xyz').text(data.xyz);
    $('#vector3').text(data.vector3);
    $('#vector4').text(data.vector4)
    $('#heading').text(data.heading);
};

$(document).ready(function () {
    window.addEventListener("message", function (event) {
        var data = event.data;
        switch (data.type) {
            case "show": {
                SetDisplay(true);
                SetData(data.infoData);
            };
                break;
            case "hide": {
                Close();
            };
                break;
        };
    });
});

$(document).on("keydown", function (event) {
    switch (event.keyCode) {
        case 27: // ESC
            Close();
            break;
    }
});

$(document).on('click', '#copyXYZ', function (e) {
    e.preventDefault();
    Copy('xyz');
});

$(document).on('click', '#copyVector3', function (e) {
    e.preventDefault();
    Copy('vector3');
});

$(document).on('click', '#copyVector4', function (e) {
    e.preventDefault();
    Copy('vector4');
});

$(document).on('click', '#copyHeading', function (e) {
    e.preventDefault();
    Copy('heading');
});

$(document).on('click', '#close', function (e) {
    e.preventDefault();
    Close();
});