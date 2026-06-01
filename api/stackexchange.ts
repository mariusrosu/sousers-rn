import { User } from "./business/user";

interface UserDto {
  user_id: number;
  display_name: string;
  reputation: number;
  profile_image: string;
}

interface UsersResponseDto {
  items: UserDto[];
}

function toDomain(dto: UserDto): User {
  return {
    id: dto.user_id,
    name: dto.display_name,
    reputation: dto.reputation,
    profileImageUrl: dto.profile_image,
  };
}

export async function getTopUsers(): Promise<User[]> {
  const url =
    "https://api.stackexchange.com/2.2/users?page=1&pagesize=20&order=desc&sort=reputation&site=stackoverflow";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Request failed with status " + response.status);
  }

  const users: UsersResponseDto = await response.json();
  return users.items.map(toDomain);
}
