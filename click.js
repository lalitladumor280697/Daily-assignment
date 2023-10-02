import React, { useState } from 'react';

function SearchFilter() {
    // Step 1: Declare React states for search input values
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    // Sample list of items
    const items = [
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Fig',
        'Grape',
        'Lemon',
        'Mango',
        'Orange',
        'Peach',
    ];

    // Step 3: Function to filter items based on search term
    const filterItems = () => {
        const filtered = items.filter((item) =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(filtered);
    };

    // Step 2: Function to handle changes in the input field
    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        filterItems(); // Call the filter function whenever the input changes
    };

    return (
        <div>
            <h2>Search Filter</h2>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <ul>
                {/* Display the filtered items */}
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchFilter;
