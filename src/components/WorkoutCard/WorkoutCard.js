import React, { useState } from 'react'
import useCollapse from 'react-collapsed';

export default function WorkoutCard() {
    const [isExpanded, setExpanded] = useState({
        key: 0,
        expanded: false
      });
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    return (
        <div className="journal-card" {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),})}>
                <div className="journal-title">
                    <span>Power 11/1/2020</span>
                </div>
                <div {...getCollapseProps()} className="journal-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="journal-options">
                    <span>edit</span>
                    <span>delete</span>
                </div>
            </div>
    )
}
