function switchoff()
{
  document.getElementById("bulbimg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  document.getElementById("catimg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
  document.getElementById("switchstatus").textContent="Switch Off";
  document.getElementById("offswitch").style.backgroundColor="red";
  document.getElementById("onswitch").style.backgroundColor="gray";
}
function switchon()
{
  document.getElementById("bulbimg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  document.getElementById("catimg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
  document.getElementById("switchstatus").textContent="Switch On";
  document.getElementById("onswitch").style.backgroundColor="green";
  document.getElementById("offswitch").style.backgroundColor="gray";
}