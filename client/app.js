// 
const issuesDB = [
  {
    id: 1,
    issue: 'Submit button not working',
    type: 'bug', // bug, suggestion, other
    details: 'When I try and create a new context the button does not seem to click. and nothing happens.',
    status: 'pending review', // pending review, In Progress, Resolved, Goals
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
    status: 'Goals', //pending review, In Progress, Resolved, Goals
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
    status: 'in progress', //pending review, In Progress, Resolved, Goals
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
    status: 'pending review', //pending review, In Progress, Resolved, Goals
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

//select
const select = document.createElement('select');
const selectAttr = {
  name: 'issue'
}
setAttributes(select, selectAttr)
form.append(select)

const options = (issue) => {
  const option = document.createElement('option');
  option.innerText = issue;
  const optionAttr = {
    value: `${issue} test`,

  }
  setAttributes(option, optionAttr)
  select.append(option)
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

const button = document.createElement('button');
button.innerText = 'submit'
form.append(button);

// 

// Going to use a function that generates everything I need...

const createElement = (initObj) => {
  const element = document.createElement(initObj.Tag);
  for (let prop in initObj){
    if (prop === 'childNodes'){
      initObj.childNodes.forEach((node) => {
        element.appendChild(node)
      });
    } else if (prop === 'attributes'){
      initObj.attributes.forEach((attr) => {
        element.setAttribute(attr.key, attr.value)
      });
    } else {
      element[prop] = initObj[prop];
    }
  }
  return element;
}

const resultsContainer = createElement({
  Tag: 'div',
  innerText: 'original',
  attributes:
    [
      {key: 'class', value: 'results-container'},
    ]
});
main.append(resultsContainer)

// display issues

//All
issuesDB.map(item => {
  let element = item;
  console.log(element)
//Header  
  const header = createElement({
    Tag: 'div',
    innerText: `${element.created_by} submitted a ticket for a ${item.type}`,
    // const titleAttr = {
    //   placeholder: 'What is the issue?',
    //   type: 'text',
    //   class: 'form'
    // }
    // setAttributes(title, titleAttr)
    // attributes:[
    //   {key: 'class', value: `results`}, 
    //   // {id: 'class', value: item.type}
    // ],

  })
//Subject line  
const subjectLine = createElement({
  Tag: 'div',
  innerText: `${item.created_by} submitted a ticket for a ${item.type}`,
  attributes:[
    {key: 'class', value: 'results'}
  ],
})
  
  resultsContainer.append(header)
})


//     id: 1,
//     issue: 'Submit button not working',
//     type: 'bug', // bug, suggestion, other
//     details: 'When I try and create a new context the button does not seem to click. and nothing happens.',
//     status: 'pending review', // pending review, In Progress, Resolved, Goals
//     priority: 'high', // low, med, high
//     assigned_to: 'Patrick',
//     created_at: '4-26-2022',
//     created_by: 'Tim',









