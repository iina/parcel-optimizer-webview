const { Optimizer } = require("@parcel/plugin");
const { blobToString } = require("@parcel/utils");

module.exports = new Optimizer({
  async optimize({ contents, map }) {
    const replaced = (await blobToString(contents))
      .replace(/<script type="module".+?> *<\/script>/g, "")
      .replace(/nomodule=""|defer=""/g, "");
    return {
      contents: replaced,
      map,
    };
  },
});
