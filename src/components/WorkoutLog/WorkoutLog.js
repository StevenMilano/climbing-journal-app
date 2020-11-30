import React, { useState } from 'react';
import useCollapse from 'react-collapsed';
import WorkoutCard from '../WorkoutCard/WorkoutCard';
import WorkoutStore from '../WorkoutCard/WorkoutCard';

export default function WorkoutLog() {
  // const [isExpanded, setExpanded] = useState({
  //   key: 0,
  //   expanded: false
  // });
  // const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  // const workoutCardLog = WorkoutCard.map((WorkoutStore) => <li>{WorkoutStore.workoutCard}</li>);
    return (
      <div>
          <header role="banner">
              <h1>Workout Log</h1>
          </header>
            <WorkoutCard />
            <WorkoutCard />
            <WorkoutCard />
          <section>
          </section>
      </div>
    )
}

