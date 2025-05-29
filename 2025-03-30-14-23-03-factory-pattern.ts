export const type = "admin";
export const data = {
  id: 1,
  name: "John",
};

let user: User;

if (type === "admin") {
  user = new AdminUser(data);
} else if (type === "moderator") {
  user = new ModeratorUser(data);
} else {
  user = RegularUser(data);
}
