let btn = document.querySelector("button");
let result = document.querySelector("ol");
let collegeUrl = "http://universities.hipolabs.com/search?name=";

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  let colArr = await getColl(country);
  show(colArr);
});
function show(colArr) {
  result.innerHTML = "";
  for (college of colArr) {
    let li = document.createElement("li");
    result.appendChild(li).innerText = college.name;
    console.log(college.name);
  }
}
async function getColl(country) {
  try {
    let res = await axios.get(collegeUrl + country);
    return res.data;
  } catch (e) {
    console.log("error: ", e);
  }
}
