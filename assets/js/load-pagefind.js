/* NOTE: Expected const defined globally before loading this script:
         - bundlePath: '{{ "pagefind/" | relURL }}'
         - itemsString: '{{ i18n "items" }}'
*/
/* NOTE2: custom CSS for Pagefind is defined in '_discovery.css' */

window.addEventListener('DOMContentLoaded', (event) => {
    const searchContainer = document.getElementById("search");
    if (!searchContainer) {
        return;
    }

    const { Instance, Input } = PagefindModularUI;

    const pagefindBarContainer = document.createElement('div');
    pagefindBarContainer.id = 'pagefind-bar-container';
    searchContainer.appendChild(pagefindBarContainer);

    const resultCountContainer = document.createElement('div');
    resultCountContainer.id = 'result-count-container';
    resultCountContainer.classList.add('filter-result-count-box');
    searchContainer.appendChild(resultCountContainer);

    const customResultsContainer = document.createElement('div');
    customResultsContainer.id = 'custom-results-container';
    searchContainer.appendChild(customResultsContainer);

    const showMoreContainer = document.createElement('div');
    showMoreContainer.id = 'show-more-container';
    searchContainer.appendChild(showMoreContainer);

    const processResult = (result) => {
        const resultFragment = document.createElement('div');
        resultFragment.classList.add('summary-classic');

        const link = document.createElement('a');
        link.href = result.url;
        link.style.textDecoration = 'none';
        link.style.color = 'inherit';

        const container = document.createElement('div');
        container.classList.add('summary-classic__container');

        if (result.meta.image) {
            const imageWrapper = document.createElement('div');
            imageWrapper.classList.add('summary-classic__image-wrapper');
            const img = document.createElement('img');
            img.src = result.meta.image;
            img.classList.add('summary-classic__image');
            img.loading = 'lazy';
            img.alt = result.meta.title;
            imageWrapper.appendChild(img);
            container.appendChild(imageWrapper);
        }

        const content = document.createElement('div');
        content.classList.add('summary-classic__content');
        content.dataset.dir = document.documentElement.dir || 'ltr';

        const title = document.createElement('h3');
        title.classList.add('title');
        title.textContent = result.meta.title;
        content.appendChild(title);

        if (result.meta.date) {
            const infos = document.createElement('div');
            infos.classList.add('summary__infos');
            const dateSpan = document.createElement('span');
            const date = new Date(result.meta.date);
            dateSpan.textContent = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
            infos.appendChild(dateSpan);
            content.appendChild(infos);
        }

        const text = document.createElement('div');
        text.classList.add('summary-classic__text');
        const excerpt = result.sub_results.map(item => item.excerpt).join("<br><br>");
        text.innerHTML = excerpt;
        content.appendChild(text);

        container.appendChild(content);
        link.appendChild(container);
        resultFragment.appendChild(link);

        return resultFragment;
    };

    let allResults = [];
    let displayedResultsCount = 0;
    const resultsPerPage = 8;
    let currentSearchTerm = "";

    const renderNextBatch = async () => {
        const resultsToShow = allResults.slice(displayedResultsCount, displayedResultsCount + resultsPerPage);

        for (const result of resultsToShow) {
            const data = await result.data();
            const resultElement = processResult(data);
            customResultsContainer.appendChild(resultElement);
        }

        displayedResultsCount += resultsToShow.length;
        updateShowMoreButton();
    };

    const updateShowMoreButton = () => {
        showMoreContainer.innerHTML = '';
        if (displayedResultsCount < allResults.length) {
            const remaining = allResults.length - displayedResultsCount;
            const button = document.createElement('button');
            button.classList.add('pagefind-show-more');
            button.textContent = `Show ${Math.min(resultsPerPage, remaining)} more results (${remaining} remaining)`;
            button.addEventListener('click', renderNextBatch);
            showMoreContainer.appendChild(button);
        }
    };

    const instance = new Instance({
        bundlePath: bundleString,
        excerptLength: 15
    });

    instance.add(new Input({
        containerElement: '#pagefind-bar-container',
        debounceTimeoutMs: 300
    }));

    instance.on('search', (search) => {
        customResultsContainer.innerHTML = "";
        showMoreContainer.innerHTML = "";
        resultCountContainer.innerHTML = "";
        allResults = [];
        displayedResultsCount = 0;
        currentSearchTerm = search;
    });

    instance.on('results', async (res) => {
        allResults = res.results;
        displayedResultsCount = 0;

        resultCountContainer.innerHTML = '<div class="taxo__title-nolink">' +
            itemsString + ': <span>' + allResults.length + '</span></div>';

        renderNextBatch();
    });
});
