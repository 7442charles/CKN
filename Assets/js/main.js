// Select the container where projects will be displayed
const projectsContainer = document.querySelector('#projects .grid');

// Fetch the JSON data
fetch('Data/projects.json')
  .then(response => response.json())
  .then(projects => {
    projects.forEach(project => {
      // Create a project card
      const projectCard = document.createElement('a');
      projectCard.href = project.link;
      projectCard.target = '_blank';
      projectCard.rel = 'noopener noreferrer';
      projectCard.className = 'block group';

      projectCard.innerHTML = `
        <div class="bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div class="h-48 bg-gray-700">
            <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 text-white">${project.title}</h3>
            <p class="text-gray-300 mb-4">${project.description}</p>
            <div class="flex flex-wrap gap-2">
              ${project.tags.map(tag => `
                <span class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">${tag}</span>
              `).join('')}
            </div>
          </div>
        </div>
      `;

      // Append the project card to the container
      projectsContainer.appendChild(projectCard);
    });
  })
  .catch(error => console.error('Error loading projects:', error));
