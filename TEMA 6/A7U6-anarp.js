function createNode(element, depth) {
  let output = " ".repeat(depth * 2) + "<" + element.nodeName;
  if (element.attributes.length > 0) {
    for (const attribute of element.attributes) {
      output += " " + attribute.name + "='" + attribute.value + "'";
    }
  }
  output += ">\n";

  if (element.childNodes.length > 0) {
    for (const child of element.childNodes) {
      if (child.nodeType === 1) {
        output += createNode(child, depth + 1);
      }
    }
  }

  output += " ".repeat(depth * 2) + "</" + element.nodeName + ">\n";
  return output;
}

const tree = document.getElementById("tree");
tree.textContent = createNode(document.documentElement, 0);
