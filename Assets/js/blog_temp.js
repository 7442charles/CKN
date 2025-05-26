fetch('data/blogs.json')
  .then(res => res.json())
  .then(blogs => {
    const container = document.getElementById('blog-timeline-inner');
    const latest = blogs.slice(0, 5); // Get latest 5

    container.innerHTML = latest.map(blog => `
      <div class="mb-10 relative">
        <span class="absolute -left-[1.4rem] top-1 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 z-10">
          <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
          </svg>
        </span>
        &nbsp; 
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            <a href="${blog.link}" class="hover:underline text-blue-600 dark:text-blue-400">${blog.title}</a>
        </h3>
        <time class="block mb-2 text-sm text-gray-400 dark:text-gray-500">${new Date(blog.date).toDateString()}</time>
        <p class="text-base text-gray-500 dark:text-gray-400">${blog.description}</p>
        <a href="${blog.link}" class="mt-2 inline-block text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">Read More →</a>
      </div>
    `).join('');
  })
  .catch(err => {
    // console.error('Failed to load blog timeline:', err);
  });
