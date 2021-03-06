// Generated by CoffeeScript 1.3.3
(function() {

  define(["smog/server", "smog/util", "smog/notify", "smog/editor", "templates/edit", "templates/collection"], function(server, util, notify, editor, templ, collection) {
    return function(_arg) {
      var edit, name, realname;
      name = _arg.name;
      realname = name.toLowerCase();
      $('#content').html(templ({
        title: 'Find',
        id: realname,
        button: 'Execute'
      }));
      edit = editor.create("" + realname + "-edit-view", {
        mode: "javascript",
        wrap: 100,
        worker: false,
        value: "{\r\n\r\n}"
      });
      return $('#edit-button').click(function() {
        return server.collection({
          collection: realname,
          type: 'find',
          query: edit.getText()
        }, function(err, docs) {
          if (err != null) {
            return notify.error("Error retrieving documents: " + (err.err || err));
          }
          edit.destroy();
          return $('#content').html(collection({
            name: name,
            documents: util.filterDocuments(docs)
          }));
        });
      });
    };
  });

}).call(this);
