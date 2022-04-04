/** Helpers are empty for now. All path generation for this exporter is done purely through the path blueprint */
Pulsar.registerFunction("logKeys", function (object) {
    console.log(Object.keys(object));
    for (const entry in object) {
      console.log(entry);
    }
  });