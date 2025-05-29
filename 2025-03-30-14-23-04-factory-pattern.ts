import {
  User,
  AdminUser,
  ModeratorUser,
  RegularUser,
} from "./2025-03-30-14-23-03-factory-pattern";

interface UserData {
  id: number;
  name: string;
}

class UserFactory {
  static create(type: "admin" | "moderator" | "regular", data: UserData): User {
    switch (type) {
      case "admin":
        return new AdminUser(data);
      case "moderator":
        return new ModeratorUser(data);
      case "regular":
        return new RegularUser(data);
      default:
        throw new Error(`Invalid user type: ${type}`);
    }
  }
}

const _type = "admin";
const _data: UserData = {
  id: 1,
  name: "John",
};
const userViaFactory: User = UserFactory.create(_type, _data);
