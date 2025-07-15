// Sidebar menu switching
const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('.section');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const sectionId = 'section-' + item.dataset.section;
        sections.forEach(sec => sec.classList.remove('active'));
        document.getElementById(sectionId).classList.add('active');
    });
});

// To-Do List
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, idx) => {
        const li = document.createElement('li');
        li.textContent = todo;
        const delBtn = document.createElement('button');
        delBtn.textContent = 'ลบ';
        delBtn.onclick = () => {
            todos.splice(idx, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
            renderTodos();
        };
        li.appendChild(delBtn);
        todoList.appendChild(li);
    });
}
todoForm.onsubmit = function(e) {
    e.preventDefault();
    const value = todoInput.value.trim();
    if (value) {
        todos.push(value);
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
        todoInput.value = '';
    }
};
renderTodos();

// Journal
const journalForm = document.getElementById('journal-form');
const journalDate = document.getElementById('journal-date');
const journalText = document.getElementById('journal-text');
const journalList = document.getElementById('journal-list');
let journals = JSON.parse(localStorage.getItem('journals')) || [];

function renderJournals() {
    journalList.innerHTML = '';
    journals.forEach((entry, idx) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${entry.date}</strong><br>${entry.text}`;
        const delBtn = document.createElement('button');
        delBtn.textContent = 'ลบ';
        delBtn.onclick = () => {
            journals.splice(idx, 1);
            localStorage.setItem('journals', JSON.stringify(journals));
            renderJournals();
        };
        li.appendChild(delBtn);
        journalList.appendChild(li);
    });
}
journalForm.onsubmit = function(e) {
    e.preventDefault();
    const date = journalDate.value;
    const text = journalText.value.trim();
    if (date && text) {
        journals.push({ date, text });
        localStorage.setItem('journals', JSON.stringify(journals));
        renderJournals();
        journalDate.value = '';
        journalText.value = '';
    }
};
renderJournals();

// Notes
const notesForm = document.getElementById('notes-form');
const notesText = document.getElementById('notes-text');
const notesList = document.getElementById('notes-list');
let notes = JSON.parse(localStorage.getItem('notes')) || [];

function renderNotes() {
    notesList.innerHTML = '';
    notes.forEach((note, idx) => {
        const li = document.createElement('li');
        li.textContent = note;
        const delBtn = document.createElement('button');
        delBtn.textContent = 'ลบ';
        delBtn.onclick = () => {
            notes.splice(idx, 1);
            localStorage.setItem('notes', JSON.stringify(notes));
            renderNotes();
        };
        li.appendChild(delBtn);
        notesList.appendChild(li);
    });
}
notesForm.onsubmit = function(e) {
    e.preventDefault();
    const value = notesText.value.trim();
    if (value) {
        notes.push(value);
        localStorage.setItem('notes', JSON.stringify(notes));
        renderNotes();
        notesText.value = '';
    }
};
renderNotes();

// Ideas
const ideasForm = document.getElementById('ideas-form');
const ideasText = document.getElementById('ideas-text');
const ideasList = document.getElementById('ideas-list');
let ideas = JSON.parse(localStorage.getItem('ideas')) || [];

function renderIdeas() {
    ideasList.innerHTML = '';
    ideas.forEach((idea, idx) => {
        const li = document.createElement('li');
        li.textContent = idea;
        const delBtn = document.createElement('button');
        delBtn.textContent = 'ลบ';
        delBtn.onclick = () => {
            ideas.splice(idx, 1);
            localStorage.setItem('ideas', JSON.stringify(ideas));
            renderIdeas();
        };
        li.appendChild(delBtn);
        ideasList.appendChild(li);
    });
}
ideasForm.onsubmit = function(e) {
    e.preventDefault();
    const value = ideasText.value.trim();
    if (value) {
        ideas.push(value);
        localStorage.setItem('ideas', JSON.stringify(ideas));
        renderIdeas();
        ideasText.value = '';
    }
};
renderIdeas();

// Goals
const goalsForm = document.getElementById('goals-form');
const goalsText = document.getElementById('goals-text');
const goalsList = document.getElementById('goals-list');
let goals = JSON.parse(localStorage.getItem('goals')) || [];

function renderGoals() {
    goalsList.innerHTML = '';
    goals.forEach((goal, idx) => {
        const li = document.createElement('li');
        li.textContent = goal;
        const delBtn = document.createElement('button');
        delBtn.textContent = 'ลบ';
        delBtn.onclick = () => {
            goals.splice(idx, 1);
            localStorage.setItem('goals', JSON.stringify(goals));
            renderGoals();
        };
        li.appendChild(delBtn);
        goalsList.appendChild(li);
    });
}
goalsForm.onsubmit = function(e) {
    e.preventDefault();
    const value = goalsText.value.trim();
    if (value) {
        goals.push(value);
        localStorage.setItem('goals', JSON.stringify(goals));
        renderGoals();
        goalsText.value = '';
    }
};
renderGoals(); 
