  var _, parseFile;
    var add, chunk, del, deleted_file, file, files, from_file, i, index, len, line, lines, ln_add, ln_del, new_file, noeol, normal, parse, restart, schema, start, to_file;
    schema = [[/^diff\s/, start], [/^new file mode \d+$/, new_file], [/^deleted file mode \d+$/, deleted_file], [/^index\s[\da-zA-Z]+\.\.[\da-zA-Z]+(\s(\d+))?$/, index], [/^---\s/, from_file], [/^\+\+\+\s/, to_file], [/^@@\s+\-(\d+),?(\d+)?\s+\+(\d+),?(\d+)?\s@@/, chunk], [/^-/, del], [/^\+/, add]];
      var i, len, m, p;
      for (i = 0, len = schema.length; i < len; i++) {
        p = schema[i];
    for (i = 0, len = lines.length; i < len; i++) {
      line = lines[i];