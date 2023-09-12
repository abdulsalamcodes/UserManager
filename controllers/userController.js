import pool from "../utils/dbConfig";

export const createUser = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        errors: ["Name is required."],
      });
    }

    if (typeof name !== "string") {
      return res.status(400).json({
        success: false,
        errors: ["Name must be a string."],
      });
    }

    const query = "INSERT INTO users (name) VALUES ($1) RETURNING *";
    const values = [name];

    const newuser = await pool.query(query, values);

    if (newuser.rows.length === 0) {
      return res.status(500).json({
        success: false,
        errors: ["Failed to create the user."],
      });
    }

    const createduser = newuser.rows[0];

    // Logging
    console.log(`Created user with ID: ${createduser.user_id}`);

    res.status(201).json({
      success: true,
      data: { user: createduser },
      message: "User created successfully.",
    });
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({
      success: false,
      errors: ["Internal server error."],
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const response = await pool.query("SELECT * FROM users");

    // Respond with the fetched users
    res.status(200).json({
      success: true,
      data: { users: response.rows },
      message: "Users retrieved successfully.",
    });
  } catch (error) {
    // Handle any errors that occur during the database query
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      errors: ["Internal server error."],
    });
  }
};

// Get a specific user by ID
export const getUser = async (req, res) => {
  const { user_id } = req.params;
  const query = "SELECT * FROM users WHERE user_id = $1";
  const values = [user_id];

  try {
    const response = await pool.query(query, values);

    if (response.rows.length === 0) {
      return res.status(404).json({
        success: false,
        errors: ["User not found."],
      });
    }

    const user = response.rows[0];
    return res.status(200).json({
      success: true,
      data: { user },
      message: "User retrieved successfully.",
    });
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return res.status(500).json({
      success: false,
      errors: ["Internal server error."],
    });
  }
};

// Update a user by ID
export const updateUser = async (req, res) => {
  const { user_id } = req.params;
  const { name } = req.body;
  const query = "UPDATE users SET name = $1 WHERE user_id = $2 RETURNING *";
  const values = [name, user_id];

  try {
    const response = await pool.query(query, values);

    if (response.rows.length === 0) {
      return res.status(404).json({
        success: false,
        errors: ["User not found."],
      });
    }

    const updatedUser = response.rows[0];
    return res.status(200).json({
      success: true,
      data: { user: updatedUser },
      message: "User updated successfully.",
    });
  } catch (error) {
    console.error("Error updating user:", error.message);
    return res.status(500).json({
      success: false,
      errors: ["Internal server error."],
    });
  }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  const { user_id } = req.params;
  const query = "DELETE FROM users WHERE user_id = $1 RETURNING *";
  const values = [user_id];

  try {
    const response = await pool.query(query, values);

    if (response.rows.length === 0) {
      return res.status(404).json({
        success: false,
        errors: ["User not found."],
      });
    }

    // Success message
    return res.status(200).json({
      success: true,
      message: "User deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting user:", error.message);
    return res.status(500).json({
      success: false,
      errors: ["Internal server error."],
    });
  }
};
