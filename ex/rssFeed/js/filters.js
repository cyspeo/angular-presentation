app.filter('highlight', function($sce) {
    return function(text, search) {
      if (search) text = text.replace(new RegExp('('+search+')', 'gi'),
        '<span class="highlighted">$1</span>')
      return $sce.trustAsHtml(text)
    }
});