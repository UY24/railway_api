const messages = {
  success: {
    userCreated: "User created successfully.",
    userUpdated: "User updated successfully.",
    userGet: "User details retrieved successfully.",
    tCreated: "Train created successfully.",
    tUpdated: "Train updated successfully.",
    tGet: "Train details retrieved successfully."
  },
  error: {
    internalServerError: "Internal server error.",
    userNotFound:"User not found",
    trainNotFound: "Train not found.",
    missingEmail: "Email is required.",
    invalidEmail: "Invalid email address.",
    invalidPassword: "Invalid password",
    invalidUser: "Please authenticate with a valid token",
    notAdmin: "You are not an admin",
    invalidRequest: "Invalid request parameters.",
  },
};

module.exports = messages;
