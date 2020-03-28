import React, { useState } from 'react'

import {
    Header,
    MenuBody,
    MenuContainer,
    MenuHeader,
    MenuItem,
    MenuHide,
    SelectionItem
} from './styles'

function sortAsc(a, b) {
    return (a.upvotes - a.downvotes) - (b.upvotes - b.downvotes);
}

function sortDesc(a, b) {
    return (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes);
}

function sortNone(a, b) {
    return 0;
}

function filterBoasts(post) {
    return post.isBoast;
}

function filterRoasts(post) {
    return !post.isBoast;
}

function filterNone(post) {
    return true;
}

export default function PostSorter({ setSort, setFilter }) {
    const [sortSelection, setSortSelection] = useState('None')
    const [filterSelection, setFilterSelection] = useState('None')

    let chooseSort = sortOrder => {
        setSortSelection(sortOrder)

        if (sortOrder === 'Ascending')
            setSort(() => sortAsc)
        else if (sortOrder === 'Descending')
            setSort(() => sortDesc)
        else
            setSort(() => sortNone)
    }

    let chooseFilter = filterBy => {
        setFilterSelection(filterBy)

        if (filterBy === 'Boasts')
            setFilter(() => filterBoasts)
        else if (filterBy === 'Roasts')
            setFilter(() => filterRoasts)
        else
            setFilter(() => filterNone)
    }

    return (
        <Header>
            <MenuContainer>
                <MenuHeader>
                    Sort By:
                </MenuHeader>
                <MenuBody>
                    <SelectionItem>
                        {sortSelection}
                        <i class="fas fa-chevron-down"></i>
                    </SelectionItem>
                    <MenuHide>
                        <MenuItem onClick={chooseSort.bind(this, 'Ascending')}>
                            Ascending
                        </MenuItem>
                        <MenuItem onClick={chooseSort.bind(this, 'Descending')}>
                            Descending
                        </MenuItem>
                        <MenuItem onClick={chooseSort.bind(this, 'None')}>
                            None
                        </MenuItem>
                    </MenuHide>
                </MenuBody>
            </MenuContainer>

            <MenuContainer>
                <MenuHeader>
                    Filter By:
                </MenuHeader>
                <MenuBody>
                    <SelectionItem>
                        {filterSelection}
                        <i class="fas fa-chevron-down"></i>
                    </SelectionItem>
                    <MenuHide>
                        <MenuItem onClick={chooseFilter.bind(this, 'Boasts')}>
                            Boasts
                        </MenuItem>
                        <MenuItem onClick={chooseFilter.bind(this, 'Roasts')}>
                            Roasts
                        </MenuItem>
                        <MenuItem onClick={chooseFilter.bind(this, 'None')}>
                            None
                        </MenuItem>
                    </MenuHide>
                </MenuBody>
            </MenuContainer>
        </Header>
    )
}
