# npm i react-pagination-matt

# yarn add react-pagination-matt


```
  import React from "react";
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCourses, setTotalCourses] = useState(0);
  const coursesPerPage = 5;
```

```
  <Pagination
    courses={totalCourses}
    coursesPerPage={coursesPerPage}
    setCurrentPage={setCurrentPage}
    currentPage={currentPage}
    containerStyle={'bg-blue-500'}
  />
```

```
  ## Advanced Function

  ### Search filter for auto pagination

  import React, { useMemo, useState } from "react";
  const coursesData = useMemo(() => {
    let computedCourses = courses; // Courses Data
    if (searchTerm) {
      computedCourses = computedCourses.filter((course) =>
        course.Course_Name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setTotalCourses(computedCourses.length);

    //Current Page slice
    return computedCourses.slice(
      (currentPage - 1) * coursesPerPage,
      (currentPage - 1) * coursesPerPage + coursesPerPage
    );
  }, [courses, currentPage, searchTerm]);
```