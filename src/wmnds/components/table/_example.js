const tableJS = () => {
  const tables = document.querySelectorAll('.wmnds-table');

  const getTableHeadChildren = table => {
    const tHeadChildren = table.querySelectorAll('thead tr > *'); // Using querySelectorAll as it has a fallback of an empty node list. Using children returns HTMLCollection which we can't forEach through.

    return tHeadChildren; // Return node list
  };

  const iterateTables = table => {
    const theadChildren = getTableHeadChildren(table); // Get all children from thead section

    if (!theadChildren.length) return table.classList.add('wmnds-table--without-header'); // If no headers found, add without-header class

    // Otherwise...

    // If our node list is greater than 1, then there are headers
    const tRows = table.querySelectorAll('tbody > tr'); // Get all table rows in our table body section

    return tRows.forEach(tRow => {
      const cells = tRow.querySelectorAll('td'); // Get all cells within our row

      // Loop through each cell within our row...
      cells.forEach((cell, i) => {
        const newCell = cell; // Map to new var to avoid mutating original
        const tHeadText = theadChildren[i].innerText; // Map the index of the cell to the index of the header we want as it will be in the same column of the table
        newCell.dataset.header = tHeadText; // Change the data-header on our cell to the header text so it appears on mobile
      });
    });
  };

  // START HERE
  if (tables.length) tables.forEach(iterateTables);
};

export default tableJS();
