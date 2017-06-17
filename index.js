$('body > div > div:nth-child(3) > img:nth-child(5)').hide()
$('body > div > div:nth-child(3) > img:nth-child(6)').hide()
$('body > div > div:nth-child(3) > img:nth-child(7)').hide()
$('body > div > div:nth-child(3) > img:nth-child(8)').hide()



var change1 = function() {
    // $("body > div > div:nth-child(3) > img:nth-child(1)").hide()
    $('body > div > div:nth-child(3) > img:nth-child(5)').show()
        // $("body > div > div:nth-child(3) > img:nth-child(2)").hide()
    $('body > div > div:nth-child(3) > img:nth-child(6)').show()
}

// $('body > div > div.btn > a:nth-child(1)').on("click", change1)

$('button').on('click', function() {
    var o = $('#chinese').val()
    var b = $('#math').val()
    var c = $('#science').val()
    var d = $('#english').val()
    var e = $('#society').val()
    var f = $('#composition').val()
    o = Number(o)
    b = Number(b)
    c = Number(c)
    d = Number(d)
    e = Number(e)
    f = Number(f)
    ff = f * 2
    score = o + b + c + d + e + ff
    $('#result').val(score)


})
