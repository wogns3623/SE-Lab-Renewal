const compile = inputNode => {
  console.log(inputNode);
  let html = inputNode.querySelector(".html");
  let css = inputNode.querySelector(".css");
  let js = inputNode.querySelector(".js");
  let code = inputNode.querySelector(".code").contentWindow.document;
  code.open();
  code.writeln(
    html.value +
      `<style type="text/css">\n${css.value}\n</style>\n` +
      `<script type="text/javascript">\n${js.value}\n</script>`
  );
  code.close();
};
export default compile;
