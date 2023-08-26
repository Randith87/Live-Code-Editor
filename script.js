<script type="text/javascript" language="javascript">
 (function() {
    id = document.getElementById('css-code');
    if (id && id.txtInput) {
       name = id.txtInput;
      var unclicked = function() {
          if (name.value == '') {
              name.style.background = '#FFFFFF url(img/css3-logo.png) left no-repeat';
          }
       };
       var clicked = function() {
          name.style.background = '#ffffff';
       };
    name.onfocus = clicked;
    name.onblur = unclicked;
    unclicked();
    }
  })();
</script>