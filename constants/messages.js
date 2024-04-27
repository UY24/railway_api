const messages = {
  success: {
    userCreated: "User created successfully.",
    userUpdated: "User updated successfully.",
    userGet: "User details retrieved successfully.",

    trainCreated: "Train created successfully.",
    trainUpdated: "Train updated successfully.",
    trainGet: "Train details retrieved successfully.",

    bookingCreated: "Booking created successfully.",
    bookingGet: "Bookings details retrieved sucessfully.",
    bookingCanceled: "Booking canceled successfully.",
  },
  error: {
    internalServerError: "Internal server error.",

    userNotFound: "User not found",
    missingEmail: "Email is required.",
    invalidEmail: "Invalid email address.",
    invalidPassword: "Invalid password",
    invalidUser: "Please authenticate with a valid token",

    trainNotFound: "Train not found.",
    notAdmin: "You are not an admin",

    bookingNotFound: "Booking not found.",
    notEnoughSeats: "Not enough seats available.",
  },
};

module.exports = messages;
