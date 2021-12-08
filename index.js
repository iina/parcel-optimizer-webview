const { Optimizer } = require("@parcel/plugin");

module.exports = new Optimizer({
  async optimize({ contents, map }) {
    if (typeof contents !== "string") {
      throw new Error(
        "WebViewOptimizer: Only string contents are currently supported"
      );
    }

    const replaced = contents
      .replace(/<script type="module".+?> *<\/script>/g, "")
      .replace(/nomodule=""|defer=""/g, "");
    return {
      contents: replaced,
      map,
    };
  },
});
