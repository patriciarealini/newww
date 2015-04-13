module.exports = function() {
  $(function(){
    var ready = new Date() > new Date("2015-04-13T06:00:00-07:00")
    var disabled = localStorage.getItem('disable-private-modules-banner')

    if (!ready || disabled || location.pathname === "/private-modules") {
      console.log("no banner")
      return
    }

    $('#notification-banner').show()

    $('#notification-banner a').click(function (e) {
      localStorage.setItem('disable-private-modules-banner', true)

      if ($(this).hasClass("banner-close")) {
        $('#notification-banner').slideUp()
        e.preventDefault()
      }
    })

  })
}
