type User = {
  id: number;
  name: string;
};

export function UserCard({ user }: { user: User }) {
  return <div>{user.name}</div>;
}
