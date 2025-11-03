import React, { useState, useEffect } from "react";

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: "",
    rating: "",
    description: "",
    list_of_what_you_will_learn: "",
    is_free: false,
    duration: "",
    course_category: "",
  });

  const fetchCourses = async () => {
    try {
      const response = await fetch("/api/courses"); // Update with your API URL
      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      } else {
        console.error("Failed to fetch courses");
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleCreateCourse = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ course: newCourse }),
      });
      if (response.ok) {
        fetchCourses(); // Refresh the courses list
        alert("Course created successfully!");
        setNewCourse({
          title: "",
          rating: "",
          description: "",
          list_of_what_you_will_learn: "",
          is_free: false,
          duration: "",
          course_category: "",
        });
      } else {
        const errorData = await response.json();
        alert(`Error creating course: ${errorData.errors.join(", ")}`);
      }
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  const handleDeleteCourse = async (id) => {
    try {
      const response = await fetch(`/api/courses/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.ok) {
        fetchCourses(); // Refresh the courses list
        alert("Course deleted successfully!");
      } else {
        alert("Failed to delete course");
      }
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Manage Courses</h2>

      {/* Course Creation Form */}
      <form onSubmit={handleCreateCourse} style={{ marginBottom: "20px" }}>
        <h3>Create New Course</h3>
        <input
          type="text"
          placeholder="Title"
          value={newCourse.title}
          onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Rating"
          value={newCourse.rating}
          onChange={(e) => setNewCourse({ ...newCourse, rating: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={newCourse.description}
          onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
          required
        ></textarea>
        <input
          type="text"
          placeholder="What You Will Learn"
          value={newCourse.list_of_what_you_will_learn}
          onChange={(e) =>
            setNewCourse({ ...newCourse, list_of_what_you_will_learn: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Duration"
          value={newCourse.duration}
          onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={newCourse.course_category}
          onChange={(e) =>
            setNewCourse({ ...newCourse, course_category: e.target.value })
          }
          required
        />
        <label>
          Free:
          <input
            type="checkbox"
            checked={newCourse.is_free}
            onChange={(e) => setNewCourse({ ...newCourse, is_free: e.target.checked })}
          />
        </label>
        <button type="submit">Create Course</button>
      </form>

      {/* Courses List */}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Rating</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.rating}</td>
              <td>{course.description}</td>
              <td>
                <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCourses;
