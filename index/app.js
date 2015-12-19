$.getJSON(
  "data.js",
  function(data) {
    $('#tree1').tree({
      data: data,
      dragAndDrop: true,
      autoOpen: true
    });
  }
);


