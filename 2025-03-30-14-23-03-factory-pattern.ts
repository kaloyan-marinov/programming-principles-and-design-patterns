export class User {
  private id: number;
  private name: string;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
  }
}

export class AdminUser extends User {
  private type: string;

  constructor(data: any) {
    super(data);
    this.type = "admin";
  }
}

export class ModeratorUser extends User {
  private type: string;

  constructor(data: any) {
    super(data);
    this.type = "moderator";
  }
}

export class RegularUser extends User {
  private type: string;

  constructor(data: any) {
    super(data);
    this.type = "regular";
  }
}

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
  user = new RegularUser(data);
}
