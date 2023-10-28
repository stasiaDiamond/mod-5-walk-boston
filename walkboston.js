// * any comments preceded by an asterisk (*) are from me, not the curriculum
// * my goal is to write detailed helpful comments to help myself and fellow students 


// * ------ Walk Boston Data Challenge


// * imports the variable boston from data.js
// * this is ECMAScript Modules (ESM)
import boston from './data.js';

// * function for rendering the list to HTML container
function renderTopSalaries(boston, container) {
  // * extracts data from the boston array, sets to people
  const people = boston.data;
  // * all of this could be on one line, but i am breaking out for readability
  // * people.slice() creates a copy of the people array
  // * .sort() is immediately called on the copied array
  // * .sort() takes 2 arguments: a & b
  // * a[11] and b[11] are 2 salaries to be compared (salary value is at index 11)
  // * b - a will calculate salaries, some resulting in negative numbers
  // * positive numbers will be at the end of the array, negatives at the top
  // * by negating the negative numbers with minus (-) we reverse the array to descending order
  // * .slice() takes 2 arguments, the start point and how many to slice from there
  const topSalaries = people.slice()
    .sort((a, b) => parseFloat(b[11] - parseFloat(a[11])))
    .slice(0, 5);

  // * variable html is set to a string
  // * HTML will use this unordered list, so this needs to a string
  let html = '<ul id="topSalaries">';

  // * using a for...of loop to iterate through the newly sliced array from data.js
  for (const person of topSalaries) {
    // * extract the name, salary, and jobTitle by their data.js array index
    const name = person[8];
    const salary = parseFloat(person[11]).toFixed(2);
    const jobTitle = person[9];
    // * creates, adds, and sets html equal to a string
    // * the string creates an open bubble list 
    // * we use inline CSS to bold jobTitle to append each list item to the html doc
    html += `
      <li>
        <strong>${name}</strong> - Job Title: ${jobTitle}, Total Salary: $${salary}
      </li>
    `;
  }

  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
  // * this closes the unordered list after the function is done
  html += '</ul>';
  // * use .innerHTML (which is not good practice) to add it to the page
  // * it's more secure to use .createElement() and .appendChild() but i don't care here
  container.innerHTML = html;
}
// * call the function, use boston from data.js, retrieve thr html id topSalaries
// * this renders the list of top earners to the topSalaries <section> in HTML
renderTopSalaries(boston, document.getElementById('topSalaries'));


// * --------STEP 2--------
// * function to display top employees in HTML container with a minimum salary
function displayTopEmployees(data, container, minSalary) {
  // * uses arrow function to create then filter an array called employee
  // * uses parseFloat() to make a string a number 
  // * uses .toFixed() to ensure number has only 2 decimal points after it
  // * will check if salary is greater than minSalary
  const topEmployees = data.filter(employee => parseFloat(employee[11]) >= minSalary);
  // * grabs the container element from HTML doc
  const containerElement = document.getElementById(container);

  // * if no one over $200,000 
  if (topEmployees.length === 0) {
    containerElement.innerHTML = '<p>No one earns over $200,000</p>';
    return;
  }

  // * creates a string for html to use an unordered list 
  // * using template literal to .map() over employees array, creates new array
  // * uses .join() to put each employee's info together with a space between 
  const html = `
    <ul>
      ${topEmployees.map(employee => `
        <li><strong>${employee[8]}</strong> - Total Salary: $${parseFloat(employee[11]).toFixed(2)}</li>
      `).join(' ')}
    </ul>`;
  // * sets all this to the container element in our HTML doc
  containerElement.innerHTML = html;
}
// * calls function, uses boston.data, uses topEmployees container, minSalary 200,000
displayTopEmployees(boston.data, 'topEmployees', 200000);

// * -----Challenges-------------
// * had to module.exports boston out of data.js and import into walkboston.js
// * none of this was taught, but is required to complete the assignment with no errors in dev console
// * had to npm init -y for a package.json. Also never taught
// * had to "type: module" in the package.json and "script type module" in HTML
// * never taught this either
// * i kept getting errors until i fixed all this stuff
// * i was curious what these Bostonians did for their salaries, so i added job titles


// ------ Provided Solution FIle:

// function renderPosts(boston, container) {
//   var people = boston.data;
//   const len = boston.data.length;
//   var html = '';
//   for (let i = 0; i < len; i++) {
//     html +=
//       '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
//   }
//   container.innerHTML = '<ul id = "data">' + html + '</ul>';
// }

// function renderTopSalaries(boston, container) {
//   // Step 1 solution
//   var people = boston.data;
//   var topSalaries = people.sort((a, b) => b[11] - a[11]).slice(0, 5);
//   const len = topSalaries.length;
//   var html = '';
//   for (let i = 0; i < len; i++) {
//     html +=
//       '<li class="top">' +
//       '<h2>' +
//       topSalaries[i][8] +
//       '</h2>' +
//       '<h3>' +
//       topSalaries[i][11] +
//       '</h3>';
//   }

//   container.innerHTML = '<ul id = "topSalaries">' + html + '</ul>';
// }

// function renderTopEmployees(boston, container) {
//   //step 2 solution
//   var people = boston.data;
//   var topEmployees = people.filter((a) => a[11] > 200000);
//   const len = topEmployees.length;
//   var html = '';
//   for (let i = 0; i < len; i++) {
//     html +=
//       '<li class="top">' +
//       '<h2>' +
//       topEmployees[i][8] +
//       '</h2>' +
//       '<h3>' +
//       topEmployees[i][11] +
//       '</h3>';
//   }

//   container.innerHTML += '<ul id = "topEmployees">' + html + '</ul>';
// }

// renderTopSalaries(boston, document.getElementById('container')); //step 1 solution
// renderTopEmployees(boston, document.getElementById('container')); //step 2 solution

// * --------- How I Passed the Codio Assignment:
// function renderPosts(boston, container) {
//   const people = boston.data;
//   const len = boston.data.length;
//   let html = '';
//   for (let i = 0; i < len; i++) {
//     html +=
//       '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
//   }

//   // TODO: add code to display the html variable inside a ul element with id="data"
//   // Hint: you can use the container parameter's innerHTML property to insert Html tags
//   // * Step 1: an unordered list is added and set equal to the variable html
//   html += '<ul>';
//   // * use .innerHTML (which is not good practice) to add it to the page
//   container.innerHTML = html;
// }
// renderPosts(boston, document.getElementById('container'),5);

// function displayTopEmployees(data, container, minSalary) {
//   const topEmployees = data.filter(employee => parseFloat(employee[10]) >= minSalary);
//   const containerElement = document.getElementById(container);

//   if (topEmployees.length === 0) {
//     containerElement.innerHTML = '<p>No top earners found.</p>';
//     return;
//   }

//   const html = `
//     <ul>
//       ${topEmployees.map(employee => `
//         <li><strong>${employee[8]}</strong> - Total Salary: $${parseFloat(employee[10]).toFixed(2)}</li>
//       `).join('')}
//     </ul>`;

//   containerElement.innerHTML = html;
// }

// displayTopEarners(boston.data, 'topEmployees', 200000);

