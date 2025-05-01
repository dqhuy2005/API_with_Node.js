class Account {
  constructor(id, username, email, image_url) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.image_url = image_url;
  }

  static async findById(id) {
    const user = await db.query("SELECT * FROM accounts WHERE id = ?", [id]);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  static async login(username, password) {
    const user = await db.query(
      "SELECT * FROM accounts WHERE username = ? AND password = ?",
      [username, password]
    );

    if (!user) {
      throw new Error("Invalid username or password");
    }

    console.log(`User ${username} logged in successfully.`);

    return user;
  }
}
