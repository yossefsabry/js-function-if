function info(us = "un", ag = "un", rt = 0, show = "yes", ...skill) {
  document.write("<div>");

  document.write(`<h2> welcome with mr, ${us} </h2>`);

  document.write(`<hr>`);

  document.write(`<h2> your age : ${ag} </h2>`);

  document.write(`<hr>`);

  document.write(`<h2> you payed $${rt} in month</h2>`);

  document.write(`<hr>`);

  if (show === "yes") {
    if (skill.length > 0) {
      document.write(`<h2>your skills is : ${skill.join(" | ")} </h2>`);
    } else {
      document.write(`<h2>your skills : empty </h2>`);
    }
  } else {
    document.write(`<h2>your skills is hidden </h2>`);
  }

  document.write(`<hr>`)

  document.write("</div>");
}

info("yossef", 20, 50,"yes" , "html","css","js");


console.log("#".repeat(40))
console.log(" simple project for if and function using js")
console.log("#".repeat(40))