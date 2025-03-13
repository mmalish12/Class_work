
const projects = {
    project1: { name: "Project 1", link: "/Users/maneeshamalish/Downloads/task_json_iframe/works/task1/index.html" },
    project2: { name: "Project 2", link: "/Users/maneeshamalish/Downloads/task_json_iframe/works/task2/index.html" },
    project3: { name: "Project 3", link: "/Users/maneeshamalish/Downloads/task_json_iframe/works/task3/index.html" },
};

function generateNavigation() {
    const navigation = document.createElement("nav");
    const list = document.createElement("ul");

    Object.keys(projects).forEach((key) => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");

        anchor.textContent = projects[key].name;
        anchor.href = "#";
        anchor.addEventListener("click", (event) => {
            event.preventDefault();
            loadProject(projects[key].link);
        });

        listItem.appendChild(anchor);
        list.appendChild(listItem);
    });

    navigation.appendChild(list);
    document.body.prepend(navigation);
}

function loadProject(link) {
    let iframeElement = document.querySelector("iframe");

    if (!iframeElement) {
        iframeElement = document.createElement("iframe");
        document.body.appendChild(iframeElement);
    }

    iframeElement.src = link;
}

window.addEventListener("load", generateNavigation);
