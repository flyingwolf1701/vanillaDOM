// 
const issuesDB = [
  {
    id: 1,
    issue: 'Submit button not working',
    type: 'bug', // bug, suggestion, other
    details: 'When I try and create a new context the button does not seem to click. and nothing happens.',
    status: 'pendingReview', // pending review, In Progress, Resolved, Goals
    priority: 'high', // low, med, high
    assigned_to: 'Patrick',
    created_at: '4-26-2022',
    created_by: 'Tim',
  },
  {
    id: 2,
    issue: 'I want fireworks when I complete all my tasks',
    type: 'suggestion', // bug, suggestion, other
    details: 'I think that would be super motivating.',
    status: 'goals', //pending review, In Progress, Resolved, Goals
    priority: 'Low', // low, med, high
    assigned_to: 'Patrick',
    created_at: '4-26-2022',
    created_by: 'Daisy',
  },
  {
    id: 3,
    issue: 'Why does it tell me I drink too much?',
    type: 'other', // bug, suggestion, other
    details: 'It just keeps telling me I\'m and alcoholic!',
    status: 'inProgress', //pending review, In Progress, Resolved, Goals
    priority: 'med', // low, med, high
    assigned_to: 'Patrick',
    created_at: '4-26-2022',
    created_by: 'Marsha',
  },
  {
    id: 4,
    issue: 'guns',
    type: 'suggestion', // bug, suggestion, other
    details: 'needs more guns',
    status: 'pendingReview', //pending review, In Progress, Resolved, Goals
    priority: 'med', // low, med, high
    assigned_to: 'Patrick',
    created_at: '4-26-2022',
    created_by: 'Mike',
  },
  {
    id: 5,
    issue: 'art',
    type: 'suggestion', // bug, suggestion, other
    details: 'can it look nicer?',
    status: 'resolved', //pending review, In Progress, Resolved, Goals
    priority: 'high', // low, med, high
    assigned_to: 'Patrick',
    created_at: '4-26-2022',
    created_by: 'Brian',
  },
]

const body = document.body;

//nav bar

const navBar = document.createElement('header')
navBar.setAttribute('class', 'nav-bar')
navBar.innerText ='Nav Bar'
body.append(navBar)

//main container

const main = document.createElement('main') 
const mainAttr = {
  class: 'main-container',
  
}
setAttributes(main, mainAttr)
body.append(main)

function setAttributes(element, attributes){
  Object.keys(attributes).forEach(attr => {
    element.setAttribute(attr, attributes[attr])
  });
}

// Form container
const formContainer = document.createElement('div');
const formContainerAttr = {
  class: 'form-container',
}
setAttributes(formContainer, formContainerAttr)
formContainer.innerText = 'Add issue or suggestion'
main.append(formContainer)

const form = document.createElement('form')
// form.setAttributes
formContainer.append(form)

const title = document.createElement('input');
const titleAttr = {
  placeholder: 'What is the issue?',
  type: 'text',
  class: 'form'
}
setAttributes(title, titleAttr)
form.append(title)

//select type

const selectIssue = document.createElement('select');
const selectIssueAttr = {
  name: 'issue'
}
setAttributes(selectIssue, selectIssueAttr)
form.append(selectIssue)

const options = (issue) => {
  const option1 = document.createElement('option');
  option1.innerText = issue;
  const optionAttr = {
    value: issue,

  }
  setAttributes(option1, optionAttr)
  selectIssue.append(option1)
}

const optionsArray = ['Bug', 'Suggestion', 'Other'];

optionsArray.forEach(el => {
  options(el);
});

// textfield to describe the issue

const textField = document.createElement('textarea');
const textFieldAttr = {
  cols: 30,
  rows: 5,
  name: 'comments',
  class: 'form-container',
  placeholder: 'Please describe in detail the issue you are having or tell us how we can improve the app.'
}
setAttributes(textField, textFieldAttr);
form.append(textField);

//Select Priority

const priority = document.createElement('select');
const priorityAttr = {
  name: 'priority',
}
setAttributes(priority, priorityAttr)
form.append(priority)

const priorityOptions = (val, inner) => {
  const priorityOption = document.createElement('option');
  priorityOption.innerText = inner;
  const priorityOptionAttr = {
    value: `${val}`,

  }
  setAttributes(priorityOption, priorityOptionAttr)
  priority.append(priorityOption)
}

const priorityOptionsArray = {
  '': '--Priority--',
  bug: 'Bug',
  suggestion: 'Suggestion',
  other: 'Other',
};


for (const [key, value] of Object.entries(priorityOptionsArray)) { 
  priorityOptions(key, value);
}



//Submit button

const button = document.createElement('button');
button.innerText = 'submit'
form.append(button);

// 

// Going to use a function that generates everything I need...

const createElement = (initObj) => {
  const element = document.createElement(initObj.Tag);
  for (let prop in initObj){
    element[prop] = initObj[prop];
  }
  return element;
}

const resultsHeader = createElement({
  Tag: 'div',
  innerText: 'Status: ',
});
const resultsHeaderAttr = {
  class: 'results-header'
}
setAttributes(resultsHeader, resultsHeaderAttr);
main.append(resultsHeader)

// Buttons to show status
const statusBtn = {
  all: 'All', 
  pendingReview: 'Pending Review', 
  inProgress: 'In Progress', 
  resolved: 'Resolved', 
  goals: 'Goals',
  }

for (const [key, value] of Object.entries(statusBtn)){
  const button = createElement({
    Tag: 'button',
    innerText: value,
  })
  const buttonAttr = {
    class: `button`,
  }
  setAttributes(button, buttonAttr);
  const btnToggle = document.querySelector(`.${key}`);
  button.addEventListener('click', () => {
    if (key == 'all'){
    showIssues()
    // } else {
    //   const pr = document.querySelector('.pendingReview')
    //   const g = document.querySelector('.goals')
    //   const r = document.querySelector('.resolved')
    //   const ip = document.querySelector('.inProgress')
    //   showIssues()
    }
  })
  resultsHeader.append(button)
};


// display issues

//All
function showIssues (showOnly) {
issuesDB.map(item => {
// Individual wrapper
  const resultsContainer = createElement({
    Tag: 'div',
    // innerText: 'results container',
  });
  const resultsContainerAttr = {
    class: `results-container ${item.status}`
  }
  setAttributes(resultsContainer, resultsContainerAttr);
  main.append(resultsContainer)

//Header  
  const header = createElement({
    Tag: 'div',
    innerText: `${item.created_by} submitted a ticket for a(n) ${statusBtn[item.type]}`,
  })
  const headerAttr = {
    class: `header`,
  }
  setAttributes(header, headerAttr);
  resultsContainer.append(header)

//Subject line  
  const subjectLine = createElement({
    Tag: 'div',
    innerText: `${item.issue}`,
  })
  const subjectLineAttr = {
    class: `subject-line`,
  }
  setAttributes(subjectLine, subjectLineAttr);
  resultsContainer.append(subjectLine)

  //Body
  const body = createElement({
    Tag: 'div',
    innerText: `${item.details}`,
  })
  const bodyAttr = {
    class: `subject-line`,
  }
  setAttributes(body, bodyAttr);
  resultsContainer.append(body)
  
  //Footer
  // console.log(`submitted on: ${item.created_at}  assigned to: ${assigned_to} priority: ${priority}`)

  const footer = createElement({
    Tag: 'div',
    innerText: `submitted on: ${item.created_at},  assigned to: ${item.assigned_to}, priority: ${item.priority}, status: ${item.status}`
  })
  const footerAttr = {
    class: `footer`,
  }
  setAttributes(footer, footerAttr);
  resultsContainer.append(footer)
  
})
}

//     id: 1,
//     issue: 'Submit button not working',
//     type: 'bug', // bug, suggestion, other
//     details: 'When I try and create a new context the button does not seem to click. and nothing happens.',
//     status: 'pending review', // pending review, In Progress, Resolved, Goals
//     priority: 'high', // low, med, high
//     assigned_to: 'Patrick',
//     created_at: '4-26-2022',
//     created_by: 'Tim',









