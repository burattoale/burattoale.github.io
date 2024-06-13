// Load the JSON file
fetch('list.json')
    .then(response => response.json())
    .then(data => {
        // Get the container element where the blocks will be created
        const container = document.getElementById('conferences');

        // Get the list of papers under the conferences label
        const conferences = data.conferences;
        // Iterate over the papers data and create blocks
        conferences.forEach(paper => {
            // Create a new block element
            const block = document.createElement('div');
            block.classList.add('col-md-6 col-lg-4');
            const innerBlock = document.createElement('div');
            innerBlock.classList.add('project-card-no-image');
            block.appendChild(innerBlock);

            // Create the title element
            const title = document.createElement('h3');
            title.textContent = paper.title;
            innerBlock.appendChild(title);

            // Create the authors element
            const authors = document.createElement('h4');
            authors.textContent = `Authors: ${paper.authors.join(', ')}`;
            innerBlock.appendChild(authors);
            // Add see more button
            const seeMore = document.createElement('a');
            seeMore.textContent = 'See More';
            seeMore.classList.add('btn', 'btn-outline-primary', 'btn-sm');
            seeMore.role = 'button';
            seeMore.href = paper.link;
            seeMore.target = '_blank';
            innerBlock.appendChild(seeMore);

            // Create the tags element
            const tags = document.createElement('div');
            tags.classList.add('tags');
            const venue = document.createElement('a');
            venue.textContent = paper.name + ", " + paper.year;
            venue.href = "#";
            tags.appendChild(venue);
            innerBlock.appendChild(tags);


            // Append the block to the container
            container.appendChild(block);
        });

        // Do the same for the journals
        const journals = data.journals;
        const journalContainer = document.getElementById('journals');
        journals.forEach(paper => {
            const block = document.createElement('div');
            block.classList.add('col-md-6 col-lg-4');
            const innerBlock = document.createElement('div');
            innerBlock.classList.add('project-card-no-image');
            block.appendChild(innerBlock);

            const title = document.createElement('h3');
            title.textContent = paper.title;
            innerBlock.appendChild(title);

            const authors = document.createElement('h4');
            authors.textContent = `Authors: ${paper.authors.join(', ')}`;
            innerBlock.appendChild(authors);

            const seeMore = document.createElement('a');
            seeMore.textContent = 'See More';
            seeMore.classList.add('btn', 'btn-outline-primary', 'btn-sm');
            seeMore.role = 'button';
            seeMore.href = paper.link;
            seeMore.target = '_blank';
            innerBlock.appendChild(seeMore);

            const tags = document.createElement('div');
            tags.classList.add('tags');
            const venue = document.createElement('a');
            venue.textContent = paper.name + ", " + paper.year;
            venue.href = "#";
            tags.appendChild(venue);
            innerBlock.appendChild(tags);

            journalContainer.appendChild(block);
        });
    })
    .catch(error => {
        console.error('Error loading papers:', error);
    });