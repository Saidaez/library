exports.sendNotification = async (req, res) => {
  try {
    res.status(200).json({ message: "Notification sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
